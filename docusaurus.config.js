// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer")

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'NUISTCraft',
  tagline: '致力于提供一流的原版生存/生电体验',
  url: 'https://nuistcraft.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NUISTCRAFT', // Usually your GitHub org/user name.
  projectName: 'NUISTCRAFT', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      navbar: {
        title: 'NUIST Craft',
        logo: {
          alt: 'My Site Logo',
          src: 'img/bucket.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '游玩指南',
          },
          { to: '/blog', label: '时间线', position: 'left' },
          {
            href: 'https://skin.nuistcraft.com',
            label: '皮肤站',
            position: 'left',
          },
          {
            to: 'https://map.nuistcraft.com/',
            label: '网页地图 (纯净服)',
            position: 'left',
          },
          {
            href: 'https://dynmap-nuistcraft.xwx.rs/',
            label: '网页地图 (模组服)',
            position: 'left',
          },
          {
            to: 'https://nuister.onrender.com',
            label: '友情链接',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: '加入QQ群',
            href: 'https://jq.qq.com/?_wv=1027&k=5EgjjUQV',
          },
          {
            label: '网页地图 (纯净服)',
            href: 'https://map.nuistcraft.com/',
          },
          {
            label: '网页地图 (模组服)',
            href: 'https://dynmap-nuistcraft.xwx.rs/',
          },
        ],
        copyright: `<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备20013766号-3</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
