import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  lang: "zh-CN",
  title: "安全教育平台自动答题",
  description: "拒绝形式主义，高效完成任务",
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
    //51LA统计
    [
      'script',
      {
        charset: 'UTF-8',
        id: 'LA_COLLECT',
        src: '//sdk.51.la/js-sdk-pro.min.js?id=JsLQBTriyGh7czcU&ck=JsLQBTriyGh7czcU',
      },
    ],
  ],
  themeConfig: {
    logo: "/favicon.ico",
    sidebar,
    nav: [
      {
        text: "首页",
        link: "https://xaq.letsdown.cn/",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present awaitla",
    },
    editLink: {
      style: 'github',
      domain: 'github.com',
      repo: 'awaitla/XaqAcDocs',
      branch: 'main',
      dir: 'docs',
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/awaitla/XaqAcDocs/edit/main/docs/:path'
    },
    lastUpdatedText: "最近更新于",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/awaitla/XaqAcDocs/' }
    ],
  },
});
