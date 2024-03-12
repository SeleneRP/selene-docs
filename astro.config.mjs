import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://selene.twelveiterations.com',
    integrations: [
        starlight({
            title: 'Selene Development',
            logo: {
                src: './src/assets/selene.png',
            },
            favicon: '/favicon.png',
            social: {
                github: 'https://github.com/SeleneRP/selene',
                discord: 'https://discord.gg/S7maQVRRa9',
                twitter: 'https://twitter.com/BlayTheNinth',
                twitch: 'https://twitch.tv/BlayTheNinth',
                youtube: 'https://www.youtube.com/@BlayTheNinth',
            },
            sidebar: [
                {
                    label: 'Guides',
                    autogenerate: { directory: '/guides/' },
                },
                {
                    label: 'Reference',
                    items: [
                        { label: 'Scripting', 
						items: [
							{
								label: 'Scripting Overview',
								link: '/reference/scripting/',
							},
							{
								label: 'Resource Management',
								collapsed: true,
								autogenerate: { directory: '/reference/scripting/resource-management' }
							}
						] },
                        { label: 'Configuration', autogenerate: { directory: '/reference/configuration/' } },
                    ],
                },
            ],
            editLink: {
                baseUrl: 'https://github.com/SeleneRP/selene-docs/edit/main/',
            },
            lastUpdated: true,
        }),
    ],
});
