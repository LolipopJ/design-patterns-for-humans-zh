const themeConfigLocalesSettings = {
  selectText: '选择编程语言',
  editLinkText: '在 GitHub 上编辑此页',
  serviceWorker: {
    updatePopup: {
      message: "伙计，我们发现了新内容可用！",
      buttonText: "刷新页面"
    }
  }
}

module.exports = {
  title: '献给中文读者的设计模式教程',
  description: '对设计模式的超简单解读！的另一个中文译本。',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-180.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
  ],
  base: '/design-patterns-for-humans-zh/',
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      {
        text: '选择编程语言',
        items: [
          { text: 'JavaScript', link: '/' },
          // { text: 'PHP', link: '/php/' },
          // { text: 'Python', link: '/python/' }
        ]
      },
      {
        text: '英文原文',
        link: 'https://github.com/kamranahmedse/design-patterns-for-humans'
      },
    ],
    sidebar: 'auto',
    displayAllHeaders: true,
    lastUpdated: '上次更新：',
    nextLinks: false,
    prevLinks: false,
    repo: 'LolipopJ/design-patterns-for-humans-zh',
    docsDir: 'vuepress/docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助改善本教程的翻译！',
    smoothScroll: false
  },
  markdown: {
    lineNumbers: true
  }
}
