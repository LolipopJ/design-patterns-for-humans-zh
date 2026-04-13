# Design Patterns for Humans ZH - VuePress

通过 `VuePress` 部署本教程。

## 安装依赖

您需要首先安装 [Node.js](https://nodejs.org/en/) >= 8.6 版本。

```bash
yarn
```

## 开始开发

启动本地服务，修改代码将自动触发热重载：

```bash
yarn dev
```

## 构建项目

生成 VuePress 静态资源文件，默认存放路径为 `./docs/.vuepress/dist`：

```bash
yarn build
```

## 构建 README.md

替换 `./docs/README.md` 中的占位符与资源链接等，生成仓库根目录下的 `README.md` 文件。

```bash
yarn build:readme
```

## 格式化代码

提交代码前使用 Prettier 修复代码格式。

```bash
yarn prettier
```

## 待完成清单

- [ ] 添加多编程语言支持。
    - [ ] PHP
    - [ ] Python
    - [ ] ...
