// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'EMIL – PRO WEB',
	tagline: 'Full-Stack Developer',
	url: 'https://zemil.ru',
	baseUrl: '/',
	trailingSlash: true,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	// organizationName: 'izemil', // Usually your GitHub org/user name.
	projectName: 'zemil.ru', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				// docs: {
				// 	sidebarPath: require.resolve('./sidebars.js'),
				// },
				docs: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				hideOnScroll: true,
				title: 'Emil',
				// logo: {
				// 	alt: 'Emil Logo',
				// 	src: 'img/logo.svg',
				// },
				items: [
					// { to: '/products', label: 'Products', position: 'left' },
					{
						href: 'https://stackoverflow.com/users/8410290/zemil',
						label: 'Stackoverflow',
						position: 'right',
					},
					{
						href: 'https://github.com/izemil',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			// no need to index website
			metadata: [{ name: 'robots', content: 'noindex' }],
		}),
	// no need to index website
	noIndex: true,
};

module.exports = config;
