# Design Patterns for Humans ZH - VuePress

通过 VuePress 部署本项目。

## 安装依赖

您需要首先安装 [Node.js](https://nodejs.org/en/) >= 8.6 版本。

```bash
# 推荐使用 yarn 管理包
# 您可以使用 npm install -g yarn 安装它
yarn install
```

## 开始开发

启动本地服务。

```bash
yarn dev
```

修改代码将自动触发热重载。

## 构建代码

生成静态代码文件。

```baah
yarn build
```

默认存放路径为 `./docs/.vuepress/dist`。

## 格式化代码

提交代码前使用 Prettier 修复代码格式。

```bash
yarn prettier
```

## 待完成清单

-   [ ] 添加多编程语言支持。
    -   [ ] PHP
    -   [ ] Python
    -   [ ] ...
