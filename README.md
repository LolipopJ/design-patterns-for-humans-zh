![献给中文读者的设计模式教程 / Design Patterns for Humans ZH](./cover/cover.png)

***
<div align="center">
<p>
🎉 对设计模式的超简单解读！ 🎉
</p>
<p>
设计模式的话题经常害得我们心神不宁。在这里，我将试着用尽可能简单的方式来解释它们，让它们深深地刻在您（还有我）的脑海里。
</p>
<p>
本项目基于 <a href="https://github.com/kamranahmedse/design-patterns-for-humans">Design Patterns for Humans</a>，案例的 JavaScript 代码来自 <a href="https://github.com/sohamkamani/javascript-design-patterns-for-humans">JavaScript Design Patterns for Humans</a>。
</p>
</div>

***

译者在学习的过程中，想要使用自己的语言风格来翻译这篇“给人类写的”设计模式教程。奈何才疏学浅，如有谬误，敬请斧正。

如果您喜欢这篇教程，不妨看看项目的原作者的[博客](http://sohamkamani.com)，或是在 [Twitter](https://twitter.com/sohamkamani) 上跟他打声招呼。

# 献给中文读者的设计模式教程 / Design Patterns for Humans ZH

## 🔖 目录 / Catalogue

[toc]

## 🚀 介绍 / Introduction

设计模式是为**解决某些普遍存在的问题**提出的**方案与指导原则**。它们不是类，程序包或库文件，没法直接放到您的应用程序里然后等待神奇的事情发生。确切地说，它们是一种指导原则，旨在告诉您可以选用某种方法，来解决某些问题。

> 设计模式是为解决某些普遍存在的问题提出的方案与指导原则。

维基百科这样描述它们：

> 在软件工程领域，软件设计模式是为软件设计过程中，对给定上下文普遍存在的问题，所提出的通用、可重用的解决方案。它不是完整的设计实现，无法直接转译为源代码或机器码。正相反，它是面向如何解决问题的描述或模板，并可以在很多不同的情况下使用。

### ⚠️ 请注意 / Be Careful

- 设计模式并不是解决您所有问题的万全之策。
- 不要强迫去使用它们；否则很可能发生不好的事情。
- 请记住，设计模式是一种指导方案，用来**解决**问题，而不是**找到**问题；所以不要想太多。
- 如果在正确的地方以正确的方式使用设计模式，它们或许能成为您的得力帮手；否则可能导致您的代码混乱不堪。

### 🐢 在开始之前 / Before you start

- 所有的设计模式示例都基于 JavaScript 的 [ES6](https://github.com/lukehoban/es6features) 规范实现。
- 由于 JavaScript 中不存在实现接口的说法，因此我们在代码示例中使用了隐式接口，这意味着只有一个类具有一个接口应当有的属性和方法，这个类就被认为实现了这个接口。为了让您更容易分辨当前正在使用的接口，我们在每个示例中都添加了注释信息。

### 🛎️ 设计模式的类型 / Types of Design Patterns

- [创建型](#%EF%B8%8F-创建型设计模式--creational-design-patterns)
- [结构型](#-结构型设计模式--structural-design-patterns)
- [行为型](#-行为型设计模式--behavioral-design-patterns)

## 🏗️ 创建型设计模式 / Creational Design Patterns

简单来说

> 创建型设计模式关注如何实例化一个对象，或一组相关的对象。

维基百科这样描述

> 在软件工程领域，创建型设计模式是处理对象创建机制的设计模式，试图以符合要求的方式来创建对象。创建对象的基础方式可能导致设计问题或增加设计复杂度。创建型设计模式通过以某种方式控制对象创建的过程，来解决这个问题。

- [简单工厂模式](#-简单工厂模式--simple-factory)
- [工厂方法模式](#-工厂方法模式--factory-method)
- [抽象工厂模式](#-抽象工厂模式--abstract-factory)
- [生成器模式](#-生成器模式--builder)
- [原型模式](#-原型模式--prototype)
- [单例模式](#-单例模式--singleton)

### 🏠 简单工厂模式 / Simple Factory

现实生活中的例子

> 想象，您正在修建一栋房子，但是您需要门。您可以穿上木匠的衣服，拿上木头、胶水、钉子以及所有需要的工具，在您的房子里亲自制作这个门；或者，您只需要打个电话给工厂，让他们把制造好的门送到您身边，这样您不必了解任何关于制作门的知识，也不必处理制作门所带来的麻烦。

简单来说

> 简单工厂只是为客户端生成一个实例，而不向客户端暴露任何实例化操作的逻辑。

维基百科这样描述

> 在面向对象编程（OOP）中，工厂是用于创建其它对象的对象——更准确地说，工厂是一个函数或方法，通过调用它的某个方法（假设为 "new"）可以返回拥有不同原型或类的对象。

**编程示例**

首先，我们定义了门的接口和并实现了它

```js
/**
 * Door
 * getWidth()
 * getHeight()
 */

class WoodenDoor {
  constructor(width, height){
    this.width = width
    this.height = height
  }

  getWidth(){
    return this.width
  }

  getHeight(){
    return this.height
  }
}
```

接下来，我们创建了制造并返回门的工厂

```js
const DoorFactory = {
  makeDoor : (width, height) => new WoodenDoor(width, height)
}
```

最后，可以这样使用工厂

```js
// 制造一个 100x200 的门给我
const door = DoorFactory.makeDoor(100, 200)

console.log('Width:', door.getWidth())
console.log('Height:', door.getHeight())

// 制造一个 50x100 的门给我
const door = DoorFactory.makeDoor(50, 100)
```

**什么时候使用？**

当创建一个对象不仅仅是赋值操作，而是会涉及到一些逻辑过程时，把它放到一个专用的工厂中（而不是在每个地方编写重复的代码）是很有意义的。

### 🏭 工厂方法模式 / Factory Method

现实生活中的例子

> 以招聘经理为例。一个人不可能对每一个职位都进行面试。根据职位空缺情况，她必须决定面试的步骤，并将其委派给不同的人。

简单来说

> 工厂方法模式提供了一种将实例化的逻辑分派给子类的方法。

维基百科这样描述

> 在基于类的编程中，工厂方法模式是一种创建型模式，它使用工厂方法来处理创建对象的问题，而不必指定将要创建的对象所基于的具体类。这是通过调用工厂方法来创建对象所实现的——要么在接口中指定并由子类实现，要么在基类中实现并可选地由派生类覆盖——而不是通过调用构造函数实现。

**编程示例**

以上面的招聘经理为例。首先我们定义一个面试官接口和它的一些实现

```js
/**
 * Interviewer interface
 *
 * askQuestions()
 */

class Developer {
  askQuestions() {
    console.log('提出设计模式问题！')
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log('提出社区建设问题！')
  }
}
```

现在让我们编写我们的 `HiringManager`（招聘经理）

```js
class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer()
        interviewer.askQuestions()
    }
}
```

现在所有的子类都可以继承它并提供需要的面试官

```js
class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive()
    }
}
```

最后，我们可以这样使用它

```js
const devManager = new DevelopmentManager()
devManager.takeInterview() // 输出：提出设计模式问题！

const marketingManager = new MarketingManager()
marketingManager.takeInterview() // 输出：提出社区建设问题！
```

**什么时候使用？**

当类中存在一些通用的处理过程，但需要的子类在运行时动态决定时，工厂方法模式非常有用。换句话说，当客户端不知道它可能需要什么具体的子类时。

### 🔨 抽象工厂模式 / Abstract Factory

现实生活中的例子

> 现在让我们拓展简单工厂模式里门的例子。根据您的需要，您可能会从木门店买到木门，从铁门店买到铁门，或是从相应的商店买到塑料门。此外，您可能需要有着不同专业能力的师傅来安装这些门，比如让木匠安装木门，让焊工安装铁门等等。正如您所看到的，现在门（与人）之间有一种依赖关系，木门需要木匠，铁门需要焊工等等。

简单来说

> 工厂的工厂；一个工厂，它将独立但是相关（或互相依赖）的工厂组成一组，而不用指定这些工厂的具体类。

维基百科这样描述

> 抽象工厂模式提供了一种封装一组具有共同主题的独立工厂的方法，而不必指定它们的具体类。

**编程示例**

根据上面门的例子。首先，我们定义了 `Door`（门）接口和它的一些实现

```js
/**
 * Door interface :
 *
 * getDescription()
 */

class WoodenDoor {
    getDescription() {
        console.log('我是一个木门')
    }
}

class IronDoor {
    getDescription() {
        console.log('我是一个铁门')
    }
}
```

接着我们为每一种类型的门定义了安装师傅

```js
/**
 * DoorFittingExpert interface :
 *
 * getDescription()
 */

class Welder {
    getDescription() {
        console.log('我只能安装木门')
    }
}

class Carpenter {
    getDescription() {
        console.log('我只能安装铁门')
    }
}
```

现在我们有了抽象工厂，它允许我们创建一系列相关联的对象，即木门工厂能够制造木门和提供木门安装师傅，而铁门工厂能够制造铁门和提供铁门安装师傅。

```js
/**
 * DoorFactory interface :
 *
 * makeDoor()
 * makeFittingExpert()
 */

// 返回木匠和木门的木门工厂
class WoodenDoorFactory {
    makeDoor(){
        return new WoodenDoor()
    }

    makeFittingExpert() {
        return new Carpenter()
    }
}

// 获得铁门和相应安装师傅的铁门工厂
class IronDoorFactory {
    makeDoor(){
        return new IronDoor()
    }

    makeFittingExpert() {
        return new Welder()
    }
}
```

最后我们可以这样使用它

```js
woodenFactory = new WoodenDoorFactory()

door = woodenFactory.makeDoor()
expert = woodenFactory.makeFittingExpert()

door.getDescription()  // 输出：我是一个木门
expert.getDescription() // 输出：我只能安装木门

// 铁门工厂和上面一样
ironFactory = new IronDoorFactory()

door = ironFactory.makeDoor()
expert = ironFactory.makeFittingExpert()

door.getDescription()  // 输出：我是一个铁门
expert.getDescription() // 输出：我只能安装铁门
```

正如您看到的，木门工厂已经封装了 `carpenter`（木匠）和 `wooden door`（木门），铁门工厂已经封装了 `iron door`（铁门）和 `welder`（焊工）。因此，它确保了对于每一个制造出来的门，我们都能得到正确的安装师傅。

**什么时候使用？**

当对象之间存在相互依赖的关系，涉及的创建逻辑并不那么简单时。

### 👷 生成器模式 / Builder

译注：又名**建造模式**。

现实生活中的例子

> 想象您在哈帝斯汉堡店里，点了一份“大哈迪汉堡”，接着店员就把汉堡递给你，*毫无疑问* 这是一个简单工厂的例子。但是在一些情况下汉堡的制作可能会包括更多的步骤逻辑。举个例子，您想要一份定制的汉堡，关于汉堡的制作您有很多选项：想要什么面包？喜欢哪款酱汁？想吃哪种奶酪？诸如此类。在这种情况下，就需要用到生成器模式了。

简单来说

> 生成器模式允许您创建不同风格的对象，同时避免污染构造函数。当一个对象可能存在多种风格时，或者当一个对象的创建过程包含很多步骤时，生成器模式非常有用。

维基百科这样描述

> 生成器模式是一种创建型软件设计模式，旨在找出重叠构造函数反面模式（Telescopic Constructor Anti-pattern）的一个解决方案。

既然已经提到，那么请允许我补充一下什么是重叠构造函数反面模式。在某一时刻我们都看到了这样一个构造函数：

```js
constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
    // ... 
}
```

正如您所看见的，构造函数的参数数量很快就会失控，理解参数的含义也可能因此变得困难。此外，如果在以后您还想添加更多的构造选项，它的参数列表还会继续增长。这就被称作重叠构造函数反面模式。

**编程示例**

明智的选择是使用生成器模式。首先我们定义我们想要制作的汉堡

```js
class Burger {
    constructor(builder) {
        this.size = builder.size
        this.cheeze = builder.cheeze || false
        this.pepperoni = builder.pepperoni || false
        this.lettuce = builder.lettuce || false
        this.tomato = builder.tomato || false
    }
}
```

接着我们编写了生成器

```js
class BurgerBuilder {
    constructor(size) {
        this.size = size
    }

    addPepperoni() {
        this.pepperoni = true
        return this
    }

    addLettuce() {
        this.lettuce = true
        return this
    }

    addCheeze() {
        this.cheeze = true
        return this
    }

    addTomato() {
        this.tomato = true
        return this
    }

    build() {
        return new Burger(this)
    }
}
```

最后可以这样使用它

```js
const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()
```

**JavaScript 版本特别提示**：当您发现一个函数或方法的参数太多（一般超过 2 个参数都被认为是太多）时，应当使用一个对象参数，来取代多个参数。理由有二：

1. 它可以让您的代码看上去更整洁，因为只有一个参数。
2. 您不需要担心参数的顺序，因为参数将根据对象的命名属性传递。

举个例子，应当使用：

```js
const burger = new Burger({
    size : 14,
    pepperoni : true,
    cheeze : false,
    lettuce : true,
    tomato : true
})
```

来取代：

```js
const burger = new Burger(14, true, false, true, true)
```

**什么时候使用？**

当一个对象可能有多种风格，并想要避免重叠构造函数时。与工厂模式的关键区别是，当创建对象过程只有一个步骤时，应使用工厂模式；当创建对象过程存在多个步骤时，应使用生成器模式。

### 🐑 原型模式 / Prototype

现实生活中的例子

> 还记得多莉吗？那只被克隆的羊！让我们聊聊克隆这件事儿，当然，不谈细节，只谈它的关键点所在。

简单来说

> 基于已存在的对象，通过克隆创建新的对象。

维基百科这样描述

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

现在我们有了一个羊原型（SheepPrototype）的类，它将克隆给定了原型的对象。它的构造函数接受类型为羊的原型

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

最后我们可以这样使用它

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

> 在一个国家里同时只能有一位总统。当职责需要时，这位总统就必须采取行动。这里的总统即是单例。

简单来说

> 确保只创建了特定类的唯一对象。

维基百科这样描述

> 在软件工程领域，单例模式是一种软件设计模式，它将类的实例化限制为一个对象。当只需要一个对象来协助整个系统的运行时，单例模式很有帮助。

实际上，单例模式被认为是一种反面模式（Anti-pattern），应当避免过度使用它。单例模式不一定总是不好的，也能够有一些有效的用例，但仍应当谨慎使用它，因为它会在您的应用中引入全局状态，在一个地方对它的修改可能会影响到其它地方，并且调试起来可能会变得非常困难。使用单例模式的另一个坏处是，它会使您的代码紧密耦合，此外模拟（Mock，译者注：在单元测试中，常用 Mock 的方法来模拟构造一些复杂或不容易获取的对象）单例可能会很困难。

**编程示例**

在 JavaScript 中，单例可以使用模块模式实现。私有变量和方法隐藏在函数闭包中，而公有方法选择地暴露出去。

```js
const president = (function(){
    const presidentsPrivateInformation = 'Super private'

    const name = 'Turd Sandwich'

    const getName = () => name

    return {
        getName
    }
}())
```

在这里，`presidentsPrivateInformation` 和 `name` 为私有变量。但是，`name` 可以通过对外暴露的 `president.getName` 方法访问到。

```js
president.getName() // 输出：'Turd Sandwich'
president.name // 输出：undefined
president.presidentsPrivateInformation // 输出：undefined
```

## 🔩 结构型设计模式 / Structural Design Patterns

简单来说

> 结构型设计模式主要关注对象的组成，或者换句话说，关注实体之间如何相互使用。再或者另一种解释是，它有助于回答“如何构建软件的组件”这个问题。

维基百科这样描述

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

> 为了传输图片，您需要某种与电脑端口兼容的适配器，这样您就可以将存储卡连接到您的电脑了。在这种情况下，读卡器就是一个适配器。
> 另一个例子是著名的电源适配器，一个三脚插头无法插入到两脚插座中，它需要用到电源适配器使其与两脚插座兼容。
> 再举个例子，一位翻译者将一个人说的话翻译给另一个人（译注：这里的翻译者就是适配器）。

简单来说

> 适配器模式允许您将与其它不兼容的对象包装到一个适配器中，让这个对象与另一个类兼容。

维基百科这样描述

> 在软件工程领域，适配器模式是一种设计模式，它允许一个现有类的接口用作另一个接口。适配器模式常用于使现有的类与其它的类一起工作，而无需修改它们的源码。

**编程示例**

想象一个游戏，我们有一个猎人，他要狩猎狮子。

首先我们定义了 `Lion`（狮子）接口，所有类型的狮子都需要实现这个接口

```js
/**
 * Lion interface :
 *
 * roar()
 */

class AfricanLion  {
    roar() {}
}

class AsianLion  {
    roar() {}
}
```

而猎人需要 `Lion` 的任意实现来狩猎。

```js
class Hunter {
    hunt(lion) {
        // ... 前面的一些代码
        lion.roar()
        // ... 后面的一些代码
    }
}
```

现在假设我们在我们的游戏里添加了一只 `WildDog`（野狗），猎人也可以狩猎它。但是我们无法直接添加野狗，因为它有着不同的接口。为了让它与我们的猎人兼容，我们必须创建一个兼容的适配器

```js
// 需要添加到游戏中
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

于是，通过 `WildDogAdapter`，在我们的游戏中就可以使用 `WildDog` 了。

```js
wildDog = new WildDog()
wildDogAdapter = new WildDogAdapter(wildDog)

hunter = new Hunter()
hunter.hunt(wildDogAdapter)
```

### 🚡 桥接模式 / Bridge

现实生活中的例子

> 想象您有一个包括很多页面的网站，现在您计划让用户修改网站的主题。您会怎么做？为每个页面的每个主题创建一份副本，或是创建单独的主题并根据用户的偏好加载它们？桥接模式允许您实现后者，如下图所示。

![With and without the bridge pattern](static/With-and-without-the-bridge-pattern.png)

简单来说

> 桥接模式是偏好于使用组合的模式，而不是继承。实现的细节从一个模组层次推送给另一个具有单独模组层次的对象。

维基百科这样描述

> 桥接模式是一种用在软件工程领域的设计模式，旨在“将抽象与其实现解耦，使得两者可以独立改变”。

**编程示例**

翻译一下刚刚关于我们网站的例子。现在我们定义了 `WebPage`（网站）模组层次

```js
/**
 * Webpage interface :
 *
 * constructor(theme)
 * getContent()
 */

class About{
    constructor(theme) {
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
}

class Careers{
   constructor(theme) {
       this.theme = theme
   }

   getContent() {
       return "Careers page in " + this.theme.getColor()
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

class DarkTheme{
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme{
    getColor() {
        return 'Off white'
    }
}
class AquaTheme{
    getColor() {
        return 'Light blue'
    }
}
```

最后，结合两个模组层次使用

```js
const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent()) // "About page in Dark Black"
console.log(careers.getContent()) // "Careers page in Dark Black"
```

### 🌿 组合模式 / Composite

现实生活中的例子

> 每个组织都由雇员组成。每个雇员都有一些相同的特点，如有一定的薪水酬劳，担负某些任务职责，可能需要向某人报告，可能拥有下属等等。

简单来说

> 组合模式使得客户端以统一的方式处理不同的对象。

维基百科这样描述

> 在软件工程领域，组合模式是一种分离设计模式。组合模式描述了一组对象的处理，与对一个对象的单个实例的处理相同。组合模式的目的是将对象“组合”进树结构中，来表示部分整体的层次结构。实现组合模式使得客户端使用统一的方式处理不同的对象和组合体。

**编程示例**

以前面我们雇员的例子为例。现在我们有几种不同的雇员类型

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
        this.name = name
        this.salary = salary
    }

    getName() {
        return this.name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }

    getRoles() {
        return this.roles
    }

    develop() {
        /* */
    }
}

class Designer {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getName() {
        return this.name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }

    getRoles() {
        return this.roles
    }

    design() {
        /* */
    }
}
```

接着我们定义了一个组织类，它包括了这几种不同类型的雇员

```js
class Organization {
    constructor(){
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    getNetSalaries() {
        let netSalary = 0

        this.employees.forEach(employee => {
            netSalary += employee.getSalary()
        })

        return netSalary
    }
}
```

最后我们可以这样使用它

```js
// 定义新的雇员
const john = new Developer('John Doe', 12000)
const jane = new Designer('Jane', 10000)

// 添加雇员到组织中
const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)

console.log("薪金净额：" , organization.getNetSalaries()) // 薪金净额：22000
```

### ☕ 装饰器模式 / Decorator

现实生活中的例子

> 想象您经营了一家提供多种服务的汽修厂。现在您要如何计算应该收取的账单金额？您可以选择一种服务，动态地将提供服务的价格累计到账单上，直到您得到了最终的消费金额。在这个例子中，每一种类型的服务都是一个装饰器。

简单来说

> 装饰器模式允许您将对象放入一个装饰器类的对象中，动态地改变这个对象在运行时的行为。

维基百科这样描述

> 在面向对象编程中，装饰器模式是一种设计模式，它允许静态或动态地向单个对象中添加行为，而不会影响同一个类的其它对象的行为。装饰器模式通常有助于遵循单一责任原则，这是因为它允许在具有独特关注领域的类之间，划分出各自的功能。

**编程示例**

不妨以咖啡为例。首先，我们编写一个普通咖啡的类来实现咖啡接口

```js
/**
 * Coffee interface:
 * getCost()
 * getDescription()
 */

class SimpleCoffee {

    getCost() {
        return 10
    }

    getDescription() {
        return '普通咖啡'
    }
}
```

我们想要让代码具有可扩展性，当需要的时候可以有选项去修改它。让我们来编写一些额外选项（装饰器）

```js
class MilkCoffee {

    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + '，加奶'
    }
}

class WhipCoffee {

    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 5
    }

    getDescription() {
        return this.coffee.getDescription() + '，加鲜奶油'
    }
}

class VanillaCoffee {

    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 3
    }

    getDescription() {
        return this.coffee.getDescription() + '，加香草'
    }
}
```

现在，来一杯咖啡吧

```js
let someCoffee

someCoffee = new SimpleCoffee()
console.log(someCoffee.getCost()) // 10
console.log(someCoffee.getDescription()) // 普通咖啡

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost()) // 12
console.log(someCoffee.getDescription()) // 普通咖啡，加奶

someCoffee = new WhipCoffee(someCoffee)
console.log(someCoffee.getCost()) // 17
console.log(someCoffee.getDescription()) // 普通咖啡，加奶，加鲜奶油

someCoffee = new VanillaCoffee(someCoffee)
console.log(someCoffee.getCost()) // 20
console.log(someCoffee.getDescription()) // 普通咖啡，加奶，加鲜奶油，加香草
```

### 📦 门面模式 / Facade

译注：也常被译为**外观模式**。

现实生活中的例子

> 您是如何启动电脑的？“按下电源按钮！”您说。这是您所相信的，因为您正在使用电脑为外部提供的简单接口，而在电脑内部，它必须做很多事情来实现启动事件。这个复杂子系统的简单接口，就是门面。

简单来说

> 门面模式为复杂的子系统提供了一个简化的接口。

维基百科这样描述

> 门面是一个对象，它为更大的代码主体提供了简化的接口，例如一个类库。

**编程示例**

拿上面启动电脑的例子来说。首先我们编写了电脑类

```js
class Computer {

    getElectricShock() {
        console.log('Ouch!')
    }

    makeSound() {
        console.log('Beep beep!')
    }

    showLoadingScreen() {
        console.log('Loading..')
    }

    bam() {
        console.log('Ready to be used!')
    }

    closeEverything() {
        console.log('Bup bup bup buzzzz!')
    }

    sooth() {
        console.log('Zzzzz')
    }

    pullCurrent() {
        console.log('Haaah!')
    }
}
```

接着我们编写了它的门面

```js
class ComputerFacade {

    constructor(computer) {
        this.computer = computer
    }

    turnOn() {
        this.computer.getElectricShock()
        this.computer.makeSound()
        this.computer.showLoadingScreen()
        this.computer.bam()
    }

    turnOff() {
        this.computer.closeEverything()
        this.computer.pullCurrent()
        this.computer.sooth()
    }
}
```

最后就可以使用电脑的门面了

```js
const computer = new ComputerFacade(new Computer())
computer.turnOn() // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff() // Bup bup buzzz! Haah! Zzzzz
```

### 🍃 享元模式 / Flyweight

现实生活中的例子

> 您喝过摊位上新鲜的茶吗？他们通常会沏不止一杯您点的茶，然后将剩下的茶留待给其他消费者，达到节省资源的目的，例如燃气等。享元模式就是关于这件事——共享。

简单来说

> 享元模式通过在相似对象间共享尽可能多的数据，来减少内存使用或计算开销。

维基百科这样描述

> 在计算机编程中，享元模式是一个软件设计模式。享元是一个对象，它与其它相似的对象共享尽可能多的数据，来减少内存开销。当简单的重复行为将占用不可接受数值的内存时，可以使用享元模式来表示大量级的对象。

**编程示例**

翻译前边我们关于茶的例子。首先我们编写了茶的类型和茶的制作类

```js
// 所有将被缓存的数据即是享元
// 这里茶的类型将成为享元
class KarakTea {
}

// 充当工厂，保存沏好的茶
class TeaMaker {
    constructor(){
        this.availableTea = {}
    }

    make(preference) {
        this.availableTea[preference] = this.availableTea[preference] || (new KarakTea())
        return this.availableTea[preference]
    }
}
```

接着我们编写了 `TeaShop`（茶店）类，它将处理点单和上茶事件

```js
class TeaShop {
    constructor(teaMaker) {
        this.teaMaker = teaMaker
        this.orders = []
    }

    takeOrder(teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType)
    }

    serve() {
        this.orders.forEach((order, index) => {
            console.log('上茶给桌号 #' + index)
        })
    }
}
```

最后我们可以像下面一样使用它

```js
const teaMaker = new TeaMaker()
const shop = new TeaShop(teaMaker)

shop.takeOrder('少糖', 1)
shop.takeOrder('多奶', 2)
shop.takeOrder('无糖', 5)

shop.serve()
// 上茶给桌号 #1
// 上茶给桌号 #2
// 上茶给桌号 #5
```

### 🎱 代理模式 / Proxy

现实生活中的例子

> 您曾刷卡来通过门禁吗？有很多种方法可以打开门禁，刷门禁卡或是按下绕过安保的按钮。打开门是门的主要功能，但这里有一层代理添加到了打开门上，增添了一些功能。让我通过下面的代码示例更好地解释它。

简单来说

> 使用代理模式，类代表行驶另一个类的功能。

维基百科这样描述

> 在其最一般的形式，代理是一个类，作为其它东西的接口发挥功能。代理是被客户端调用的封装或中介对象，用于访问系统背后真正提供服务的对象。使用代理可以直接地指向真正的对象，或者可以提供额外的逻辑。在代理模式下，可以添加附加的功能，例如，当对真正对象的操作会消耗大量资源时进行缓存，或是在调用真正对象的操作之前检查前置条件。

**编程示例**

以上面我们的防盗门为例。首先，我们编写了门的接口和它的实现

```js
/**
 * Door interface :
 *
 * open()
 * close()
 */

class LabDoor {
    open() {
        console.log('打开实验室门')
    }

    close() {
        console.log('关闭实验室门')
    }
}
```

接着我们编写了代理，它可以确保我们想要的任何门的安全

```js
class Security {
    constructor(door) {
        this.door = door
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            console.log('大大的不！密码错误。')
        }
    }

    authenticate(password) {
        return password === 'ecr@t'
    }

    close() {
        this.door.close()
    }
}
```

最后这是使用它的方法

```js
const door = new Security(new LabDoor())
door.open('invalid') // 大大的不！密码错误。

door.open('ecr@t') // 打开实验室门
door.close() // 关闭实验室门
```

## 🤹 行为型设计模式 / Behavioral Design Patterns

简单来说

> 行为型设计模式主要关注对象之间责任的分配。与结构型设计模式不同的是，它们不仅指定了对象的结构，还概述了对象之间消息传递（通信）的模式。换句话说，它们有助于回答了“如何在软件组件中执行行为？”这个问题。

维基百科这样描述

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

> 举个例子，在您的账户中，您设置了三种支付方式（`A`, `B` 和 `C`），其中存放了不同数量的钱。`A` 账户中有 100 美元，`B` 中有 300 美元，而 `C` 中有 1000 美元，按照 `A`，`B` 最后是 `C` 的顺序偏好进行支付操作。您尝试购买某个价值 210 美元的东西。使用责任链模式，首先，检查 `A` 账户是否能购买，如果可以，将进行支付操作然后将链中止。如果不足以购买，请求将传递给 `B` 账户，检查是否能购买，同样如果可以，将链中止；如果不可以，请求将继续传递直到它找到合适的处理者。在这里，`A`，`B` 和 `C` 是链上的不同环节，而这整个模式就是责任链。

简单来说

> 责任链模式有助于构建一条对象链。请求从链的一端进入，从对象到另一个对象依次传递，直到它找到合适的处理者。

维基百科这样描述

> 在面向对象设计中，责任链模式是由一些命令对象和一系列处理对象组成的设计模式。每个处理对象都包含了它可以处理的命令对象类型的逻辑，其余的将传递给链中的下一个处理对象。

**编程示例**

翻译一下刚刚我们账户的例子。首先，我们编写了基础账户类，它包括将账户链接起来的逻辑。基于基础账户类，我们还编写了一些具体账户类

```js
class Account {

    setNext(account) {
        this.successor = account
    }

    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`使用 ${this.name} 支付 ${amountToPay}！`)
        } else if (this.successor) {
            console.log(`无法使用 ${this.name} 支付。继续中...`)
            this.successor.pay(amountToPay)
        } else {
            console.log('没有账户额度足够')
        }
    }

    canPay(amount) {
        return this.balance >= amount
    }
}

class Bank extends Account {
    constructor(balance) {
        super()
        this.name = '银行'
        this.balance = balance
    }
}

class Paypal extends Account {
    constructor(balance) {
        super()
        this.name = '贝宝'
        this.balance = balance
    }
}

class Bitcoin extends Account {
    constructor(balance) {
        super()
        this.name = '比特币'
        this.balance = balance
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

const bank = new Bank(100)          // 银行额度为 100
const paypal = new Paypal(200)      // 贝宝额度为 200
const bitcoin = new Bitcoin(300)    // 比特币额度为 300

bank.setNext(paypal)
paypal.setNext(bitcoin)

// 让我们尝试使用银行优先支付
bank.pay(259)

// 输出如下
// ==============
// 无法使用 银行 支付。继续中...
// 无法使用 贝宝 支付。继续中...
// 使用 比特币 支付 259！
```

### 👮 命令模式 / Command

现实生活中的例子

> 举一个常见的例子，您在餐厅点单。您（即 `Client` 客户端）告诉服务员（即 `Invoker` 调用者）您想要这些菜肴（即 `Command` 命令），于是服务员简单地将这些需求转发给厨师（即 `Receiver` 接收者），他们知道这些菜肴是什么以及该如何烹制。
> 另一个例子是您（即 `Client` 客户端）使用遥控器（即 `Invoker` 调用者），切换（即 `Command` 命令）电视（即 `Receiver` 接收者）正在播放的频道。

简单来说

> 命令模式允许您将操作封装到对象中。命令模式背后的核心思想是，提供将客户端与接收者解耦的方法。

维基百科这样描述

> 在面向对象编程中，命令模式是一种行为型设计模式，它将执行操作或稍后触发事件所需的全部信息封装到一个对象中。信息包括方法名，拥有此方法的对象和此方法参数的值。

**编程示例**

首先，我们定义了接收者，它拥有可能会执行的每个方法的实现。

```js
// Receiver
class Bulb {
    turnOn() {
        console.log('点亮了灯泡！')
    }

    turnOff() {
        console.log('黑暗！')
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
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOn()
    }

    undo() {
        this.bulb.turnOff()
    }

    redo() {
        this.execute()
    }
}

class TurnOffCommand {
    constructor(bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOff()
    }

    undo() {
        this.bulb.turnOn()
    }

    redo() {
        this.execute()
    }
}
```

之后，我们定义了 `Invoker`（调用者），由它来处理客户端的交互命令

```js
// Invoker
class RemoteControl {
    submit(command) {
        command.execute()
    }
}
```

最后，让我们来看看该如何通过客户端调用它

```js
const bulb = new Bulb()

const turnOn = new TurnOnCommand(bulb)
const turnOff = new TurnOffCommand(bulb)

const remote = new RemoteControl()
remote.submit(turnOn) // 点亮了灯泡！
remote.submit(turnOff) // 黑暗！
```

命令模式也可以用来实现基于事务的系统。您执行的命令将保存在历史记录中。如果成功执行了最后的命令，一切都好；如果没有，则可以根据历史记录不断回滚，对所有已执行的命令进行 `undo`（撤销）操作。

### ➿ 迭代器模式 / Iterator

现实生活中的例子

> An old radio set will be a good example of iterator, where user could start at some channel and then use next or previous buttons to go through the respective channels. Or take an example of MP3 player or a TV set where you could press the next and previous buttons to go through the consecutive channels or in other words they all provide an interface to iterate through the respective channels, songs or radio station.
> 旧式收音机将是迭代器模式的好例子，用户可以从某个广播频道开始，使用向后或向前的按钮来收听各个广播频道。或者以 MP3 音乐播放器或电视为例，您可以按下向后或向前的按钮来浏览连续的频道，换句话说，它们都提供了使用迭代器遍历各个频道，音乐或广播的接口。

简单来说

> 迭代器模式提供了访问对象的所有元素的方法，而不必暴露对象的底层表现形式（译者注：列表、栈和树等）。

维基百科这样描述

> 在面向对象编程中，迭代器模式是一种使用迭代器遍历容器并访问其所有元素的设计模式。迭代器模式可以将算法与容器解耦；但在某些情况下，算法是必然特定于容器的，因而无法解耦。

**编程示例**

翻译一下我们上面广播电台的例子。首先我们定义了 `RadioStation`（广播电台）类。

```js
class RadioStation {
    constructor(frequency) {
        this.frequency = frequency
    }

    getFrequency() {
        return this.frequency
    }
}
```

接着我们定义了迭代器

```js
class StationList {
    constructor(){
        this.stations = []
    }

    addStation(station) {
        this.stations.push(station)
    }

    removeStation(toRemove) {
        const toRemoveFrequency = toRemove.getFrequency()
        this.stations = this.stations.filter(station => {
            return station.getFrequency() !== toRemoveFrequency
        })
    }
}
```

现在我们可以这样使用它

```js
const stationList = new StationList()

stationList.addStation(new RadioStation(89))
stationList.addStation(new RadioStation(101))
stationList.addStation(new RadioStation(102))
stationList.addStation(new RadioStation(103.2))

stationList.stations.forEach(station => console.log(station.getFrequency()))

stationList.removeStation(new RadioStation(89)) // 将移除 89 频道的广播电台
```

### 👽 中介者模式 / Mediator

现实生活中的例子

> 一个常见的例子是，您正使用您的手机跟其他人聊天，在您和他们之间存在一个网络提供商，您发出的消息将通过这个网络提供商送达，而非直接发送。在这种情况下，网络提供商充当了中介者的身份。

简单来说

> 中介者模式在两个对象（称作“同事类”）之间添加了一个第三方对象（称作“中介者”），进而控制这两个对象之间的交互。中介者模式有助于降低类之间通信交流的耦合度。因为现在，它们不再需要了解对方的实现细节。

维基百科这样描述

> 在软件工程领域，中介者模式定义了一个对象，该对象封装了一组对象之间交互的方式。中介者模式被认为是一种行为型设计模式，因为它可以改变程序运行时的行为。

**编程示例**

下面是聊天室（即中介者）的最简单示例，其中有若干互相发送消息的用户（即同事类）

首先我们定义了中介者，即聊天室

```js
// Mediator
class ChatRoom {
    showMessage(user, message) {
        const time = new Date()
        const sender = user.getName()

        console.log(time + '[' + sender + ']:' + message)
    }
}
```

接着我们定义了用户，即同事类

```js
class User {
    constructor(name, chatMediator) {
        this.name = name
        this.chatMediator = chatMediator
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatMediator.showMessage(this, message)
    }
}
```

就可以像这样使用了

```js
const mediator = new ChatRoom()

const john = new User('John Doe', mediator)
const jane = new User('Jane Doe', mediator)

john.send('你好！')
jane.send('你好哇！')

// 输出如下
// Feb 14, 10:58 [John]: 你好！
// Feb 14, 10:58 [Jane]: 你好哇！
```

### 💾 备忘录模式 / Memento

现实生活中的例子

> 以计算器（即“原发器”）为例，每当您执行了某些计算操作时，最后一次计算的结果都会被保存到内存（即“备忘录”）中，这样您就可以通过按下某些操作按钮（即“负责人”）来查看，或者如果可能的话，恢复它。

简单来说

> 备忘录模式通过某种方式捕获并保存对象的当前状态，以便在之后可以使用轻松的方式恢复。

维基百科这样描述

> 备忘录模式是一种提供了恢复对象到以前状态（通过回滚来撤销）的能力的软件设计模式。

通常在您需要提供某种撤销功能时十分有用。

**编程示例**

以本文编辑器为例，它不时地保存当前的状态，当您想要时则可以恢复

首先我们定义了备忘录对象，它能够保存编辑器的状态

```js
class EditorMemento {
    constructor(content) {
        this._content = content
    }

    getContent() {
        return this._content
    }
}
```

接着我们定义了编辑器对象，即原发器，它将会使用到备忘录对象

```js
class Editor {
    constructor(){
        this._content = ''
    }

    type(words) {
        this._content = this._content + words
    }

    getContent() {
        return this._content
    }

    save() {
        return new EditorMemento(this._content)
    }

    restore(memento) {
        this._content = memento.getContent()
    }
}
```

最后可以这样使用它

```js
const editor = new Editor()

// 输入一些文本
editor.type('日月忽其不淹兮，')
editor.type('春与秋其代序。')

// 保存当前用于恢复的状态：日月忽其不淹兮，春与秋其代序。
const saved = editor.save()

// 再输入一些文本
editor.type('惟草木之零落兮，恐美人之迟暮。')

// 不保存，输出当前内容
console.log(editor.getContent())// 日月忽其不淹兮，春与秋其代序。惟草木之零落兮，恐美人之迟暮。

// 恢复到上次保存的状态
editor.restore(saved)

console.log(editor.getContent()) // 日月忽其不淹兮，春与秋其代序。
```

### 😎 观察者模式 / Observer

（也被称为 _“发布-订阅模式”_ ）

现实生活中的例子

> 求职者就是很好的例子，他们会订阅一些职位发布网站，当有匹配的工作机会时通知他们。

简单来说

> 观察者模式定义了对象之间的依赖关系，每当一个对象改变它的状态时，它的所有依赖对象将会得到通知。

维基百科这样描述

> 观察者模式是一种软件设计模式，一个目标对象管理所有依赖于它的观察者对象，并在它状态发生改变时主动通知观察者对象，这通常是通过调用观察者对象的某个方法来实现的。

**编程示例**

翻译前面我们的例子。首先，我们定义了求职者类，当有新的职位发布时，他们将得到通知

```js
const JobPost = title => ({
    title: title
})

class JobSeeker {
    constructor(name) {
        this._name = name
    }

    notify(jobPost) {
        console.log(this._name, ' 接收了一个新职位的通知：', jobPost.title)
    }
}
```

接着，我们定义了职位发布公告栏，供求职者订阅

```js
class JobBoard {
    constructor() {
        this._subscribers = []
    }

    subscribe(jobSeeker) {
        this._subscribers.push(jobSeeker)
    }

    addJob(jobPosting) {
        this._subscribers.forEach(subscriber => {
            subscriber.notify(jobPosting)
        })
    }
}
```

现在，可以这样使用它

```js
// 创建订阅者
const jonDoe = new JobSeeker('John Doe')
const janeDoe = new JobSeeker('Jane Doe')
const kaneDoe = new JobSeeker('Kane Doe')

// 创建发布者，并绑定订阅者
const jobBoard = new JobBoard()
jobBoard.subscribe(jonDoe)
jobBoard.subscribe(janeDoe)

// 添加一份新的职位，看看订阅者是否收到通知
jobBoard.addJob(JobPost('软件工程师'))

// 输出如下
// John Doe 接收了一个新职位的通知：软件工程师
// Jane Doe 接收了一个新职位的通知：软件工程师
```

### 🏃 访问者模式 / Visitor

现实生活中的例子

> Consider someone visiting Dubai. They just need a way (i.e. visa) to enter Dubai. After arrival, they can come and visit any place in Dubai on their own without having to ask for permission or to do some leg work in order to visit any place here just let them know of a place and they can visit it. Visitor pattern let's you do just that, it helps you add places to visit so that they can visit as much as they can without having to do any legwork.

简单来说

> Visitor pattern let's you add further operations to objects without having to modify them.

维基百科这样描述

> In object-oriented programming and software engineering, the visitor design pattern is a way of separating an algorithm from an object structure on which it operates. A practical result of this separation is the ability to add new operations to existing object structures without modifying those structures. It is one way to follow the open/closed principle.

**编程示例**

Let's take an example of a zoo simulation where we have several different kinds of animals and we have to make them Sound. Let's translate this using visitor pattern

We have our implementations for the animals

```js
class Monkey {
    shout() {
        console.log('Ooh oo aa aa!')
    }

    accept(operation) {
        operation.visitMonkey(this)
    }
}

class Lion {
    roar() {
        console.log('Roaaar!')
    }
    
    accept(operation) {
        operation.visitLion(this)
    }
}

class Dolphin {
    speak() {
        console.log('Tuut tuttu tuutt!')
    }
    
    accept(operation) {
        operation.visitDolphin(this)
    }
}
```

Let's implement our visitor

```js
const speak = {
    visitMonkey(monkey){
        monkey.shout()
    },
    visitLion(lion){
        lion.roar()
    },
    visitDolphin(dolphin){
        dolphin.speak()
    }
}
```

And then it can be used as

```js
const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

monkey.accept(speak)    // Ooh oo aa aa!    
lion.accept(speak)      // Roaaar!
dolphin.accept(speak)   // Tuut tutt tuutt!
```

We could have done this simply by having a inheritance hierarchy for the animals but then we would have to modify the animals whenever we would have to add new actions to animals. But now we will not have to change them. For example, let's say we are asked to add the jump behavior to the animals, we can simply add that by creating a new visitor i.e.

```js
const jump = {
    visitMonkey(monkey) {
        console.log('Jumped 20 feet high! on to the tree!')
    },
    visitLion(lion) {
        console.log('Jumped 7 feet! Back on the ground!')
    },
    visitDolphin(dolphin) {
        console.log('Walked on water a little and disappeared')
    }
}
```

And for the usage

```js
monkey.accept(speak)   // Ooh oo aa aa!
monkey.accept(jump)    // Jumped 20 feet high! on to the tree!

lion.accept(speak)     // Roaaar!
lion.accept(jump)      // Jumped 7 feet! Back on the ground! 

dolphin.accept(speak)  // Tuut tutt tuutt! 
dolphin.accept(jump)   // Walked on water a little and disappeared
```

### 💡 策略模式 / Strategy

现实生活中的例子

> Consider the example of sorting, we implemented bubble sort but the data started to grow and bubble sort started getting very slow. In order to tackle this we implemented Quick sort. But now although the quick sort algorithm was doing better for large datasets, it was very slow for smaller datasets. In order to handle this we implemented a strategy where for small datasets, bubble sort will be used and for larger, quick sort.

简单来说

> Strategy pattern allows you to switch the algorithm or strategy based upon the situation.

维基百科这样描述

> In computer programming, the strategy pattern (also known as the policy pattern) is a behavioural software design pattern that enables an algorithm's behavior to be selected at runtime.

**编程示例**

Translating our example from above, we can easily implement this strategy in javascript using its feature of first class functions.

```js
const bubbleSort = dataset => {
    console.log('Sorting with bubble sort')
    // ...
    // ...
    return dataset
}

const quickSort = dataset => {
    console.log('Sorting with quick sort')
    // ...
    // ...
    return dataset
}
```

And then we have our client that is going to use any strategy

```js
const sorter = dataset => {
    if(dataset.length > 5){
        return quickSort
    } else {
        return bubbleSort
    }
}
```

And it can be used as

```js
const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Output : Sorting with quick sort
sorter2(shortDataSet) // Output : Sorting with bubble sort
```

### 💢 状态模式 / State

现实生活中的例子

> Imagine you are using some drawing application, you choose the paint brush to draw. Now the brush changes it's behavior based on the selected color i.e. if you have chosen red color it will draw in red, if blue then it will be in blue etc.  

简单来说

> It lets you change the behavior of a class when the state changes.

维基百科这样描述

> The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass.
> The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface

**编程示例**

Let's take an example of text editor, it let's you change the state of text that is typed i.e. if you have selected bold, it starts writing in bold, if italic then in italics etc.

First of all we have our transformation functions

```js
const upperCase = inputString => inputString.toUpperCase()
const lowerCase = inputString => inputString.toLowerCase()
const defaultTransform = inputString => inputString
```

Then we have our editor

```js
class TextEditor {
    constructor(transform) {
        this._transform = transform
    }
    
    setTransform(transform) {
        this._transform = transform
    }
    
    type(words) {
        console.log(this._transform(words))
    }
}
```

And then it can be used as

```js
const editor = new TextEditor(defaultTransform)

editor.type('First line')

editor.setTransform(upperCase)

editor.type('Second line')
editor.type('Third line')

editor.setTransform(lowerCase)

editor.type('Fourth line')
editor.type('Fifth line')

// Output:
// First line
// SECOND LINE
// THIRD LINE
// fourth line
// fifth line
```

### 📒 模板方法模式 / Template Method

现实生活中的例子

> Suppose we are getting some house built. The steps for building might look like
>
> - Prepare the base of house
> - Build the walls
> - Add roof
> - Add other floors
>
> The order of these steps could never be changed i.e. you can't build the roof before building the walls etc but each of the steps could be modified for example walls can be made of wood or polyester or stone.
  
简单来说

> Template method defines the skeleton of how certain algorithm could be performed but defers the implementation of those steps to the children classes.

维基百科这样描述

> In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets one redefine certain steps of an algorithm without changing the algorithm's structure.

**编程示例**

Imagine we have a build tool that helps us test, lint, build, generate build reports (i.e. code coverage reports, linting report etc) and deploy our app on the test server.

First of all we have our base class that specifies the skeleton for the build algorithm

```js
class Builder {
    // Template method 
    build() {
        this.test()
        this.lint()
        this.assemble()
        this.deploy()
    }
}
```

Then we can have our implementations

```js
class AndroidBuilder extends Builder {
    test() {
        console.log('Running android tests')
    }
    
    lint() {
        console.log('Linting the android code')
    }
    
    assemble() {
        console.log('Assembling the android build')
    }
    
    deploy() {
        console.log('Deploying android build to server')
    }
}

class IosBuilder extends Builder {
    test() {
        console.log('Running ios tests')
    }
    
    lint() {
        console.log('Linting the ios code')
    }
    
    assemble() {
        console.log('Assembling the ios build')
    }
    
    deploy() {
        console.log('Deploying ios build to server')
    }
}
```

And then it can be used as

```js
const androidBuilder = new AndroidBuilder()
androidBuilder.build()

// Output:
// Running android tests
// Linting the android code
// Assembling the android build
// Deploying android build to server

const iosBuilder = new IosBuilder()
iosBuilder.build()

// Output:
// Running ios tests
// Linting the ios code
// Assembling the ios build
// Deploying ios build to server
```

## 🚦 尾声 / Wrap Up Folks

到这里教程的正文内容就结束了。我会持续改进这篇教程，也许您以后想要重新访问这个仓库来查看最新的内容，不妨点一个关注以及星标。对了，我计划撰写同样风格的软件体系架构教程，希望您继续关注。

## 👬 参与贡献 / Contribution

- 反馈问题 / Report issues
- 拉取请求，改进文档 / Open pull request with improvements
- 分享此仓库 / Spread the word

## 🔑 项目许可 / License

MIT © [LolipopJ](https://github.com/LolipopJ)

本项目基于 [Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans)，案例的 JavaScript 代码来自 [JavaScript Design Patterns for Humans](https://github.com/sohamkamani/javascript-design-patterns-for-humans)。
