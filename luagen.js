import { promises as fs } from 'fs';
import path from 'path';

async function generateDocs() {
    const luaJson = JSON.parse(await fs.readFile('lua.json', 'utf8'));
    const types = luaJson.types;
    const docsPath = path.join('src', 'content', 'docs', 'reference', 'scripting', 'classes');

    // Ensure directory exists
    await fs.mkdir(docsPath, { recursive: true });

    for (const [typeName, typeData] of Object.entries(types)) {
        const content = generateTypeDoc(typeName, typeData);
        await fs.writeFile(path.join(docsPath, `${typeName}.mdoc`), content);
    }
}

function generateTypeDoc(typeName, typeData) {
    return `---
title: ${typeName}
description: ${typeData.summary || `Documentation for the ${typeName} type`}
---

${typeData.summary ? `${typeData.summary}\n\n` : ''}

${typeData.description ? `## Description\n\n${typeData.description}\n\n` : ''}

${typeData.guides ? `## Guides\n\n${Object.entries(typeData.guides).map(([title, link]) => `- [${title}](${link})`).join('\n')}\n\n` : ''}

${typeData.properties ? `## Properties

{% propertiesTable %}
${Object.entries(typeData.properties).map(([propName, propData]) => 
    `{% propertyRow type="${propData.type.toLowerCase()}" name="${propName}" /%}`
).join('\n')}
{% /propertiesTable %}` : ''}

${typeData.functions ? `## Methods

{% methodsTable %}
${Object.entries(typeData.functions).map(([funcName, funcData]) => 
    `{% methodRow returns="${funcData.returns || 'void'}" name="${funcName}" parameters="${funcData.args?.[0]?.map((a) => a.name).join(', ') || ''}" /%}`
).join('\n')}
{% /methodsTable %}` : ''}

${typeData.events ? `---
    
## Events

{% events %}
${Object.entries(typeData.events).map(([eventName, eventData]) => 
    `{% hidden %}\n### ${eventName}\n{% /hidden %}\n
{% event name="${eventName}" parameters=[${eventData.args?.map(a => (`{name: "${a.name}", type: "${a.type}"}`)).join(', ') || ''}] %}\n${eventData.description}\n{% /event %}`
).join('\n')}
{% /events %}` : ''}

${typeData.enums ? `---
    
## Enumerations

{% enums %}
${Object.entries(typeData.enums).map(([enumName, enumData]) => 
    `{% hidden %}\n### ${enumName}\n{% /hidden %}\n
    {% enum name="${enumName}" %}\n
    ${Object.entries(enumData.values).map(([name, data]) => `{% enumValue type="${enumName}" name="${name}" %}\n${data.description}\n{% /enumValue %}`).join('\n')}
    {% /enum %}`
).join('\n')}
{% /enums %}` : ''}

${typeData.properties ? `## Property Descriptions

{% properties %}
${Object.entries(typeData.properties).map(([propName, propData]) => 
    `{% hidden %}\n### ${propName}\n{% /hidden %}\n
{% property name="${propName}" type="${propData.type}" %}\n
${propData.description || ''}\n
{% /property %}`).join('\n')}
{% /properties %}` : ''}

${typeData.functions ? `## Method Descriptions

{% methods %}
${Object.entries(typeData.functions).map(([funcName, funcData]) => 
    `{% hidden %}\n### ${funcName}\n{% /hidden %}\n
{% method name="${funcName}" returns="${funcData.returns || 'void'}" parameters="${funcData.args?.[0]?.map((a) => a.name).join(', ') || ''}" %}\n
${funcData.description || ''}\n
{% /method %}`).join('\n')}
{% /methods %}` : ''}

`}

generateDocs().catch(console.error);