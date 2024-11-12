import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://selene.twelveiterations.com',
  integrations: [starlight({
    title: 'Selene Development',
    logo: {
      src: './src/assets/selene.svg'
    },
    favicon: '/favicon.svg',
    social: {
      github: 'https://github.com/SeleneRP/selene-docs',
      discord: 'https://discord.gg/S7maQVRRa9',
      twitter: 'https://twitter.com/BlayTheNinth',
      twitch: 'https://twitch.tv/BlayTheNinth',
      youtube: 'https://www.youtube.com/@BlayTheNinth'
    },
    sidebar: [{
      label: 'Guides',
      autogenerate: {
        directory: '/guides/'
      }
    }, {
      label: 'Reference',
      items: [{
        label: 'Bundles',
        autogenerate: {
          directory: '/reference/bundles/'
        }
      }, {
        label: 'Scripting',
        items: [
          'reference/scripting',
          {
            label: 'Class Reference',
            autogenerate: {
              directory: '/reference/scripting/classes/'
            }
          }
        ]
      }, {
        label: 'Configuration',
        autogenerate: {
          directory: '/reference/configuration/'
        }
      }]
    }],
    editLink: {
      baseUrl: 'https://github.com/SeleneRP/selene-docs/edit/main/'
    },
    lastUpdated: true
  }), markdoc()]
});