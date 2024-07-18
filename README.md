<br>
<p align="center">
    <img alt="献给中文读者的设计模式教程 / Design Patterns for Humans ZH" src="./cover/cover.png" />
</p>

---

<p align="center">
🎉 对设计模式的超简单解读！ 🎉
</p>
<p align="center">
设计模式的话题经常害得我们不知所措。在这里，我将试着用尽可能简单的方式来解释它们，让它们深深地刻在您（还有我）的脑海里。
</p>

---

<sub>本项目基于 <a href="https://github.com/kamranahmedse/design-patterns-for-humans">Design Patterns for Humans</a>，案例 JavaScript 代码来自 <a href="https://github.com/sohamkamani/javascript-design-patterns-for-humans">JavaScript Design Patterns for Humans</a>。译者在学习的过程中，想要使用自己的语言风格来翻译这篇“给人类写的”设计模式教程。奈何才疏学浅，如有谬误，敬请提交 PR 斧正。</sub>

<sub>如果您喜欢这篇教程，不妨看看教程原作者的[博客](http://sohamkamani.com)，或是在 [Twitter](https://twitter.com/sohamkamani) 上跟他打声招呼。</sub>

# 献给中文读者的设计模式教程

## 🚀 介绍

设计模式是针对重复问题的解决方案；**是如何解决特定问题的指导原则**。它们不是类，程序包或库文件，没法直接放到您的应用程序里然后等待奇迹发生。更准确地说，它们是关于如何在特定情况下解决特定问题的指导方针。

> 设计模式是为解决某些普遍存在的问题提出的方案与指导原则。

维基百科解释道

> 在软件工程领域，软件设计模式是为软件设计过程中，对给定上下文普遍存在的问题，所提出的通用、可重用的解决方案。它不是完整的设计实现，无法直接转译为源代码或机器码。正相反，它是面向如何解决问题的描述或模板，并可以在很多不同的情况下使用。

### ⚠️ 请注意

- 设计模式并不是解决您所有问题的万全之策。
- 不要强迫使用它们；否则很可能发生不好的事情。
- 请记住，设计模式是**解决**问题的方案，而不是**找到**问题；所以不要想太多。
- 如果在正确的地方以正确的方式使用设计模式，它们一定能成为您的得力帮手；否则它们可能导致您的代码混乱不堪。

### 🐢 在开始之前

- 所有的设计模式示例都基于 JavaScript 的 [ES6](https://github.com/lukehoban/es6features) 规范实现。
- 由于 JavaScript 中不存在实现接口的说法，因此我们在代码示例中使用了隐式接口，这意味着只有一个类具有一个接口应当有的属性和方法，这个类就被认为实现了这个接口。为了让您更容易分辨当前正在使用的接口，我们在每个示例中都添加了注释信息。

### 🛎️ 设计模式的类型

- [创建型](#%EF%B8%8F-创建型设计模式--creational-design-patterns)
- [结构型](#-结构型设计模式--structural-design-patterns)
- [行为型](#-行为型设计模式--behavioral-design-patterns)

## 🏗️ 创建型设计模式 / Creational Design Patterns

简单来说

> 创建型设计模式关注如何实例化一个对象或一组相关的对象。

维基百科解释道

> 在软件工程领域，创建型设计模式是处理对象创建机制的设计模式，试图以符合要求的方式来创建对象。创建对象的基础方式可能导致设计问题或增加设计复杂度。创建型设计模式通过以某种方式控制对象创建的过程，来解决这个问题。

- [简单工厂模式](#-简单工厂模式--simple-factory)
- [工厂方法模式](#-工厂方法模式--factory-method)
- [抽象工厂模式](#-抽象工厂模式--abstract-factory)
- [生成器模式](#-生成器模式--builder)
- [原型模式](#-原型模式--prototype)
- [单例模式](#-单例模式--singleton)

### 🏠 简单工厂模式 / Simple Factory

现实生活中的例子

> 想象您正在修建一栋房子而您需要房门。您可以穿好木工服，拿上木头、胶水和钉子等必要的工具，在房子里亲手制作这扇房门；或者，您只需要简单地打个电话给工厂，让他们送来制造好的房门 —— 这样您既不需要学习该如何制作房门，也不必处理制作房门带来的乱摊子。

简单来说

> 简单工厂简单地为客户端生成一个实例，而不向客户端暴露任何实例化的逻辑。

维基百科解释道

> 在面向对象编程（OOP）中，工厂是用于创建其它对象的对象——更准确地说，工厂是一个函数或方法，通过调用它的某个方法（假设为 "new"）可以返回拥有不同原型或类的对象。

**编程示例**

首先，我们定义并实现了房门的接口

```js
/**
 * Door interface
 *
 * getWidth()
 * getHeight()
 */

class WoodenDoor {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}
```

接下来，我们拥有了生产房门的工厂，它可以返回制造好的房门

```js
const DoorFactory = {
    makeDoor: (width, height) => new WoodenDoor(width, height),
};
```

可以像这样使用它

```js
// 制造一个 100x200 的房门给我
const door = DoorFactory.makeDoor(100, 200);

console.log("Width:", door.getWidth());
console.log("Height:", door.getHeight());

// 制造一个 50x100 的房门给我
const door = DoorFactory.makeDoor(50, 100);
```

**什么时候使用？**

当创建对象不仅只有赋值操作，还会涉及到一些逻辑过程时，应当把它放到一个专用的工厂中，而不是在每个地方编写重复的代码。

### 🏭 工厂方法模式 / Factory Method

现实生活中的例子

> 以招聘经理为例。一个人不可能面试所有的岗位。根据岗位开放状态，她必须制定面试的流程，然后将面试任务委派给不同的面试官。

简单来说

> 工厂方法模式提供了一种将实例化的逻辑分派给子类的方法。

维基百科解释道

> 在基于类的编程中，工厂方法模式是一种创建型模式，它使用工厂方法来处理创建对象的问题，而不必指定将要创建的对象所基于的具体类。这是通过调用工厂方法来创建对象所实现的——要么在接口中指定并由子类实现，要么在基类中实现并可选地由派生类覆盖——而不是通过调用构造函数实现。

**编程示例**

以刚才的招聘经理为例。首先，我们定义并实现了面试官的接口

```js
/**
 * Interviewer interface
 *
 * askQuestions()
 */

class Developer {
    askQuestions() {
        console.log("询问设计模式问题！");
    }
}

class CommunityExecutive {
    askQuestions() {
        console.log("询问社区建设问题！");
    }
}
```

接着创建我们的 `HiringManager`

```js
class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}
```

现在，任何子类都可以继承它并提供所需的面试官

```js
class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive();
    }
}
```

可以像这样使用它

```js
const devManager = new DevelopmentManager();
devManager.takeInterview(); // 输出：询问设计模式问题！

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // 输出：询问社区建设问题！
```

**什么时候使用？**

当类中存在一些通用的处理过程，但是所需的子类要在运行时动态确定时，工厂方法模式非常有用。换句话说，当客户端不知道自己可能需要哪个具体的子类时。

### 🔨 抽象工厂模式 / Abstract Factory

现实生活中的例子

> 拓展简单工厂模式里关于房门的例子。根据您的需要，您可能会从木门商店买木门，从铁门商店买到铁门，或是从相应的商店买到塑料门。另外您还可能需要具备不同专业能力的师傅来安装这些房门，例如让木匠安装木门，让焊工安装铁门等等。就像你看到的那样，现在房门与装门师傅之间存在一种依赖关系，安装木门需要木匠，安装铁门需要焊工等等。

简单来说

> 工厂的工厂；一个工厂，它将独立但是相互关联或互相依赖的工厂组成一组，而不必指定它们的具体类。

维基百科解释道

> 抽象工厂模式提供了一种封装一组具有共同主题的独立工厂的方法，而不必指定它们的具体类。

**编程示例**

翻译上面房门的例子为代码。首先，我们定义了 `Door` 接口并实现了一些类型的房门

```js
/**
 * Door interface :
 *
 * getDescription()
 */

class WoodenDoor {
    getDescription() {
        console.log("我是一个木门");
    }
}

class IronDoor {
    getDescription() {
        console.log("我是一个铁门");
    }
}
```

接着我们为每一种类型的房门定义了对应的安装师傅

```js
/**
 * DoorFittingExpert interface :
 *
 * getDescription()
 */

class Carpenter {
    getDescription() {
        console.log("我只能安装木门");
    }
}

class Welder {
    getDescription() {
        console.log("我只能安装铁门");
    }
}
```

现在我们来定义抽象工厂，它允许我们创建一系列相关联的对象，即木门工厂能够制造木门并提供安装木门的师傅，铁门工厂能够制造铁门并提供安装铁门的师傅。

```js
/**
 * DoorFactory interface :
 *
 * makeDoor()
 * makeFittingExpert()
 */

// 返回木匠和木门的木门工厂
class WoodenDoorFactory {
    makeDoor() {
        return new WoodenDoor();
    }

    makeFittingExpert() {
        return new Carpenter();
    }
}

// 获得铁门和相应安装师傅的铁门工厂
class IronDoorFactory {
    makeDoor() {
        return new IronDoor();
    }

    makeFittingExpert() {
        return new Welder();
    }
}
```

可以像这样使用它

```js
woodenFactory = new WoodenDoorFactory();

door = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();

door.getDescription(); // 输出：我是一个木门
expert.getDescription(); // 输出：我只能安装木门

// 对铁门的处理与上面类似
ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription(); // 输出：我是一个铁门
expert.getDescription(); // 输出：我只能安装铁门
```

正如您看到的，木门工厂已经封装了 `carpenter` 和 `wooden door`，铁门工厂也已封装了 `iron door` 和 `welder`。因而它确保了对于每一个制造出来的门，我们都能找到正确的安装师傅。

**什么时候使用？**

当对象间存在相互关联的依赖关系，并涉及不那么简单的创建逻辑时

### 👷 生成器模式 / Builder

译注：又名**建造模式**。

现实生活中的例子

> 想象您在哈帝斯汉堡店里，点了一份“大哈迪汉堡”。准备好后，店员就把汉堡递给您（_毫无疑问_ 这是一个简单工厂的例子）。但是在某些情况下，制作汉堡可能会包括额外的步骤。举个例子，您想要一份定制的餐点，如何制作您的汉堡就有很多选项：您要什么面包片？喜欢哪款酱汁？想吃哪种奶酪？诸如此类。在这种情况下，就需要用到生成器模式了。

简单来说

> 生成器模式允许您创建不同风格的对象，同时避免污染构造函数。当一个对象可能存在多种风格时，或者当一个对象的创建过程包含很多步骤时，生成器模式非常有用。

维基百科解释道

> 生成器模式是一种创建型软件设计模式，旨在找出重叠构造函数反面模式（Telescopic Constructor Anti-pattern）的一个解决方案。

既然已经提到，那么请允许我补充一下什么是重叠构造函数反模式。我们都曾看到过像这样的构造函数：

```js
constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
    // ...
}
```

正如您所看见的，构造函数的参数数量很快就会失控，而且对参数含义的理解也可能变得困难。此外，如果在以后您还想添加更多的构造选项，参数数量还会继续增长。这就被称作重叠构造函数反模式。

**编程示例**

明智的选择是使用生成器模式。首先我们定义了想要制作的汉堡

```js
class Burger {
    constructor(builder) {
        this.size = builder.size;
        this.cheeze = builder.cheeze || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
    }
}
```

接着我们编写了生成器

```js
class BurgerBuilder {
    constructor(size) {
        this.size = size;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addLettuce() {
        this.lettuce = true;
        return this;
    }

    addCheeze() {
        this.cheeze = true;
        return this;
    }

    addTomato() {
        this.tomato = true;
        return this;
    }

    build() {
        return new Burger(this);
    }
}
```

可以像这样使用它

```js
const burger = new BurgerBuilder(14)
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build();
```

**JavaScript 版本特别提示**：当您发现一个函数或方法的参数太多（一般超过 2 个参数都被认为是太多）时，应当使用一个对象参数，来取代多个参数。理由有二：

1. 它可以让您的代码看上去更整洁，因为只有一个参数。
2. 您不需要担心参数的顺序，因为参数将根据对象的命名属性传递。

举个例子，应当使用

```js
const burger = new Burger({
    size: 14,
    pepperoni: true,
    cheeze: false,
    lettuce: true,
    tomato: true,
});
```

来取代

```js
const burger = new Burger(14, true, false, true, true);
```

**什么时候使用？**

当一个对象可能有多种风格，并想要避免重叠构造函数时。生成器模式与工厂模式的关键区别是，当创建对象过程只有一个步骤时，应使用工厂模式；当创建对象过程存在多个步骤时，应使用生成器模式。

### 🐑 原型模式 / Prototype

现实生活中的例子

> 还记得多莉吗？那只被克隆的羊！克隆就是原型模式的关键。

简单来说

> 基于已存在的对象，通过克隆创建新的对象。

维基百科解释道

> 在软件开发领域，原型模式是一种创建型设计模式。当创建的对象类型由一个原型实例确定时，使用原型模式，这个原型实例将被克隆来生成新的对象。

简而言之，原型模式允许您创建已存在对象的副本，并根据您的需要修改这个副本，而不用经历从头开始创建新的对象并配置整个对象的麻烦。

**编程示例**

首先我们定义了我们想要克隆的羊

```js
class Sheep {
    constructor(name, category = "山羊") {
        this.name = name;
        this.category = category;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
    setCategory(category) {
        this.category = category;
    }
    getCategory() {
        console.log(this.category);
    }
}
```

现在我们有了 `SheepPrototype` 对象，它将克隆给定了原型的对象。它的构造函数接受 `Sheep` 对象

```js
class SheepPrototype {
    constructor(proto) {
        this.proto = proto;
    }
    clone() {
        return new Sheep(this.proto.name, this.proto.category);
    }
}
```

让我们来克隆电子 Dolly 羊

```js
const originalSheep = new Sheep("Jolly");
originalSheep.getName(); // Jolly
originalSheep.getCategory(); // 山羊
// 克隆并根据需要修改
const prototype = new SheepPrototype(originalSheep);
const clonedSheep = prototype.clone();
clonedSheep.setName("Dolly");
clonedSheep.getName(); // Dolly
clonedSheep.getCategory(); // 山羊
```

**JavaScript 版本特别提示**：此编程示例是原型模式的经典实现，但是 JavaScript 能够使用[内建原型工具](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)更有效地实现原型模式。

**什么时候使用？**

当需要的对象与现有的对象很相似时；或与克隆的方式相比，直接创建对象的成本更高时。

### 💍 单例模式 / Singleton

现实生活中的例子

> 一个国家里同时只能有一位总统。当职责需要时，这位总统就必须采取行动。这里的总统即是单例。

简单来说

> 确保只创建了特定类的唯一对象。

维基百科解释道

> 在软件工程领域，单例模式是一种软件设计模式，它将类的实例化限制为一个对象。当只需要一个对象来协助整个系统的运行时，单例模式很有帮助。

实际上，单例模式被认为是一种反面模式（Anti-pattern），应当避免过度使用它。单例模式不一定总是不好的，也能够有一些有效的用例，但仍应当谨慎使用它，因为它会在您的应用中引入全局状态，在一个地方对它的修改可能会影响到其它地方，并且调试起来可能会变得非常困难。使用单例模式的另一个坏处是，它会使您的代码紧密耦合，此外模拟（Mock，译者注：在单元测试中，常用 Mock 的方法来模拟构造一些复杂或不容易获取的对象）单例可能会很困难。

**编程示例**

在 JavaScript 中，单例可以使用模块模式实现。私有变量和方法隐藏在函数闭包中，而公有方法有选择地暴露出去。

```js
const president = (function () {
    const presidentsPrivateInformation = "Super private";

    const name = "Turd Sandwich";

    const getName = () => name;

    return {
        getName,
    };
})();
```

在这里，`presidentsPrivateInformation` 和 `name` 为私有变量。但是，`name` 可以通过对外暴露的 `president.getName` 方法访问到。

```js
president.getName(); // 输出：'Turd Sandwich'
president.name; // 输出：undefined
president.presidentsPrivateInformation; // 输出：undefined
```

## 🔩 结构型设计模式 / Structural Design Patterns

简单来说

> 结构型设计模式主要关注对象的组成，换句话说，关注实体之间如何相互使用。再换句话说，结构型设计模式有助于回答“如何构建软件的组件”这个问题。

维基百科解释道

> 在软件工程领域，结构型设计模式是通过识别一个简单的方法，这个方法实现了实体之间的关系，来简化设计的设计模式。

- [适配器模式](#-适配器模式--adapter)
- [桥接模式](#-桥接模式--bridge)
- [组合模式](#-组合模式--composite)
- [装饰器模式](#-装饰器模式--decorator)
- [门面模式](#-门面模式--facade)
- [享元模式](#-享元模式--flyweight)
- [代理模式](#-代理模式--proxy)

### 🔌 适配器模式 / Adapter

现实生活中的例子

> 您想将存储卡里的图片文件传输到您的电脑中。为了传输图片，您需要某种与电脑端口兼容的适配器，这样才能将存储卡连接到您的电脑。在这种情况下，读卡器就是一个适配器。
> 另一个例子是电源适配器，一个三脚插头无法插入到两脚插座中，它需要用到电源适配器使其与两脚插座兼容。
> 再举个例子，一位翻译者将一个人说的话翻译给另一个人，翻译者即为适配器。

简单来说

> 适配器模式允许您将与其它不兼容的对象包装到一个适配器中，让这个对象与另一个类兼容。

维基百科解释道

> 在软件工程领域，适配器模式是一种设计模式，它允许一个现有类的接口用作另一个接口。适配器模式常用于使现有的类与其它的类一起工作，而无需修改它们的源码。

**编程示例**

让我们实现一个游戏：有一个猎人，他要狩猎狮子。

首先我们定义了 `Lion`（狮子）接口，所有种类的狮子都需要实现这个接口中的 `roar()` 方法

```js
/**
 * Lion interface :
 *
 * roar()
 */

class AfricanLion {
    roar() {}
}

class AsianLion {
    roar() {}
}
```

猎人可以狩猎任意一种 `Lion`

```js
class Hunter {
    hunt(lion) {
        // ... 前面的一些代码
        lion.roar();
        // ... 后面的一些代码
    }
}
```

假设我们在游戏里又添加了 `WildDog`（野狗），而我们的猎人也可以狩猎它们。但是我们无法直接添加野狗，因为它有着不同的接口方法 `bark()`。为了让它与我们的猎人兼容，我们必须创建一个适配器

```js
// 需要添加到游戏中的野狗
class WildDog {
    bark() {}
}

// 与野狗相关的适配器，让它与我们的游戏兼容
class WildDogAdapter {
    constructor(dog) {
        this.dog = dog;
    }

    roar() {
        this.dog.bark();
    }
}
```

于是，通过 `WildDogAdapter`，我们游戏中的猎人便可以狩猎 `WildDog` 了。

```js
wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(wildDog);

hunter = new Hunter();
hunter.hunt(wildDogAdapter);
```

### 🚡 桥接模式 / Bridge

现实生活中的例子

> 您有一个包括很多页面的网站，现在您计划让用户修改网站的主题。您将会如何实现？为每个页面的每个主题创建一份副本，或是创建单独的主题并根据用户的偏好加载它们？桥接模式允许您实现后者，如下图所示。

![With and without the bridge pattern](static/With-and-without-the-bridge-pattern.png)

简单来说

> 桥接模式是一种偏好于组合的模式，而非继承的模式。实现的细节从一个模组层次推送给另一个具有单独模组层次的对象。

维基百科解释道

> 桥接模式是一种用在软件工程领域的设计模式，旨在“将抽象与其实现解耦，使得两者可以独立改变”。

**编程示例**

用代码语言翻译刚刚关于我们网站的例子。现在我们定义了 `WebPage`（网站）的模组层次

```js
/**
 * Webpage interface :
 *
 * constructor(theme)
 * getContent()
 */

class About {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return "About page in " + this.theme.getColor();
    }
}

class Careers {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return "Careers page in " + this.theme.getColor();
    }
}
```

以及单独的主题模组层次

```js
/**
 * Theme interface :
 *
 * getColor()
 */

class DarkTheme {
    getColor() {
        return "Dark Black";
    }
}
class LightTheme {
    getColor() {
        return "Off White";
    }
}
class AquaTheme {
    getColor() {
        return "Light Blue";
    }
}
```

最后，结合使用不同的主题模组层次

```js
const darkTheme = new DarkTheme();
const lightTheme = new LightTheme();

const about = new About(darkTheme);
const careers = new Careers(lightTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Off White"
```

### 🌿 组合模式 / Composite

现实生活中的例子

> 每个企业组织都由雇员组成。这些雇员具有一些共同点：有一定的薪水酬劳，担负某些任务职责，可能需要向某人汇报，可能拥有下属等等。

简单来说

> 组合模式使得客户端以统一的方式处理不同的对象。

维基百科解释道

> 在软件工程领域，组合模式是一种分离设计模式。组合模式描述了一组对象的处理，与对一个对象的单个实例的处理相同。组合模式的目的是将对象“组合”进树结构中，来表示部分整体的层次结构。实现组合模式使得客户端使用统一的方式处理不同的对象和组合体。

**编程示例**

以前面我们雇员的例子为例。现在我们有两种不同的雇员类型

```js
/**
 * Employee interface :
 *
 * constructor(name, salary)
 * getName()
 * setSalary()
 * getSalary()
 * getRoles()
 */

class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getRoles() {
        return this.roles;
    }

    develop() {
        /* */
    }
}

class Designer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getRoles() {
        return this.roles;
    }

    design() {
        /* */
    }
}
```

接着我们定义了一个组织类，它包含这两种类型的雇员

```js
class Organization {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getNetSalaries() {
        let netSalary = 0;

        this.employees.forEach((employee) => {
            netSalary += employee.getSalary();
        });

        return netSalary;
    }
}
```

计算一下组织的人事开销

```js
// 定义新的雇员
const john = new Developer("John Doe", 12000);
const flank = new Designer("Flank", 10000);

// 添加雇员到组织中
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(flank);

console.log("薪金净额：", organization.getNetSalaries()); // 薪金净额：22000
```

### ☕ 装饰器模式 / Decorator

现实生活中的例子

> 您经营了一家提供多种服务的汽修厂。您要如何计算服务应该收取的费用？您可以每次选择一种服务，然后将服务的价格累加到账单上，直到得到最终的费用。在这个例子中，每一种类型的服务都是一个装饰器。

简单来说

> 装饰器模式允许您将对象放入一个装饰器类的对象中，动态地改变这个对象在运行时的行为。

维基百科解释道

> 在面向对象编程中，装饰器模式是一种设计模式，它允许静态或动态地向单个对象中添加行为，而不会影响同一个类的其它对象的行为。装饰器模式通常有助于遵循单一责任原则，这是因为它允许在具有独特关注领域的类之间，划分出各自的功能。

**编程示例**

不妨以咖啡为例。首先，我们编写了一个简单的咖啡类来实现咖啡接口

```js
/**
 * Coffee interface:
 * getCost()
 * getDescription()
 */

class SimpleCoffee {
    getCost() {
        return 10;
    }

    getDescription() {
        return "一杯咖啡";
    }
}
```

我们想要让代码具有可扩展性，当需要的时候可以对它进行修改。让我们来编写一些额外选项（装饰器）

```js
class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription() {
        return this.coffee.getDescription() + "，加奶";
    }
}

class WhipCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 5;
    }

    getDescription() {
        return this.coffee.getDescription() + "，加鲜奶油";
    }
}

class VanillaCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 3;
    }

    getDescription() {
        return this.coffee.getDescription() + "，加香草";
    }
}
```

现在，来杯咖啡吧

```js
let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // 一杯咖啡

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // 一杯咖啡，加奶

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // 17
console.log(someCoffee.getDescription()); // 一杯咖啡，加奶，加鲜奶油

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription()); // 一杯咖啡，加奶，加鲜奶油，加香草
```

### 📦 门面模式 / Facade

译注：也常被译为**外观模式**。

现实生活中的例子

> 如何启动电脑？“按下电源按钮！”。之所以如此确信，是因为您正使用着电脑为外界提供的简单接口。但是在电脑的内部，它必须做很多事情来实现启动事件。复杂子系统的简单接口，就是我们所说的门面。

简单来说

> 门面模式为复杂的子系统提供了一个简化的接口。

维基百科解释道

> 门面是一个对象，它为更大的代码主体提供了简化的接口，例如一个类库。

**编程示例**

拿上面启动电脑的例子来说。首先我们编写了电脑类

```js
class Computer {
    getElectricShock() {
        console.log("Ouch!");
    }

    makeSound() {
        console.log("Beep beep!");
    }

    showLoadingScreen() {
        console.log("加载中..");
    }

    bam() {
        console.log("准备就绪！");
    }

    closeEverything() {
        console.log("Bup bup bup buzzzz!");
    }

    sooth() {
        console.log("Zzzzz");
    }

    pullCurrent() {
        console.log("Haaah!");
    }
}
```

接着我们编写了它的门面

```js
class ComputerFacade {
    constructor(computer) {
        this.computer = computer;
    }

    turnOn() {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    turnOff() {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}
```

启动电脑！再关掉它！

```js
const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! 加载中.. 准备就绪！
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz
```

### 🍃 享元模式 / Flyweight

现实生活中的例子

> 您喝过摊位上新鲜的茶吗？摊主通常会沏很多杯茶，一杯给您，然后将其它的茶留待给别的消费者，以达到节省资源（例如燃气）的目。享元模式就是关于这件事 —— 共享。

简单来说

> 享元模式通过在相似对象间共享尽可能多的数据，来减少内存使用或计算开销。

维基百科解释道

> 在计算机编程中，享元模式是一个软件设计模式。享元是一个对象，它与其它相似的对象共享尽可能多的数据，来减少内存开销。当简单的重复行为将占用不可接受数值的内存时，可以使用享元模式来表示大量级的对象。

**编程示例**

实现上面关于茶的例子。首先我们编写了茶和茶的工厂类

```js
// 所有将被缓存的数据即是享元
// 这里茶的类型将成为享元
class KarakTea {}

// 充当工厂，保存沏好的茶
class TeaMaker {
    constructor() {
        this.availableTea = {};
    }

    make(preference) {
        this.availableTea[preference] =
            this.availableTea[preference] || new KarakTea();
        return this.availableTea[preference];
    }
}
```

接着我们编写了 `TeaShop`（茶店）类，它将处理点单和上茶事件

```js
class TeaShop {
    constructor(teaMaker) {
        this.teaMaker = teaMaker;
        this.orders = [];
    }

    takeOrder(teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType);
    }

    serve() {
        this.orders.forEach((order, index) => {
            console.log("上茶给桌号 #" + index);
        });
    }
}
```

让我们沏一些茶，端给客人们吧

```js
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder("少糖", 1);
shop.takeOrder("多奶", 2);
shop.takeOrder("无糖", 5);

shop.serve();
// 上茶给桌号 #1
// 上茶给桌号 #2
// 上茶给桌号 #5
```

### 🎱 代理模式 / Proxy

现实生活中的例子

> 您曾刷卡来通过门禁吗？有很多方法可以通过门禁，刷卡或是按下跳过安保的按钮。门禁就是门的一层代理，为打开门这一行为添加了安保的功能。通过下面的代码可以更好地理解它。

简单来说

> 使用代理模式，类能够行驶另一个类的功能。

维基百科解释道

> 在其最一般的形式，代理是一个类，作为其它类的接口发挥功能。代理是被客户端调用的封装或中介对象，用于访问系统背后真正提供服务的对象。使用代理可以直接地指向真正的对象，或者可以提供额外的逻辑。在代理模式下，可以添加附加的功能，例如，当对真正对象的操作会消耗大量资源时进行缓存，或是在调用真正对象的操作之前检查前置条件。

**编程示例**

以上面我们的门禁为例。首先，我们编写了门的接口和它的实现

```js
/**
 * Door interface :
 *
 * open()
 * close()
 */

class LabDoor {
    open() {
        console.log("打开实验室门");
    }

    close() {
        console.log("关闭实验室门");
    }
}
```

接着我们编写了代理，它可以确保门的安全

```js
class Security {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log("奥不！密码错误。");
        }
    }

    authenticate(password) {
        return password === "ecr@t";
    }

    close() {
        this.door.close();
    }
}
```

一切就绪，这是使用门禁的方法

```js
const door = new Security(new LabDoor());
door.open("invalid"); // 奥不！密码错误。

door.open("ecr@t"); // 打开实验室门
door.close(); // 关闭实验室门
```

## 🤹 行为型设计模式 / Behavioral Design Patterns

简单来说

> 行为型设计模式主要关注对象之间责任的分配。与结构型设计模式不同的是，它们不仅指定了对象的结构，还概述了对象之间消息传递（通信）的模式。换句话说，它们有助于回答了“如何在软件组件中执行行为？”这个问题。

维基百科解释道

> 在软件工程领域，行为型设计模式是识别并实现对象之间的常见通信模式的设计模式。如此一来，这些模式使得通信变得更加灵活。

- [责任链模式](#-责任链模式--chain-of-responsibility)
- [命令模式](#-命令模式--command)
- [迭代器模式](#-迭代器模式--iterator)
- [中介者模式](#-中介者模式--mediator)
- [备忘录模式](#-备忘录模式--memento)
- [观察者模式](#-观察者模式--observer)
- [访问者模式](#-访问者模式--visitor)
- [策略模式](#-策略模式--strategy)
- [状态模式](#-状态模式--state)
- [模板方法模式](#-模板方法模式--template-method)

### 🔗 责任链模式 / Chain of Responsibility

现实生活中的例子

> 在您的账户中设置了三种支付方式（`A`, `B` 和 `C`），其中每种支付方式存放了不同数额的钱。`A` 账户中有 100 元，`B` 中有 300 元，而 `C` 中有 1000 元，按照 `A`，`B` 最后是 `C` 的顺序偏好进行支付操作。
> 您想要购买某个价格为 210 元的东西。使用责任链模式，首先，检查 `A` 账户是否能购买，如果可以，将进行支付操作然后中止链。如果不足以购买，请求将传递给 `B` 账户，检查是否能购买，同样如果可以，将链中止；如果不可以，请求将继续传递直到它找到合适的处理者。在这里，`A`，`B` 和 `C` 是链上的不同环节，而这整个模式就是责任链。

简单来说

> 责任链模式有助于构建一条对象链。请求从链的一端进入，从对象到另一个对象依次传递，直到它找到合适的处理者。

维基百科解释道

> 在面向对象设计中，责任链模式是由一些命令对象和一系列处理对象组成的设计模式。每个处理对象都包含了它可以处理的命令对象类型的逻辑，其余的将传递给链中的下一个处理对象。

**编程示例**

实现支付账户的例子。首先，我们编写了账户基类，它包括将多个账户链接起来的逻辑。然后继承账户基类，编写具体的账户类

```js
class Account {
    setNext(account) {
        this.successor = account;
    }

    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`使用 ${this.name} 支付 ${amountToPay}！`);
        } else if (this.successor) {
            console.log(`无法使用 ${this.name} 支付。继续中...`);
            this.successor.pay(amountToPay);
        } else {
            console.log("没有账户额度足够");
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }
}

class Bank extends Account {
    constructor(balance) {
        super();
        this.name = "银行";
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = "贝宝";
        this.balance = balance;
    }
}

class Bitcoin extends Account {
    constructor(balance) {
        super();
        this.name = "比特币";
        this.balance = balance;
    }
}
```

现在，让我们使用上面定义的具体账户类（即银行，贝宝，比特币），构成我们的责任链

```js
// 让我们像下面这样构成责任链
//      银行.贝宝.比特币
//
// 银行优先支付
//      如果银行不足以支付，则使用贝宝
//      如果贝宝不足以支付，则使用比特币

const bank = new Bank(100); // 银行额度为 100
const paypal = new Paypal(200); // 贝宝额度为 200
const bitcoin = new Bitcoin(300); // 比特币额度为 300

bank.setNext(paypal);
paypal.setNext(bitcoin);

// 让我们尝试使用银行优先支付
bank.pay(259);

// 输出如下
// ==============
// 无法使用 银行 支付。继续中...
// 无法使用 贝宝 支付。继续中...
// 使用 比特币 支付 259！
```

### 👮 命令模式 / Command

现实生活中的例子

> 举一个常见的例子，您在餐厅点单。您（`Client` 客户端）告诉服务员（`Invoker` 调用者）您想要这些菜肴（`Command` 命令），然后服务员简单地将这些需求告知厨师（`Receiver` 接收者），厨师知道这些菜肴是什么以及该如何烹制。
> 另一个例子是看电视。您（`Client`）可以使用遥控器（`Invoker`），切换（`Command`）电视（`Receiver`）正在播放的频道。

简单来说

> 命令模式允许您将操作封装到对象中。命令模式背后的核心思想是，提供将客户端与接收者解耦的方法。

维基百科解释道

> 在面向对象编程中，命令模式是一种行为型设计模式，它将执行操作或稍后触发事件所需的全部信息封装到一个对象中。信息包括方法名，拥有此方法的对象和此方法参数的值。

**编程示例**

首先，我们定义了接收者，它实现了可能会执行的每个方法

```js
// Receiver
class Bulb {
    turnOn() {
        console.log("点亮了灯泡！");
    }

    turnOff() {
        console.log("黑暗！");
    }
}
```

我们已经有了每个命令都需要实现的接口，基于这个接口，我们定义了一组命令

```js
/**
 * Command interface
 *
 * execute()
 * undo()
 * redo()
 */

// Command
class TurnOnCommand {
    constructor(bulb) {
        this.bulb = bulb;
    }

    execute() {
        this.bulb.turnOn();
    }

    undo() {
        this.bulb.turnOff();
    }

    redo() {
        this.execute();
    }
}

class TurnOffCommand {
    constructor(bulb) {
        this.bulb = bulb;
    }

    execute() {
        this.bulb.turnOff();
    }

    undo() {
        this.bulb.turnOn();
    }

    redo() {
        this.execute();
    }
}
```

之后，我们定义了 `Invoker`，由它来处理客户端的交互命令

```js
// 调用者
class RemoteControl {
    submit(command) {
        command.execute();
    }
}
```

最后，让我们来看看该如何通过客户端调用它

```js
const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // 点亮了灯泡！
remote.submit(turnOff); // 黑暗！
```

命令模式也可以用来实现基于事务的系统。您执行的命令将保存在历史记录中。如果成功执行了最后的命令，一切都好；如果没有，则可以根据历史记录不断回滚，对所有已执行的命令进行 `undo`（撤销）操作。

### ➿ 迭代器模式 / Iterator

现实生活中的例子

> 旧式收音机是解释迭代器模式的好例子，用户可以从某个广播频道开始，使用向后或向前的按钮来遍历收听各个广播频道。
> 或者以 MP3 音乐播放器或电视为例，您可以按下向后或向前的按钮来浏览连续的频道。
> 换句话说，它们都提供了使用迭代器遍历各个频道，音乐或广播的接口。

简单来说

> 迭代器模式提供了访问对象的所有元素的方法，而不必暴露对象的底层表现形式（译者注：列表、栈和树等）。

维基百科解释道

> 在面向对象编程中，迭代器模式是一种使用迭代器遍历容器并访问其所有元素的设计模式。迭代器模式可以将算法与容器解耦；但在某些情况下，算法是必然特定于容器的，因而无法解耦。

**编程示例**

实现前面旧式收音机的例子。首先我们定义了 `RadioStation`（广播电台）类。

```js
class RadioStation {
    constructor(frequency) {
        this.frequency = frequency;
    }

    getFrequency() {
        return this.frequency;
    }
}
```

接着我们定义了迭代器

```js
class StationList {
    constructor() {
        this.stations = [];
    }

    addStation(station) {
        this.stations.push(station);
    }

    removeStation(toRemove) {
        const toRemoveFrequency = toRemove.getFrequency();
        this.stations = this.stations.filter((station) => {
            return station.getFrequency() !== toRemoveFrequency;
        });
    }
}
```

现在我们就可以像这样使用收音机

```js
const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

stationList.stations.forEach((station) => console.log(station.getFrequency()));

stationList.removeStation(new RadioStation(89)); // 将移除 89 频道的广播电台
```

### 👽 中介者模式 / Mediator

现实生活中的例子

> 您使用手机与其他人聊天时，中间存在有一个网络提供商，您发出的消息都将通过这个网络提供商送达（而非神奇地直接在别人的屏幕上显示出来）。这时，网络提供商充当了中介者的身份。

简单来说

> 中介者模式在两个对象（称作“同事类”）之间添加了一个第三方对象（称作“中介者”），进而控制这两个对象之间的交互。中介者模式有助于降低类之间通信交流的耦合度。因为现在，它们不再需要了解对方的实现细节。

维基百科解释道

> 在软件工程领域，中介者模式定义了一个对象，该对象封装了一组对象之间交互的方式。中介者模式被认为是一种行为型设计模式，因为它可以改变程序运行时的行为。

**编程示例**

下面是聊天室的最简单示例，其中有若干互相发送消息的用户

首先我们定义了中介者：聊天室

```js
// Mediator
class ChatRoom {
    showMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(time + "[" + sender + "]:" + message);
    }
}
```

接着我们定义了同事类：用户

```js
class User {
    constructor(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatMediator.showMessage(this, message);
    }
}
```

美妙的聊天时光便开始了

```js
const mediator = new ChatRoom();

const john = new User("John Doe", mediator);
const flank = new User("Flank Loi", mediator);

john.send("你好！");
flank.send("你好哇！");

// 输出如下
// Feb 14, 10:58 [John]: 你好！
// Feb 14, 10:58 [Flank]: 你好哇！
```

### 💾 备忘录模式 / Memento

现实生活中的例子

> 以计算器（称作“原发器”）为例，每当您执行了某些计算操作时，最后一次计算的结果都会被保存到内存（称作“备忘录”）中，这样您就可以随时按下某个操作按钮（称作“负责人”）来查看它们。可能的话，还可以恢复某一次的计算结果。

简单来说

> 备忘录模式通过某种方式捕获并保存对象的当前状态，以便在之后可以使用轻松的方式恢复。

维基百科解释道

> 备忘录模式是一种提供了恢复对象到以前状态（通过回滚来撤销）的能力的软件设计模式。

通常在您需要提供某种撤销功能时十分有用。

**编程示例**

以本文编辑器为例，它不时地保存当前的状态，当您想要时则可以恢复

首先我们定义了备忘录对象，它能够保存编辑器的状态

```js
class EditorMemento {
    constructor(content) {
        this._content = content;
    }

    getContent() {
        return this._content;
    }
}
```

接着我们定义了编辑器对象，即原发器，它将会使用到备忘录对象

```js
class Editor {
    constructor() {
        this._content = "";
    }

    type(words) {
        this._content = this._content + words;
    }

    getContent() {
        return this._content;
    }

    save() {
        return new EditorMemento(this._content);
    }

    restore(memento) {
        this._content = memento.getContent();
    }
}
```

对我们的文本编辑器进行测试

```js
const editor = new Editor();

// 输入一些文本
editor.type("日月忽其不淹兮，");
editor.type("春与秋其代序。");

// 保存当前用于恢复的状态：日月忽其不淹兮，春与秋其代序。
const saved = editor.save();

// 再输入一些文本
editor.type("惟草木之零落兮，恐美人之迟暮。");

// 不保存，输出当前内容
console.log(editor.getContent()); // 日月忽其不淹兮，春与秋其代序。惟草木之零落兮，恐美人之迟暮。

// 恢复到上次保存的状态
editor.restore(saved);

console.log(editor.getContent()); // 日月忽其不淹兮，春与秋其代序。
```

### 😎 观察者模式 / Observer

（也被称为 _“发布-订阅模式”_ ）

现实生活中的例子

> 求职者就是很好的例子，他们常常会订阅一些招聘网站。当出现合适的工作机会时，这些网站便会通知他们。

简单来说

> 观察者模式定义了对象之间的依赖关系，每当一个对象改变它的状态时，它的所有依赖对象将会得到通知。

维基百科解释道

> 观察者模式是一种软件设计模式，一个目标对象管理所有依赖于它的观察者对象，并在它状态发生改变时主动通知观察者对象，这通常是通过调用观察者对象的某个方法来实现的。

**编程示例**

实现求职者的例子。首先，我们定义了求职者类，当有新的招聘信息发布时，他们将得到通知

```js
const JobPost = (title) => ({
    title: title,
});

class JobSeeker {
    constructor(name) {
        this._name = name;
    }

    notify(jobPost) {
        console.log(this._name, " 接收了一条新的招聘信息：", jobPost.title);
    }
}
```

接着，我们定义了招聘公告栏，供求职者订阅

```js
class JobBoard {
    constructor() {
        this._subscribers = [];
    }

    subscribe(jobSeeker) {
        this._subscribers.push(jobSeeker);
    }

    addJob(jobPosting) {
        this._subscribers.forEach((subscriber) => {
            subscriber.notify(jobPosting);
        });
    }
}
```

接下来，求职者就可以收到公告栏新发布的招聘信息了

```js
// 创建订阅者
const johnDoe = new JobSeeker("John Doe");
const flankDoe = new JobSeeker("Flank Doe");
const kaneDoe = new JobSeeker("Kane Doe");

// 创建发布者，并绑定订阅者
const jobBoard = new JobBoard();
jobBoard.subscribe(johnDoe);
jobBoard.subscribe(flankDoe);

// 添加一份新的职位，看看订阅者是否收到通知
jobBoard.addJob(JobPost("软件工程师"));

// 输出如下
// John Doe 接收了一条新的招聘信息：软件工程师
// Flank Doe 接收了一条新的招聘信息：软件工程师
```

### 🏃 访问者模式 / Visitor

现实生活中的例子

> 以去杜拜旅游为例，人们只需要通过签证便可以进入杜拜。抵达之后，他们可以自行参观杜拜的所有地方，而不必征得其他的许可。只需要知道地点，他们就可以访问参观了。访问者模式允许您像这样做，添加一些访问者可以自由访问的地点，而无需访问者做额外的“跑腿”工作。

简单来说

> 访问者模式允许您为对象添加进一步的操作，而无需修改它们。

维基百科解释道

> 在面向对象编程和软件工程领域，访问者模式是一种将算法，从执行它的对象的结构中分离出来的方式模式。这种分离带来的实际效果是，提供了向已存在对象的结构中添加新的操作方法，而无需修改这些对象的结构的能力。它是一种遵循开闭原则（Open–closed principle）的方法。

**编程示例**

让我们使用访问者模式来模拟实现一个动物园，这里有几种不同的动物，它们会发出不同的叫声

我们已经实现了动物类

```js
class Monkey {
    shout() {
        console.log("Ooh oo aa aa!");
    }

    accept(operation) {
        operation.visitMonkey(this);
    }
}

class Lion {
    roar() {
        console.log("Roaaar!");
    }

    accept(operation) {
        operation.visitLion(this);
    }
}

class Dolphin {
    speak() {
        console.log("Tuut tuttu tuutt!");
    }

    accept(operation) {
        operation.visitDolphin(this);
    }
}
```

接着，实现我们的访问者

```js
const speak = {
    visitMonkey(monkey) {
        monkey.shout();
    },
    visitLion(lion) {
        lion.roar();
    },
    visitDolphin(dolphin) {
        dolphin.speak();
    },
};
```

不同的动物便可以发出不同的叫声

```js
const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak); // Ooh oo aa aa!
lion.accept(speak); // Roaaar!
dolphin.accept(speak); // Tuut tutt tuutt!
```

我们可以简单地为动物类添加可继承的层次结构来让动物发出叫声，但接下来当我们需要为动物添加新的行为时，不得不去修改动物类本身。但现在，我们不再需要修改动物类。举个例子，如果我们需要为动物添加跳跃行为，我们可以简单地创建一个新的访问者来实现，如下所示

```js
const jump = {
    visitMonkey(monkey) {
        console.log("跳了 20 英尺高！跳到了树上去！");
    },
    visitLion(lion) {
        console.log("跳了 7 英尺高！回到了地上！");
    },
    visitDolphin(dolphin) {
        console.log("探出了水面一点随后消失了");
    },
};
```

不同的动物于是各展拳脚

```js
monkey.accept(speak); // Ooh oo aa aa!
monkey.accept(jump); // 跳了 20 英尺高！跳到了树上去！

lion.accept(speak); // Roaaar!
lion.accept(jump); // 跳了 7 英尺高！回到了地上！

dolphin.accept(speak); // Tuut tutt tuutt!
dolphin.accept(jump); // 探出了水面一点随后消失了
```

### 💡 策略模式 / Strategy

现实生活中的例子

> 以排序算法为例，我们实现了冒泡排序，但随着数据量的增长，冒泡排序变得非常慢。为了解决这个问题，我们又实现了快速排序。但是，尽管快速排序算法在处理较大数据集时表现得很好，在处理较小数据集时它却表现较差。为此，我们制定了一种策略，在处理较小数据集时，采用冒泡排序算法；而需要处理较大数据集时，采用快速排序算法。

简单来说

> 策略模式允许您根据实际情况切换使用的算法或策略。

维基百科解释道

> 在计算机编程中，策略模式（Strategy pattern，也被称为 Policy pattern）是一种允许在运行时选择算法行为的行为型设计模式。

**编程示例**

通过 JavaScript 的[头等函数](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)特性，我们可以轻松实现这两种策略

```js
const bubbleSort = (dataset) => {
    console.log("使用冒泡排序");
    // ...
    // ...
    return dataset;
};

const quickSort = (dataset) => {
    console.log("使用快速排序");
    // ...
    // ...
    return dataset;
};
```

接着我们定义了客户端，它将决定使用何种策略

```js
const sorter = (dataset) => {
    if (dataset.length > 5) {
        return quickSort;
    } else {
        return bubbleSort;
    }
};
```

最后，给我们的数据集排个序

```js
const longDataSet = [1, 5, 4, 3, 2, 8];
const shortDataSet = [1, 5, 4];

const sorter1 = sorter(longDataSet);
const sorter2 = sorter(shortDataSet);

sorter1(longDataSet); // Output : 使用快速排序
sorter2(shortDataSet); // Output : 使用冒泡排序
```

### 💢 状态模式 / State

现实生活中的例子

> 您正在使用某种绘画软件，您选择了一支画笔来作图。现在，画笔将根据您选择的颜色来改变它的行为：如果您选择了红色，那么将以红色画图，如果选择了蓝色则以蓝色画图。

简单来说

> 状态模式允许您在状态变化时，改变类的行为。

维基百科解释道

> 状态模式是一种以面向对象的形式，实现状态机的行为型设计模式。在状态模式中，通过将每个单独的状态实现为状态模式接口的派生类，并通过调用此模式超类定义的方法实现状态转换，最终实现了状态机。
> 状态模式可以看作能够通过调用此模式的接口所定义的方法，来改变当前策略的策略模式。

**编程示例**

以文本编辑器为例，它允许您改变输入文本的状态：如果您选择了加粗，就开始输入加粗的文本，如果选择了斜体则输入斜体的文本等等

首先我们编写了改变输入文本状态的方法

```js
const upperCase = (inputString) => inputString.toUpperCase();
const lowerCase = (inputString) => inputString.toLowerCase();
const defaultTransform = (inputString) => inputString;
```

接着我们编写了文本编辑器类

```js
class TextEditor {
    constructor(transform) {
        this._transform = transform;
    }

    setTransform(transform) {
        this._transform = transform;
    }

    type(words) {
        console.log(this._transform(words));
    }
}
```

最后让我们来测试文本编辑器的功能

```js
const editor = new TextEditor(defaultTransform);

editor.type("First line");

editor.setTransform(upperCase);

editor.type("Second line");
editor.type("Third line");

editor.setTransform(lowerCase);

editor.type("Fourth line");
editor.type("Fifth line");

// 输出：
// First line
// SECOND LINE
// THIRD LINE
// fourth line
// fifth line
```

### 📒 模板方法模式 / Template Method

现实生活中的例子

> 假设我们打算亲自建一栋房子。建房子的步骤可能像这样
>
> - 打地基
> - 筑墙壁
> - 盖屋顶
> - 加楼层
>
> 上述步骤的先后顺序不能被改变：在筑好墙壁之前您没法盖屋顶。但您可以任意修改步骤内部的实现细节，例如可以使用木头、聚酯纤维或石头来筑建墙壁。

简单来说

> 模板方法模式定义了如何执行某些算法的框架，但将这些步骤的具体实现推迟到了子类。

维基百科解释道

> 在软件工程领域，模板方法模式是一种行为型设计模式。模板方法是超类中的方法，通常是抽象超类，它根据大量的高级步骤来定义操作的框架。这些步骤本身由与模板方法中相同的类中附加的帮助类方法实现。

**编程示例**

假设我们正在编写一个自动化工具，它能帮助我们测试代码，检查代码格式，构建应用，生成构建报告（即代码覆盖率，代码格式检查结果等），最后将我们的应用部署到测试服务器上

首先我们编写了基类，它指定了构建算法的框架

```js
class Builder {
    // 模板方法
    build() {
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    }
}
```

现在我们编写了它的具体实现

```js
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
```

最后可以像这样运行自动化工具

```js
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
```

## 🚦 尾声

到这里教程的正文内容就结束了。我会持续改进这篇教程，也许您以后想要重新访问这个仓库来查看最新的内容，不妨点一个关注以及星标。对了，我计划撰写同样风格的软件体系架构教程，希望您继续关注。

## 👬 参与贡献

- 反馈问题
- 拉取请求，改进文档
- 分享此仓库

## 🔑 项目许可

MIT © [LolipopJ](https://github.com/LolipopJ)

本项目基于 [Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans)，案例的 JavaScript 代码来自 [JavaScript Design Patterns for Humans](https://github.com/sohamkamani/javascript-design-patterns-for-humans)。
