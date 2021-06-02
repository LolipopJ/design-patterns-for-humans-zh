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
  base: '/design-patterns-for-humans-zh/',
  themeConfig: {
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
    nextLinks: false,
    prevLinks: false,
    repo: 'LolipopJ/design-patterns-for-humans-zh',
    docsDir: 'vuepress/docs',
    smoothScroll: false
  },
  markdown: {
    lineNumbers: true
  }
}
