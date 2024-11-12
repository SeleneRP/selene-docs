import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
    tags: {
        hidden: {
            render: component('./src/components/Hidden.astro')
        },
        methodsTable: {
            render: component('./src/components/MethodsTable.astro'),
        },
        methodRow: {
            render: component('./src/components/MethodsTableRow.astro'),
            selfClosing: true,
            attributes: {
                name: { type: String },
                parameters: { type: String },
                returns: { type: String },
            },
        },
        methods: {
            render: component('./src/components/MethodList.astro'),
        },
        method: {
            render: component('./src/components/MethodItem.astro'),
            attributes: {
                name: { type: String },
                parameters: { type: String },
                returns: { type: String },
            },
        },
        propertiesTable: {
            render: component('./src/components/PropertiesTable.astro'),
        },
        propertyRow: {
            render: component('./src/components/PropertiesTableRow.astro'),
            selfClosing: true,
            attributes: {
                type: { type: String },
                name: { type: String },
                default: { type: String, required: false },
            },
        },
        properties: {
            render: component('./src/components/PropertyList.astro'),
        },
        property: {
            render: component('./src/components/PropertyItem.astro'),
            attributes: {
                type: { type: String },
                name: { type: String },
                default: { type: String, required: false },
            },
        },
        events: {
            render: component('./src/components/EventList.astro'),
        },
        event: {
            render: component('./src/components/EventItem.astro'),
            attributes: {
                name: { type: String },
                parameters: { type: Array },
            },
        },
        enums: {
            render: component('./src/components/EnumList.astro'),
        },
        enum: {
            render: component('./src/components/EnumItem.astro'),
            attributes: {
                name: { type: String }
            },
        },
        enumValue: {
            render: component('./src/components/EnumValue.astro'),
            attributes: {
                type: { type: String },
                name: { type: String }
            },
        }
    },
});
