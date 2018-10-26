module.exports = {
  // 左上角标题
  title: "Yaohou的文档库",
  // 描述
  description: "高级前端工程师 Yaohou 的文档库",
  // 头部部署，右上角小图标
  head: [
    // ico 配置
    [
      "link",
      {
        rel: "icon",
        href: "/img/logo.ico"
      }
    ]
  ],
  // 主题部署
  themeConfig: {
    /**
     * 右侧导航条
     * text - 显示字段
     * link - 链接：注意前后带 / 符号
     */
    nav: [
      {
        text: "主页",
        link: "/"
      },
      /**
       * 多级菜单
       * 开头 text 为一级标题
       * 数组内 text 为二级标题
       * link 为链接，注意带 /
       */
      {
        text: "一级标题",
        items: [
          {
            text: "二级标题1",
            link: "http://www.baidu.com"
          },
          {
            text: "二级标题2",
            link: "http://www.baidu.com"
          }
        ]
      },
      {
        text: "其他",
        link: "/other/"
      },
      {
        text: "关于",
        link: "/about/"
      },
      // 链接到网站
      {
        text: "Github",
        link: "https://smancang.github.io/yh.github.io/"
      }
    ],
    sidebar: {
      // 侧边栏在 /other/ 目录上
      // [文件名(如果是README可省略为空字符串), 显示左侧导航标题]
      "/other/": [["", "README"], ["indexTwo", "导航第二页"]],
      // 侧边栏在 /about/ 目录上
      "/about/": [
        ["", "README"],
        ["GithubPages", "GithubPages"],
        ["VuePress", "VuePress"]
      ]
    }
  }
};
