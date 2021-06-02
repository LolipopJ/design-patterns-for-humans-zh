![献给中文读者的设计模式教程 / Design Patterns for Humans CN](./cover/cover.png)

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

# 献给中文读者的设计模式教程 / Design Patterns for Humans CN

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
// 给我制造一个 100x200 的门
const door = DoorFactory.makeDoor(100, 200)

console.log('Width:', door.getWidth())
console.log('Height:', door.getHeight())

// 给我制造一个 50x100 的门
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

现在我们有了抽象工厂，它允许我们创建一系列相关联的对象。比如，木门工厂能够制造木门和提供木门安装师傅，铁门工厂能够制造铁门和提供铁门安装师傅。

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

> Structural patterns are mostly concerned with object composition or in other words how the entities can use each other. Or yet another explanation would be, they help in answering "How to build a software component?"

维基百科这样描述

> In software engineering, structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships between entities.
  
- [适配器模式](#-适配器模式--adapter)
- [桥接模式](#-桥接模式--bridge)
- [组合模式](#-组合模式--composite)
- [装饰器模式](#-装饰器模式--decorator)
- [门面模式](#-门面模式--facade)
- [享元模式](#-享元模式--flyweight)
- [代理模式](#-代理模式--proxy)

### 🔌 适配器模式 / Adapter

现实生活中的例子

> Consider that you have some pictures in your memory card and you need to transfer them to your computer. In order to transfer them you need some kind of adapter that is compatible with your computer ports so that you can attach memory card to your computer. In this case card reader is an adapter.
> Another example would be the famous power adapter a three legged plug can't be connected to a two pronged outlet, it needs to use a power adapter that makes it compatible with the two pronged outlet.
> Yet another example would be a translator translating words spoken by one person to another

简单来说

> Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

维基百科这样描述

> In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.

**编程示例**

Consider a game where there is a hunter and he hunts lions.

First we have an interface `Lion` that all types of lions have to implement

```js
/*
Lion interface :

roar()
*/

class AfricanLion  {
    roar() {}
}

class AsianLion  {
    roar() {}
}
```

And hunter expects any implementation of `Lion` interface to hunt.

```js
class Hunter {
    hunt(lion) {
        // ... some code before
        lion.roar()
        //... some code after
    }
}
```

Now let's say we have to add a `WildDog` in our game so that hunter can hunt that also. But we can't do that directly because dog has a different interface. To make it compatible for our hunter, we will have to create an adapter that is compatible

```js
// This needs to be added to the game
class WildDog {
    bark() {
    }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter {

    constructor(dog) {
        this.dog = dog;
    }
    
    roar() {
        this.dog.bark();
    }
}
```

And now the `WildDog` can be used in our game using `WildDogAdapter`.

```js
wildDog = new WildDog()
wildDogAdapter = new WildDogAdapter(wildDog)

hunter = new Hunter()
hunter.hunt(wildDogAdapter)
```

### 🚡 桥接模式 / Bridge

现实生活中的例子

> Consider you have a website with different pages and you are supposed to allow the user to change the theme. What would you do? Create multiple copies of each of the pages for each of the themes or would you just create separate theme and load them based on the user's preferences? Bridge pattern allows you to do the second i.e.

![With and without the bridge pattern](https://cloud.githubusercontent.com/assets/11269635/23065293/33b7aea0-f515-11e6-983f-98823c9845ee.png)

简单来说

> Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.

维基百科这样描述

> The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently"

**编程示例**

Translating our WebPage example from above. Here we have the `WebPage` hierarchy

```js
/*
Webpage interface :

constructor(theme)
getContent()
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

And the separate theme hierarchy

```js
/*
Theme interface :

getColor()
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

And both the hierarchies

```js
const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent() )// "About page in Dark Black"
console.log(careers.getContent() )// "Careers page in Dark Black"
```

### 🌿 组合模式 / Composite

现实生活中的例子

> Every organization is composed of employees. Each of the employees has same features i.e. has a salary, has some responsibilities, may or may not report to someone, may or may not have some subordinates etc.

简单来说

> Composite pattern lets clients to treat the individual objects in a uniform manner.

维基百科这样描述

> In software engineering, the composite pattern is a partitioning design pattern. The composite pattern describes that a group of objects is to be treated in the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly.

**编程示例**

Taking our employees example from above. Here we have different employee types

```js
/*
Employee interface :

constructor(name, salary)
getName()
setSalary()
getSalary()
getRoles()
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

Then we have an organization which consists of several different types of employees

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

And then it can be used as

```js
// Prepare the employees
const john = new Developer('John Doe', 12000)
const jane = new Designer('Jane', 10000)

// Add them to organization
const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)

console.log("Net salaries: " , organization.getNetSalaries()) // Net Salaries: 22000
```

### ☕ 装饰器模式 / Decorator

现实生活中的例子

> Imagine you run a car service shop offering multiple services. Now how do you calculate the bill to be charged? You pick one service and dynamically keep adding to it the prices for the provided services till you get the final cost. Here each type of service is a decorator.

简单来说

> Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

维基百科这样描述

> In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.

**编程示例**

Lets take coffee for example. First of all we have a simple coffee implementing the coffee interface

```js
/*
Coffee interface:
getCost()
getDescription()
*/

class SimpleCoffee{

    getCost() {
        return 10
    }

    getDescription() {
        return 'Simple coffee'
    }
}
```

We want to make the code extensible to allow options to modify it if required. Lets make some add-ons (decorators)

```js
class MilkCoffee {


    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk'
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
        return this.coffee.getDescription() + ', whip'
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
        return this.coffee.getDescription() + ', vanilla'
    }
}

```

Lets make a coffee now

```js
let someCoffee

someCoffee = new SimpleCoffee()
console.log(someCoffee.getCost())// 10
console.log(someCoffee.getDescription())// Simple Coffee

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost())// 12
console.log(someCoffee.getDescription())// Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee)
console.log(someCoffee.getCost())// 17
console.log(someCoffee.getDescription())// Simple Coffee, milk, whip

someCoffee = new VanillaCoffee(someCoffee)
console.log(someCoffee.getCost())// 20
console.log(someCoffee.getDescription())// Simple Coffee, milk, whip, vanilla
```

### 📦 门面模式 / Facade

译注：也常被译为**外观模式**。

现实生活中的例子

> How do you turn on the computer? "Hit the power button" you say! That is what you believe because you are using a simple interface that computer provides on the outside, internally it has to do a lot of stuff to make it happen. This simple interface to the complex subsystem is a facade.

简单来说

> Facade pattern provides a simplified interface to a complex subsystem.

维基百科这样描述

> A facade is an object that provides a simplified interface to a larger body of code, such as a class library.

**编程示例**
Taking our computer example from above. Here we have the computer class

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

Here we have the facade

```js
class ComputerFacade
{
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

Now to use the facade

```js
const computer = new ComputerFacade(new Computer())
computer.turnOn() // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff() // Bup bup buzzz! Haah! Zzzzz
```

### 🍃 享元模式 / Flyweight

现实生活中的例子

> Did you ever have fresh tea from some stall? They often make more than one cup that you demanded and save the rest for any other customer so to save the resources e.g. gas etc. Flyweight pattern is all about that i.e. sharing.

简单来说

> It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

维基百科这样描述

> In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.

**编程示例**

Translating our tea example from above. First of all we have tea types and tea maker

```js
// Anything that will be cached is flyweight. 
// Types of tea here will be flyweights.
class KarakTea {
}

// Acts as a factory and saves the tea
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

Then we have the `TeaShop` which takes orders and serves them

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
            console.log('Serving tea to table#' + index)
        })
    }
}
```

And it can be used as below

```js
const teaMaker = new TeaMaker()
const shop = new TeaShop(teaMaker)

shop.takeOrder('less sugar', 1)
shop.takeOrder('more milk', 2)
shop.takeOrder('without sugar', 5)

shop.serve()
// Serving tea to table# 1
// Serving tea to table# 2
// Serving tea to table# 5
```

### 🎱 代理模式 / Proxy

现实生活中的例子

> Have you ever used an access card to go through a door? There are multiple options to open that door i.e. it can be opened either using access card or by pressing a button that bypasses the security. The door's main functionality is to open but there is a proxy added on top of it to add some functionality. Let me better explain it using the code example below.

简单来说

> Using the proxy pattern, a class represents the functionality of another class.

维基百科这样描述

> A proxy, in its most general form, is a class functioning as an interface to something else. A proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.

**编程示例**

Taking our security door example from above. Firstly we have the door interface and an implementation of door

```js
/*
Door interface :

open()
close()
*/

class LabDoor {
    open() {
        console.log('Opening lab door')
    }

    close() {
        console.log('Closing the lab door')
    }
}
```

Then we have a proxy to secure any doors that we want

```js
class Security {
    constructor(door) {
        this.door = door
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            console.log('Big no! It ain\'t possible.')
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

And here is how it can be used

```js
const door = new Security(new LabDoor())
door.open('invalid') // Big no! It ain't possible.

door.open('ecr@t') // Opening lab door
door.close() // Closing lab door
```

## 🤹 行为型设计模式 / Behavioral Design Patterns

简单来说

> It is concerned with assignment of responsibilities between the objects. What makes them different from structural patterns is they don't just specify the structure but also outline the patterns for message passing/communication between them. Or in other words, they assist in answering "How to run a behavior in software component?"

维基百科这样描述

> In software engineering, behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

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

> For example, you have three payment methods (`A`, `B` and `C`) setup in your account each having a different amount in it. `A` has 100 USD, `B` has 300 USD and `C` having 1000 USD and the preference for payments is chosen as `A` then `B` then `C`. You try to purchase something that is worth 210 USD. Using Chain of Responsibility, first of all account `A` will be checked if it can make the purchase, if yes purchase will be made and the chain will be broken. If not, request will move forward to account `B` checking for amount if yes chain will be broken otherwise the request will keep forwarding till it finds the suitable handler. Here `A`, `B` and `C` are links of the chain and the whole phenomenon is Chain of Responsibility.

简单来说

> It helps building a chain of objects. Request enters from one end and keeps going from object to object till it finds the suitable handler.

维基百科这样描述

> In object-oriented design, the chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle the rest are passed to the next processing object in the chain.

**编程示例**

Translating our account example above. First of all we have a base account having the logic for chaining the accounts together and some accounts

```js
class Account {

    setNext(account) {
        this.successor = account
    }
    
    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`Paid ${amountToPay} using ${this.name}`)
        } else if (this.successor) {
            console.log(`Cannot pay using ${this.name}. Proceeding...`)
            this.successor.pay(amountToPay)
        } else {
            console.log('None of the accounts have enough balance')
        }
    }
    
    canPay(amount) {
        return this.balance >= amount
    }
}

class Bank extends Account {
    constructor(balance) {
        super()
        this.name = 'bank'
        this.balance = balance
    }
}

class Paypal extends Account {
    constructor(balance) {
        super()        
        this.name = 'Paypal'
        this.balance = balance
    }
}

class Bitcoin extends Account {
    constructor(balance) {
        super()        
        this.name = 'bitcoin'
        this.balance = balance
    }
}
```

Now let's prepare the chain using the links defined above (i.e. Bank, Paypal, Bitcoin)

```js
// Let's prepare a chain like below
//      bank.paypal.bitcoin
//
// First priority bank
//      If bank can't pay then paypal
//      If paypal can't pay then bit coin

const bank = new Bank(100)          // Bank with balance 100
const paypal = new Paypal(200)      // Paypal with balance 200
const bitcoin = new Bitcoin(300)    // Bitcoin with balance 300

bank.setNext(paypal)
paypal.setNext(bitcoin)

// Let's try to pay using the first priority i.e. bank
bank.pay(259)

// Output will be
// ==============
// Cannot pay using bank. Proceeding ..
// Cannot pay using paypal. Proceeding ..: 
// Paid 259 using Bitcoin!
```

### 👮 命令模式 / Command

现实生活中的例子

> A generic example would be you ordering a food at restaurant. You (i.e. `Client`) ask the waiter (i.e. `Invoker`) to bring some food (i.e. `Command`) and waiter simply forwards the request to Chef (i.e. `Receiver`) who has the knowledge of what and how to cook.
> Another example would be you (i.e. `Client`) switching on (i.e. `Command`) the television (i.e. `Receiver`) using a remote control (`Invoker`).

简单来说

> Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

维基百科这样描述

> In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

**编程示例**

First of all we have the receiver that has the implementation of every action that could be performed

```js
// Receiver
class Bulb {
    turnOn() {
        console.log('Bulb has been lit')
    }
    
    turnOff() {
        console.log('Darkness!')
    }
}
```

then we have an interface that each of the commands are going to implement and then we have a set of commands

```js
/*
Command interface :

    execute()
    undo()
    redo()
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

Then we have an `Invoker` with whom the client will interact to process any commands

```js
// Invoker
class RemoteControl {
    submit(command) {
        command.execute()
    }
}
```

Finally let's see how we can use it in our client

```js
const bulb = new Bulb()

const turnOn = new TurnOnCommand(bulb)
const turnOff = new TurnOffCommand(bulb)

const remote = new RemoteControl()
remote.submit(turnOn) // Bulb has been lit!
remote.submit(turnOff) // Darkness!
```

Command pattern can also be used to implement a transaction based system. Where you keep maintaining the history of commands as soon as you execute them. If the final command is successfully executed, all good otherwise just iterate through the history and keep executing the `undo` on all the executed commands.

### ➿ 迭代器模式 / Iterator

现实生活中的例子

> An old radio set will be a good example of iterator, where user could start at some channel and then use next or previous buttons to go through the respective channels. Or take an example of MP3 player or a TV set where you could press the next and previous buttons to go through the consecutive channels or in other words they all provide an interface to iterate through the respective channels, songs or radio stations.  

简单来说

> It presents a way to access the elements of an object without exposing the underlying presentation.

维基百科这样描述

> In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.

**编程示例**

Translating our radio stations example from above. First of all we have `RadioStation`

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

Then we have our iterator

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

And then it can be used as

```js
const stationList = new StationList()

stationList.addStation(new RadioStation(89))
stationList.addStation(new RadioStation(101))
stationList.addStation(new RadioStation(102))
stationList.addStation(new RadioStation(103.2))

stationList.stations.forEach(station => console.log(station.getFrequency()))

stationList.removeStation(new RadioStation(89)) // Will remove station 89
```

### 👽 中介者模式 / Mediator

现实生活中的例子

> A general example would be when you talk to someone on your mobile phone, there is a network provider sitting between you and them and your conversation goes through it instead of being directly sent. In this case network provider is mediator.

简单来说

> Mediator pattern adds a third party object (called mediator) to control the interaction between two objects (called colleagues). It helps reduce the coupling between the classes communicating with each other. Because now they don't need to have the knowledge of each other's implementation.

维基百科这样描述

> In software engineering, the mediator pattern defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.

**编程示例**

Here is the simplest example of a chat room (i.e. mediator) with users (i.e. colleagues) sending messages to each other.

First of all, we have the mediator i.e. the chat room

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

Then we have our users i.e. colleagues

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

And the usage

```js
const mediator = new ChatRoom()

const john = new User('John Doe', mediator)
const jane = new User('Jane Doe', mediator)

john.send('Hi there!')
jane.send('Hey!')

// Output will be
// Feb 14, 10:58 [John]: Hi there!
// Feb 14, 10:58 [Jane]: Hey!
```

### 💾 备忘录模式 / Memento

现实生活中的例子

> Take the example of calculator (i.e. originator), where whenever you perform some calculation the last calculation is saved in memory (i.e. memento) so that you can get back to it and maybe get it restored using some action buttons (i.e. caretaker).

简单来说

> Memento pattern is about capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.

维基百科这样描述

> The memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback).

Usually useful when you need to provide some sort of undo functionality.

**编程示例**

Lets take an example of text editor which keeps saving the state from time to time and that you can restore if you want.

First of all we have our memento object that will be able to hold the editor state

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

Then we have our editor i.e. originator that is going to use memento object

```js
class Editor {
    constructor(){
        this._content = ''
    }
    
    type(words) {
        this._content = this._content + ' ' + words
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

And then it can be used as

```js
const editor = new Editor()

// Type some stuff
editor.type('This is the first sentence.')
editor.type('This is second.')

// Save the state to restore to : This is the first sentence. This is second.
const saved = editor.save()

// Type some more
editor.type('And this is third.')

// Output: Content before Saving
console.log(editor.getContent())// This is the first sentence. This is second. And this is third.

// Restoring to last saved state
editor.restore(saved)

console.log(editor.getContent()) // This is the first sentence. This is second.
```

### 😎 观察者模式 / Observer

(Otherwise known as _"pub-sub"_)

现实生活中的例子

> A good example would be the job seekers where they subscribe to some job posting site and they are notified whenever there is a matching job opportunity.

简单来说

> Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.

维基百科这样描述

> The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

**编程示例**

Translating our example from above. First of all we have job seekers that need to be notified for a job posting

```js
const JobPost = title => ({
    title: title
})

class JobSeeker {
    constructor(name) {
        this._name = name
    }

    notify(jobPost) {
        console.log(this._name, 'has been notified of a new posting :', jobPost.title)
    }
}
```

Then we have our job postings to which the job seekers will subscribe

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

Then it can be used as

```js
// Create subscribers
const jonDoe = new JobSeeker('John Doe')
const janeDoe = new JobSeeker('Jane Doe')
const kaneDoe = new JobSeeker('Kane Doe')

// Create publisher and attach subscribers
const jobBoard = new JobBoard()
jobBoard.subscribe(jonDoe)
jobBoard.subscribe(janeDoe)

// Add a new job and see if subscribers get notified
jobBoard.addJob(JobPost('Software Engineer'))

// Output
// John Doe has been notified of a new posting : Software Engineer
// Jane Doe has been notified of a new posting : Software Engineer
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
