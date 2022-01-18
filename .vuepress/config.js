module.exports = {
  title: "涛哥的博客",
  description: "交流 学习 向着远方不断向前行...",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "分享",
        icon: "reco-message",
        items: [{ text: "所有文章", link: "/docs/theme-reco/" }],
      },
      {
        text: "联系作者",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/WTaoSoldier",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["介绍", "兼容", "优化", "安全"],
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    friendLink: [
      {
        title: "kittors",
        desc: "我来了，我又走了，哈哈",
        email: "1156555555@qq.com",
        link: "https://yuanwei-iota.vvercel.app",
      },
      {
        title: "吴某凡",
        desc: "没啥说的",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "最后更新时间",
    // 作者
    author: "涛哥",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    record: "xxxx",
    // 项目开始时间
    startYear: "2020",
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
}
