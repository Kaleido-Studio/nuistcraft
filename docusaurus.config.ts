// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from '@docusaurus/types'

import { themes } from 'prism-react-renderer'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const config: Config = {
  title: 'NUISTCraft',
  tagline: '致力于提供一流的原版生存/生电体验',
  url: 'https://nuistcraft.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NUISTCRAFT', // Usually your GitHub org/user name.
  projectName: 'NUISTCRAFT', // Usually your repo name.

  stylesheets: [{
    rel: 'preload',
    href:"https://chinese-fonts-cdn.deno.dev/packages/qxs/dist/quan/result.css",
    as:'style',
    onload:"this.rel='stylesheet'"
  }],

  presets: [
    [
      'classic',
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
            href: 'https://map.nuistcraft.com/',
            label: '网页地图 (纯净服)',
            position: 'left',
          },
          {
            href: 'https://grafana.nekomeow.cn/public-dashboards/42fce116d85543ebb749fa7bded3d411',
            label: '状态监控',
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
            label: '状态监控',
            href: 'https://grafana.nekomeow.cn/public-dashboards/42fce116d85543ebb749fa7bded3d411',
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
}

export default config
