const fs = require('fs').promises;
const path = require('path');

async function generateDocs() {
    const luaJson = JSON.parse(await fs.readFile('lua.json', 'utf8'));
    const types = luaJson.types;
    const docsPath = path.join('src', 'content', 'docs', 'reference', 'scripting');

    // Ensure directory exists
    await fs.mkdir(docsPath, { recursive: true });

    for (const [typeName, typeData] of Object.entries(types)) {
        const typeDir = path.join(docsPath, typeName.toLowerCase());
        await fs.mkdir(typeDir, { recursive: true });

        // Generate type documentation
        const typeContent = generateTypeDoc(typeName, typeData);
        await fs.writeFile(path.join(typeDir, 'index.md'), typeContent);

        // Generate function documentation
        if (typeData.functions) {
            for (const [funcName, funcData] of Object.entries(typeData.functions)) {
                const funcContent = generateFunctionDoc(typeName, funcName, funcData);
                await fs.writeFile(path.join(typeDir, `${funcName.toLowerCase()}.md`), funcContent);
            }
        }

        // Generate property documentation
        if (typeData.properties) {
            for (const [propName, propData] of Object.entries(typeData.properties)) {
                const propContent = generatePropertyDoc(typeName, propName, propData);
                await fs.writeFile(path.join(typeDir, `${propName.toLowerCase()}.md`), propContent);
            }
        }
    }
}

function generateTypeDoc(typeName, typeData) {
    return `---
title: ${typeName}
description: ${typeData.description || `Documentation for the ${typeName} type`}
---

${typeData.description || ''}

${typeData.functions ? '## Functions\n\n' + Object.keys(typeData.functions).map(f => `- [${f}](./${f.toLowerCase()})`).join('\n') : ''}

${typeData.properties ? '## Properties\n\n' + Object.keys(typeData.properties).map(p => `- [${p}](./${p.toLowerCase()})`).join('\n') : ''}
`;
}

function generateFunctionDoc(typeName, funcName, funcData) {
    const args = funcData.args?.[0]?.map(arg => 
        `- \`${arg.name}\`: ${arg.type}${arg.description ? ` - ${arg.description}` : ''}`
    ).join('\n') || '';

    const returns = funcData.returns?.map(ret =>
        `- ${ret.type || 'void'}${ret.description ? ` - ${ret.description}` : ''}`
    ).join('\n') || '';

    return `---
title: ${funcName}
description: ${funcData.description || `Documentation for ${typeName}.${funcName}`}
---

\`${typeName}.${funcName}(${funcData.args?.[0]?.map(a => a.name).join(', ') || ''})\`

${funcData.description || ''}

${args ? '## Parameters\n\n' + args : ''}

${returns ? '## Returns\n\n' + returns : ''}
`;
}

function generatePropertyDoc(typeName, propName, propData) {
    return `---
title: ${propName}
description: ${propData.description || `Documentation for ${typeName}.${propName} property`}
---

Type: \`${propData.type}\`

${propData.description || ''}
`;
}

generateDocs().catch(console.error);