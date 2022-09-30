import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  lang: "zh-CN",
  title: "安全教育平台自动答题",
  description: "拒绝形式主义，拒绝学校催债",
  lastUpdated: true,
  base: "/",
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    logo: "/favicon.ico",
    sidebar,
    nav: [
      {
        text: "个人博客",
        link: "https://blog.hotpe.top/",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present VirtualHotBar",
    },
    editLink: {
      style: 'github',
      domain: 'github.com',
      repo: 'VirtualHotBar/HotPEToolBox',
      branch: 'main',
      dir: 'docs',
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/VirtualHotBar/HotPEDocsV2/edit/main/docs/:path'
    },
    lastUpdatedText: "最近更新于",
    socialLinks: [
      { icon: 'github', link: 'https://www.hotpe.top/CodeWarehouse' }
    ],
  },
});
