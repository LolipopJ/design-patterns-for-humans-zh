// #region Builder
class Builder {
    // 模板方法
    build() {
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    }
}
// #endregion Builder

// #region extendBuilder
class AndroidBuilder extends Builder {
    test() {
        console.log("执行安卓代码测试");
    }

    lint() {
        console.log("检查安卓代码格式");
    }

    assemble() {
        console.log("启动安卓应用构建");
    }

    deploy() {
        console.log("部署安卓应用到服务器");
    }
}

class IosBuilder extends Builder {
    test() {
        console.log("执行 IOS 代码测试");
    }

    lint() {
        console.log("检查 IOS 代码格式");
    }

    assemble() {
        console.log("启动 IOS 应用构建");
    }

    deploy() {
        console.log("部署 IOS 应用到服务器");
    }
}
// #endregion extendBuilder

// #region useExtendedBuilder
const androidBuilder = new AndroidBuilder();
androidBuilder.build();

// 输出：
// 执行安卓代码测试
// 检查安卓代码格式
// 启动安卓应用构建
// 部署安卓应用到服务器

const iosBuilder = new IosBuilder();
iosBuilder.build();

// 输出：
// 执行 IOS 代码测试
// 检查 IOS 代码格式
// 启动 IOS 应用构建
// 部署 IOS 应用到服务器
// #endregion useExtendedBuilder

// #region useTheme
// #endregion Theme

// #region useTheme
// #endregion Theme

// #region useTheme
// #endregion Theme
