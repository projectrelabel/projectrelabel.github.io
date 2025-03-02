// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project ReLabel',
  tagline: 'ReLabel Wiki',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://wiki.projectrelabel.com',
  baseUrl: '/',

  // GitHub Pages deployment config
  organizationName: 'projectrelabel',
  projectName: 'projectrelabel.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image
      image: 'img/full-logo.jpg',

      // Meta tags
      metadata: [
        { name: 'keywords', content: 'project relabel, relabel wiki, documentation, guides, ReBoard, retro gaming,' },
        { name: 'description', content: 'The official documentation and guides for Project ReLabel.' },
        { name: 'og:title', content: 'Project ReLabel Wiki' },
        { name: 'og:description', content: 'The official documentation and guides for Project ReLabel.' },
        { name: 'og:image', content: 'https://wiki.projectrelabel.com/img/docusaurus-social-card.jpg' },
        { name: 'og:url', content: 'https://wiki.projectrelabel.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Project ReLabel Wiki' },
        { name: 'twitter:description', content: 'The official documentation and guides for Project ReLabel.' },
        { name: 'twitter:image', content: 'https://wiki.projectrelabel.com/img/docusaurus-social-card.jpg' },
      ],

      // Navbar
      navbar: {
        title: 'ReLabel Wiki',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://github.com/projectrelabel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // Footer
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'ReBoard GG',
                to: '/docs/category/reboard-gg',
              },
              {
                label: 'ReBoard GBA',
                to: '/docs/category/reboard-gba',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/HyHND5jAyc',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/projectrelabel/',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/projectrelabel.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/projectrelabel',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project ReLabel`,
      },

      // Syntax highlighting
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;