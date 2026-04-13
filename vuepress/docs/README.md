<br>
<p align="center">
    <img :src="$withBase('/cover.png')" alt="献给中文读者的设计模式教程 / Design Patterns for Humans ZH" />
</p>

---

<p align="center">
🎉 对设计模式的超简单解读！ 🎉
</p>
<p align="center">
设计模式这个话题常常令人望而生畏。在这里，我将试着用尽可能简单的方式来解释它们，让它们深深地刻在您（也许还有我）的脑海里。
</p>

---

<sub>如果您喜欢这篇教程，不妨看看教程原作者的[另一个项目](https://roadmap.sh/)，或是去 [X](https://x.com/kamrify) 上跟他打声招呼。</sub>

<sub>本项目基于 <a href="https://github.com/kamranahmedse/design-patterns-for-humans">Design Patterns for Humans</a>，案例 JavaScript 代码来自 <a href="https://github.com/sohamkamani/javascript-design-patterns-for-humans">JavaScript Design Patterns for Humans</a>。译者在学习的过程中，想要使用自己的语言风格来翻译这篇“给人类写的”设计模式教程。尽管有 AI 的助力，奈何才疏学浅，如有谬误，敬请提交 PR 斧正。</sub>

# 献给中文读者的设计模式教程

## 🚀 介绍

设计模式是针对反复出现的问题的解决方案；**是解决特定问题的指导原则**。它们不是类、包或库，无法直接放进您的应用程序里然后静等好事降临。准确地说，它们是关于如何在特定情况下解决特定问题的指导方针。

> 设计模式是为解决反复出现的问题而提出的方案与指导原则。

维基百科解释道

> 在软件工程领域，软件设计模式是针对软件设计中给定上下文下反复出现的问题，所提出的通用、可重用的解决方案。它不是完整的设计实现，无法直接转译为源代码或机器码。它是关于如何解决问题的描述或模板，可以在许多不同的场景下使用。

### ⚠️ 请注意

- 设计模式并不是解决您所有问题的万全之策。
- 不要强行套用它们，否则可能适得其反。
- 请记住，设计模式是**解决**问题的方案，而不是**找到**问题；所以不要想太多。
- 如果在正确的地方以正确的方式使用，设计模式定能成为您的得力帮手；否则可能导致代码一团糟。

### 🐢 在开始之前

- 所有的设计模式示例都基于 JavaScript 的 [ES6](https://github.com/lukehoban/es6features) 规范实现。
- 由于 JavaScript 没有接口的概念，因此代码示例中使用了隐式接口——即只要一个类具有某接口应有的属性和方法，就认为它实现了该接口。为便于辨识，我们在每个示例中都用注释标注了所用的接口。

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

<<< @/fragments/javascript/simpleFactory.js#WoodenDoor

接下来，我们拥有了生产房门的工厂，它可以返回制造好的房门

<<< @/fragments/javascript/simpleFactory.js#DoorFactory

可以像这样使用它

<<< @/fragments/javascript/simpleFactory.js#makeDoor

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

<<< @/fragments/javascript/factoryMethod.js#Interviewer

接着创建我们的 `HiringManager`

<<< @/fragments/javascript/factoryMethod.js#HiringManager

现在，任何子类都可以继承它并提供所需的面试官

<<< @/fragments/javascript/factoryMethod.js#extendHiringManager

可以像这样使用它

<<< @/fragments/javascript/factoryMethod.js#takeInterview

**什么时候使用？**

当类中存在一些通用的处理过程，但是所需的子类要在运行时动态确定时，工厂方法模式非常有用。换句话说，当客户端不知道自己可能需要哪个具体的子类时。

### 🔨 抽象工厂模式 / Abstract Factory

现实生活中的例子

> 拓展简单工厂模式中关于房门的例子。根据您的需要，您可能会从木门商店买木门，从铁门商店买到铁门，或是从相应的商店买到塑料门。另外您还可能需要具备不同专业能力的师傅来安装这些房门，例如让木匠安装木门，让焊工安装铁门等。正如您所看到的，现在房门与装门师傅之间存在一种依赖关系：安装木门需要木匠，安装铁门需要焊工等。

简单来说

> 工厂的工厂。将各个独立但相互关联或依赖的工厂组合在一起，而不必指定它们的具体类。

维基百科解释道

> 抽象工厂模式提供了一种封装一组具有共同主题的独立工厂的方法，而不必指定它们的具体类。

**编程示例**

将上面房门的例子用代码实现。首先，我们定义了 `Door` 接口并实现了一些类型的房门

<<< @/fragments/javascript/abstractFactory.js#Door

接着我们为每一种类型的房门定义了对应的安装师傅

<<< @/fragments/javascript/abstractFactory.js#DoorFittingExpert

现在我们来定义抽象工厂，它允许我们创建一系列相关联的对象，即木门工厂能够制造木门并提供安装木门的师傅，铁门工厂能够制造铁门并提供安装铁门的师傅。

<<< @/fragments/javascript/abstractFactory.js#DoorFactory

可以像这样使用它

<<< @/fragments/javascript/abstractFactory.js#makeDoor

正如您看到的，木门工厂已经封装了 `carpenter` 和 `wooden door`，铁门工厂也已封装了 `iron door` 和 `welder`。因而它确保了对于每一个制造出来的门，我们都能找到正确的安装师傅。

**什么时候使用？**

当对象间存在相互关联的依赖关系，并涉及不那么简单的创建逻辑时

### 👷 生成器模式 / Builder

译注：又名**建造模式**

现实生活中的例子

> 想象您在哈帝斯汉堡店里，点了一份“大哈迪汉堡”。准备好后，店员话不多说直接把汉堡递给您——这就是一个简单工厂的例子。但在某些情况下，制作汉堡可能包含额外的步骤。举个例子，您想要一份定制的餐点，就有很多选项：您要什么面包片？喜欢哪款酱汁？想吃哪种奶酪？诸如此类。在这种情况下，就需要用到生成器模式了。

简单来说

> 生成器模式允许您创建不同风格的对象，同时避免污染构造函数。当一个对象可能存在多种风格时，或者当一个对象的创建过程包含很多步骤时，生成器模式非常有用。

维基百科解释道

> 生成器模式是一种创建型软件设计模式，旨在解决重叠构造函数反模式（Telescoping Constructor Anti-pattern）的问题。

既然提到了，那么请允许我插一嘴什么是重叠构造函数反模式。我们都曾看到过像这样的构造函数：

<<< @/fragments/javascript/builder.js#TelescopicConstructor

正如您所看到的，构造函数的参数数量很快就会失控，参数的含义也变得难以理解。而且日后若要添加更多选项，参数列表还会继续膨胀。这就是重叠构造函数反模式。

**编程示例**

明智的选择是使用生成器模式。首先我们定义了想要制作的汉堡

<<< @/fragments/javascript/builder.js#Burger

接着我们编写了生成器

<<< @/fragments/javascript/builder.js#BurgerBuilder

可以像这样使用它

<<< @/fragments/javascript/builder.js#newBurger

**JavaScript 版本特别提示**：当您发现一个函数或方法的参数太多（一般超过 2 个参数都被认为是太多）时，应当使用一个对象参数，来取代多个参数。理由有二：

1. 它可以让您的代码看上去更整洁，因为只有一个参数。
2. 您不需要担心参数的顺序，因为参数将根据对象的命名属性传递。

举个例子，应当使用

<<< @/fragments/javascript/builder.js#goodBurger

来取代

<<< @/fragments/javascript/builder.js#badBurger

**什么时候使用？**

当一个对象可能有多种风格，并想要避免重叠构造函数时。生成器模式与工厂模式的关键区别是：工厂模式适用于创建过程只有一个步骤的场景，生成器模式适用于创建过程包含多个步骤的场景。

### 🐑 原型模式 / Prototype

现实生活中的例子

> 还记得多莉吗？那只被克隆的羊！克隆就是原型模式的关键。

简单来说

> 基于已存在的对象，通过克隆创建新的对象。

维基百科解释道

> 在软件开发领域，原型模式是一种创建型设计模式。当创建的对象类型由一个原型实例确定时，使用原型模式，这个原型实例将被克隆来生成新的对象。

简而言之，原型模式允许您复制现有对象并按需修改，而不必费力地从头创建并配置。

**编程示例**

首先定义我们要克隆的羊

<<< @/fragments/javascript/prototype.js#Sheep

现在我们有了 `SheepPrototype` 对象，它将克隆给定原型的对象。它的构造函数接受 `Sheep` 对象

<<< @/fragments/javascript/prototype.js#SheepPrototype

可以像这样使用它

<<< @/fragments/javascript/prototype.js#cloneSheep

**JavaScript 版本特别提示**：此编程示例是原型模式的经典实现，但是 JavaScript 能够使用[内建原型工具](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)更有效地实现原型模式。

**什么时候使用？**

当所需对象与现有对象相似时，或直接创建的成本高于克隆时。

### 💍 单例模式 / Singleton

现实生活中的例子

> 一个国家里同时只能有一位总统。无论何时只要职责需要，这位总统就必须采取行动。这里的总统即是单例。

简单来说

> 确保只创建了特定类的唯一对象。

维基百科解释道

> 在软件工程领域，单例模式是一种软件设计模式，它将类的实例化限制为一个对象。当系统中恰好需要一个对象来协调运行时，单例模式很有帮助。

单例模式实际上被认为是一种反模式（Anti-pattern），应避免过度使用。它并非一无是处，也有合理的应用场景。但仍需谨慎使用，因为它会在应用中引入全局状态——一处修改可能波及其他地方，且调试难度大增。此外，它还会导致代码紧密耦合，使得模拟（Mock）单例变得困难。

**编程示例**

在 JavaScript 中，单例可以使用模块模式实现。把私有变量和方法隐藏在函数闭包中，至于公有方法则有选择地暴露出去。

<<< @/fragments/javascript/singleton.js#president

总统的 `presidentsPrivateInformation` 和 `name` 为私有变量。但是，总统的 `name` 可以通过对外暴露的 `president.getName()` 方法访问。

<<< @/fragments/javascript/singleton.js#getPresidentName

## 🔩 结构型设计模式 / Structural Design Patterns

简单来说

> 结构型设计模式主要关注对象的组成，换句话说，关注实体之间如何相互使用。再换句话说，结构型设计模式有助于回答“如何构建软件的组件”这个问题。

维基百科解释道

> 在软件工程领域，结构型设计模式通过识别实现实体间关系的简洁方法，来简化设计。

- [适配器模式](#-适配器模式--adapter)
- [桥接模式](#-桥接模式--bridge)
- [组合模式](#-组合模式--composite)
- [装饰器模式](#-装饰器模式--decorator)
- [门面模式](#-门面模式--facade)
- [享元模式](#-享元模式--flyweight)
- [代理模式](#-代理模式--proxy)

### 🔌 适配器模式 / Adapter

现实生活中的例子

> 您想将存储卡里的图片文件传输到电脑中。为此您需要一种与电脑端口兼容的适配器来连接存储卡。在这种情况下，读卡器就是适配器。
> 另一个例子是电源适配器。三脚插头无法插入双孔插座，使用电源适配器即可使其兼容。
> 再举个例子，翻译者将一个人说的话转译给另一个人。

简单来说

> 适配器模式允许您将与其它类不兼容的对象包装到一个适配器中，让这个对象与另一个类兼容。

维基百科解释道

> 在软件工程领域，适配器模式是一种设计模式，它允许一个现有类的接口用作另一个接口。适配器模式常用于使现有的类与其它的类一起工作，而无需修改它们的源码。

**编程示例**

让我们实现一个游戏：一个猎人要狩猎狮子。

首先我们定义了 `Lion` 接口，所有种类的狮子都需要实现这个接口中的 `roar()` 方法

<<< @/fragments/javascript/adapter.js#Lion

猎人可以狩猎任意一种 `Lion`

<<< @/fragments/javascript/adapter.js#Hunter

假设我们要在游戏中加入猎人也可以狩猎的 `WildDog`。但由于野狗的接口不同（它用的是 `bark()` 方法，我们无法直接把它加进游戏。为了让它能与猎人兼容，我们需要创建一个兼容适配器

<<< @/fragments/javascript/adapter.js#WildDog

于是，通过 `WildDogAdapter`，我们游戏中的猎人便可以狩猎 `WildDog` 了。

<<< @/fragments/javascript/adapter.js#newWildDog

### 🚡 桥接模式 / Bridge

现实生活中的例子

> 您有一个包含多个页面的网站，现在您打算允许用户修改网站主题。您会怎么做？为每个页面的每个主题都创建一份副本，还是将主题独立出来、根据用户偏好动态加载？桥接模式允许您实现后者。

<img :src="$withBase('/With-and-without-the-bridge-pattern.png')" alt="不使用和使用桥接模式的区别" />

简单来说

> 桥接模式是一种偏好于组合而非继承的设计模式。具体实现的细节从一个层级被推送到另一个具有独立层级的对象。

维基百科解释道

> 桥接模式是一种用在软件工程领域的设计模式，旨在“将抽象与其实现解耦，使得两者可以独立改变”。

**编程示例**

将上面的网站示例用代码实现。首先我们定义了 `WebPage` 的层级

<<< @/fragments/javascript/bridge.js#Webpage

以及独立的主题层级

<<< @/fragments/javascript/bridge.js#Theme

最后，将两个层级组合起来使用

<<< @/fragments/javascript/bridge.js#useTheme

### 🌿 组合模式 / Composite

现实生活中的例子

> 所有公司都是员工的组合体。每个员工都具备一些共同点：有薪酬，担负某些职责，可能需要向某人汇报，可能拥有下属等等。

简单来说

> 组合模式使得客户端以统一的方式处理不同的对象。

维基百科解释道

> 在软件工程领域，组合模式是一种分区设计模式。组合模式描述了对一组对象的处理方式，使之与处理单个对象实例相同。其目的是将对象组合成树结构，以表达“部分-整体”的层级关系。实现组合模式后，客户端便能以统一的方式处理单个对象和组合体。

**编程示例**

以前面的员工为例。首先我们定义了两种不同的员工类型

<<< @/fragments/javascript/composite.js#Employee

接着我们定义了公司类，它包含了多种不同类型的员工

<<< @/fragments/javascript/composite.js#Organization

可以像这样使用它

<<< @/fragments/javascript/composite.js#getNetSalaries

### ☕ 装饰器模式 / Decorator

现实生活中的例子

> 想象您经营了一家提供多种服务的汽修厂。您要如何计算服务应收取的费用？您可以每次选择一种服务，将它的价格累加到账单上，直到得到最终的费用。这里的每一种类型的服务就是一个装饰器。

简单来说

> 装饰器模式通过将对象包装在装饰器类中，来动态改变其运行时的行为。

维基百科解释道

> 在面向对象编程中，装饰器模式是一种设计模式，它允许静态或动态地向单个对象中添加行为，而不会影响同一类的其它对象。装饰器模式通常有助于遵循单一责任原则，因为它能将功能划分到各自关注不同领域的类中。

**编程示例**

不妨以咖啡为例。首先，我们编写了普通咖啡类，它实现了咖啡接口

<<< @/fragments/javascript/decorator.js#Coffee

我们希望代码具有可扩展性，以便按需修改。让我们来添加一些额外选项（装饰器）

<<< @/fragments/javascript/decorator.js#ExtraCoffee

来制作一杯咖啡吧

<<< @/fragments/javascript/decorator.js#getCoffee

### 📦 门面模式 / Facade

译注：或**外观模式**

现实生活中的例子

> 如何启动电脑？“按下电源按钮！”——您如此箃定，是因为您使用的是电脑对外提供的简单接口。但电脑内部启动时需要完成大量操作。复杂子系统的简单接口，就是我们所说的门面。

简单来说

> 门面模式为复杂的子系统提供了一个简单的接口。

维基百科解释道

> 门面是一个对象，它为更大的代码主体提供了简化的接口，例如一个类库。

**编程示例**

拿上面启动电脑的例子来说。首先我们编写了电脑类

<<< @/fragments/javascript/facade.js#Computer

接着我们编写了它的门面

<<< @/fragments/javascript/facade.js#ComputerFacade

使用电脑提供的门面

<<< @/fragments/javascript/facade.js#useComputerFacade

### 🍃 享元模式 / Flyweight

现实生活中的例子

> 您喝过摊位上刚沏好的茶吗？摊主通常一次沏很多杯，一杯给您，其余留给其他顾客，以节省资源（例如燃气）。享元模式就是关于这件事——共享。

简单来说

> 享元模式通过在相似对象间共享尽可能多的数据，来减少内存使用或计算开销。

维基百科解释道

> 在计算机编程中，享元模式是一种软件设计模式。享元是一个对象，它与其它相似的对象共享尽可能多的数据，从而减少内存开销。当大量简单重复的对象会占用过多内存时，便可使用享元模式。

**编程示例**

实现上面关于茶的例子。首先我们编写了茶和制茶者类

<<< @/fragments/javascript/flyweight.js#TeaMaker

接着我们编写了 `TeaShop` 类，它将处理点单和上茶事件

<<< @/fragments/javascript/flyweight.js#TeaShop

可以像这样使用它

<<< @/fragments/javascript/flyweight.js#serveTea

### 🎱 代理模式 / Proxy

现实生活中的例子

> 您曾刷卡来通过门禁吗？有很多方法可以通过门禁，例如刷卡或是按下跳过安保的按钮。门禁就是门的一层代理，为打开门这一行为添加了安保的功能。让我通过下面的代码更好地解释它。

简单来说

> 代理模式使一个类能够代表另一个类的功能。

维基百科解释道

> 在其最一般的形式下，代理是一个充当其它类接口的类。代理是供客户端调用的包装或中介对象，用以访问背后真正提供服务的对象。代理可以直接转发到真实对象，也可以附加额外逻辑，例如在操作资源密集时提供缓存，或在调用前检查前置条件。

**编程示例**

以刚才的门禁为例。首先，我们定义并实现了门的接口

<<< @/fragments/javascript/proxy.js#Door

接着我们编写了代理，它可以确保门的安全

<<< @/fragments/javascript/proxy.js#Security

可以像这样使用它

<<< @/fragments/javascript/proxy.js#openCloseSecurityDoor

另一个例子是某种数据映射器实现。例如，最近我使用这种模式为 MongoDB 制作了一个 ODM（对象数据映射器），我利用了魔术方法 `__call()` 围绕 mongo 类编写了一个代理。所有方法调用都被代理到原始的 mongo 类，检索到的结果将原样返回，但在使用 `find` 或 `findOne` 方法的情况下，数据被映射到所需的类对象，返回的结果是对象而非 `Cursor`。

## 🤹 行为型设计模式 / Behavioral Design Patterns

简单来说

> 行为型设计模式关注对象之间的职责分配。与结构型模式不同，它们不仅规定了结构，还描述了对象之间消息传递与通信的模式。换言之，它们有助于回答“如何在软件组件中运行行为？”这个问题。

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

> 例如，您的账号配置了三种付款方式（`A`、`B`、`C`），余额分别为 100 元、300 元和 1000 元，付款优先级为 `A` → `B` → `C`。当您尝试购买 210 元的商品时，系统首先检查 `A` 是否余额充足——如果可以，则完成支付并终止链；否则请求传递给 `B`，依此类推，直到找到能处理支付的账户。这里的 `A`、`B`、`C` 就是链上的节点，整个过程就是责任链。

简单来说

> 责任链模式有助于构建一条对象链。请求从链的一端进入，从对象到另一个对象依次传递，直到找到合适的处理者。

维基百科解释道

> 在面向对象设计中，责任链模式是由一些命令对象和一系列处理对象组成的设计模式。每个处理对象都包含了它可以处理的命令对象类型的逻辑，其余的将传递给链中的下一个处理对象。

**编程示例**

将前面的支付账户示例用代码实现。首先编写包含链式逻辑的支付账户基类，并实现了一些支付账户类

<<< @/fragments/javascript/chainOfResponsibility.js#Account

现在，让我们使用上面定义的节点（即 `Bank`、`Paypal`、`Bitcoin`）构成责任链

<<< @/fragments/javascript/chainOfResponsibility.js#useAccount

### 👮 命令模式 / Command

现实生活中的例子

> 一个典型的例子是在餐厅点餐。您（`Client` 客户端）告诉服务员（`Invoker` 调用者）您想要的菜品（`Command` 命令），服务员只是将需求转达给厨师（`Receiver` 接收者），厨师知道这些菜是什么以及该如何烹制。
> 另一个例子是看电视。您（`Client` 客户端）可以使用遥控器（`Invoker` 调用者）切换（`Command` 命令）电视（`Receiver` 接收者）正在播放的频道。

简单来说

> 命令模式将操作封装为对象。其核心思想在于提供一种将客户端与接收者解耦的手段。

维基百科解释道

> 在面向对象编程中，命令模式是一种行为型设计模式，它将执行操作或稍后触发事件所需的全部信息封装到一个对象中。信息包括方法名，拥有此方法的对象和此方法参数的值。

**编程示例**

首先定义接收者，它实现了所有可执行的操作

<<< @/fragments/javascript/command.js#Bulb

接着定义命令接口，并据此实现了一组命令

<<< @/fragments/javascript/command.js#Command

然后我们定义了调用者，它与客户端直接交互以执行命令

<<< @/fragments/javascript/command.js#RemoteControl

最后看看客户端如何使用

<<< @/fragments/javascript/command.js#useRemoteControl

命令模式也可用于实现事务型系统：每条执行的命令都保存在历史记录中。若最终命令执行成功，万事大吉；否则可回溯历史，对已执行的命令逐一 `undo`（撤销）。

### ➿ 迭代器模式 / Iterator

现实生活中的例子

> 老式收音机是迭代器模式的好例子：用户可以从某个频道开始，通过前进或后退按钮逐一切换频道。MP3 播放器或电视也是如此，您可以按下前进或后退按钮来逐一浏览。换句话说，它们都提供了一种遍历频道、歌曲或电台的接口。

简单来说

> 迭代器模式提供了一种访问对象所有元素的方式，而无需暴露其底层数据结构（译注：列表、栈或树等）。

维基百科解释道

> 在面向对象编程中，迭代器模式是一种使用迭代器遍历容器并访问其所有元素的设计模式。迭代器模式能将算法与容器解耦；但在某些情况下，算法必然与特定容器绑定，无法完全解耦。

**编程示例**

实现前面收音机的例子。首先我们实现了 `RadioStation` 类。

<<< @/fragments/javascript/iterator.js#RadioStation

接着实现了我们的迭代器

<<< @/fragments/javascript/iterator.js#StationList

可以像这样使用它

<<< @/fragments/javascript/iterator.js#useStationList

### 👽 中介者模式 / Mediator

现实生活中的例子

> 一个典型的例子是手机通话：您的对话通过网络运营商中转，而非直接送达对方。在这个例子中，网络运营商就是中介者。

简单来说

> 中介者模式在两个对象（`colleagues` 同事类）之间引入一个第三方对象（`mediator` 中介者），继而控制这两个对象之间的交互。中介者模式有助于降低类之间通信的耦合度，因为现在它们不再需要关注彼此的实现。

维基百科解释道

> 在软件工程领域，中介者模式定义了一个对象，该对象封装了一组对象之间交互的方式。中介者模式被认为是一种行为型设计模式，因为它可以改变程序运行时的行为。

**编程示例**

下面是聊天室（中介者）的最简单示例，其中有若干互相发送消息的用户（同事类）

首先我们实现了中介者即聊天室

<<< @/fragments/javascript/mediator.js#ChatRoom

接着我们实现了同事类即用户

<<< @/fragments/javascript/mediator.js#User

可以像这样使用它

<<< @/fragments/javascript/mediator.js#useChatRoom

### 💾 备忘录模式 / Memento

现实生活中的例子

> 以计算器（`originator` 原发器）为例，每当您执行计算操作时，最后一次计算的结果将被保存到内存（`memento` 备忘录）中，这样您就可以随时按下某个操作按钮（`caretaker` 负责人）来查看它们。可能的话，还可以恢复某一次的计算结果。

简单来说

> 备忘录模式捕获并存储对象的当前状态，以便之后能轻松恢复。

维基百科解释道

> 备忘录模式是一种使对象能恢复到先前状态（通过回滚撤销）的软件设计模式。

通常在您需要提供某种撤销功能时十分有用。

**编程示例**

以文本编辑器为例，它不时地保存当前的状态，以便您在想要时恢复

首先我们实现了备忘录对象，它能够保存编辑器的状态

<<< @/fragments/javascript/memento.js#EditorMemento

接着我们实现了编辑器对象即原发器，它将会使用到备忘录对象

<<< @/fragments/javascript/memento.js#Editor

可以像这样使用它

<<< @/fragments/javascript/memento.js#useEditor

### 😎 观察者模式 / Observer

译注：也称为**发布-订阅模式**

现实生活中的例子

> 求职者就是很好的例子，他们常常会订阅一些招聘网站。当出现合适的工作机会时，这些网站便会通知他们。

简单来说

> 观察者模式定义了对象之间的依赖关系，每当一个对象改变它的状态时，它的所有依赖对象将会得到通知。

维基百科解释道

> 观察者模式是一种软件设计模式，一个目标对象管理其所有观察者对象，并在状态变化时自动通知它们——通常通过调用观察者的某个方法来实现。

**编程示例**

实现前面关于求职者的例子。首先，我们实现了求职者类，能在新的招聘信息发布时得到通知

<<< @/fragments/javascript/observer.js#JobSeeker

接着，我们实现了招聘公告栏，供求职者订阅

<<< @/fragments/javascript/observer.js#JobBoard

可以像这样使用它

<<< @/fragments/javascript/observer.js#useJobBoard

### 🏃 访问者模式 / Visitor

现实生活中的例子

> 以去迪拜旅游为例。人们只需要签证即可进入迪拜。到达后，他们可以自行前往迪拜的任何地方，而无需请求许可或做一些琐碎杂事；只要他们知道地点就可以参观。访问者模式可以帮助您做到这一点，添加允许访问的地方，访客就可以随意访问而无需处理任何琐事。

简单来说

> 访问者模式允许您在不修改对象的前提下为其添加额外操作。

维基百科解释道

> 在面向对象编程和软件工程领域，访问者设计模式是一种将算法从其所操作的对象结构中分离出来的方式。这种分离带来的实际效果是，无需修改已有对象结构即可添加新操作。它是遵循开闭原则（Open–Closed Principle）的一种实现方式。

**编程示例**

以动物园模拟为例：园中有多种动物，它们各自发出不同的叫声

首先我们实现了动物类

<<< @/fragments/javascript/visitor.js#Animal

接着让我们实现访问者

<<< @/fragments/javascript/visitor.js#speak

可以像这样使用它

<<< @/fragments/javascript/visitor.js#AnimalSpeak

我们本可以通过继承层级让动物发出叫声，但后续每添加新行为都得修改动物类本身。而现在无需如此。例如要添加跳跃行为，只需创建一个新的访问者即可：

<<< @/fragments/javascript/visitor.js#jump

使用示例如下

<<< @/fragments/javascript/visitor.js#AnimalJump

### 💡 策略模式 / Strategy

现实生活中的例子

> 以排序算法为例，我们实现了冒泡排序，但随着数据量级的增长，冒泡排序变得非常慢。为了解决这个问题，我们又实现了快速排序。但是，尽管快速排序在处理较大数据集时表现得很好，在处理较小数据集时它的表现却不尽人意。为此，我们制定了一种策略，在处理较小数据集时，采用冒泡排序；而需要处理较大数据集时，采用快速排序。

简单来说

> 策略模式允许您根据实际情况切换使用的算法或策略。

维基百科解释道

> 在计算机编程中，策略模式（Strategy pattern，也被称为 Policy pattern）是一种允许在运行时选择算法行为的行为型设计模式。

**编程示例**

基于 JavaScript 的[头等函数](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)特性，我们可以轻松实现这两种策略

<<< @/fragments/javascript/strategy.js#Sort

接着我们实现了客户端，它将决定使用何种策略

<<< @/fragments/javascript/strategy.js#sorter

可以像这样使用它

<<< @/fragments/javascript/strategy.js#useSorter

### 💢 状态模式 / State

现实生活中的例子

> 想象您正在使用某种绘画软件，您选择了一支画笔来作图。画笔会根据所选颜色改变行为：选红色就画红色，选蓝色就画蓝色。

简单来说

> 状态模式允许您在状态变化时改变类的行为。

维基百科解释道

> 状态模式是一种以面向对象的形式实现状态机的行为型设计模式。在状态模式中，将每个独立状态实现为状态模式接口的派生类，并通过调用超类定义的方法来实现状态转换。
> 状态模式可以看作一种能通过接口方法切换当前策略的策略模式。

**编程示例**

以文本编辑器为例，它允许您改变输入文本的状态：如果您选择了加粗则输入加粗的文本，如果选择了斜体则输入斜体的文本等

首先我们编写了改变输入文本状态的方法

<<< @/fragments/javascript/state.js#inputCase

接着我们实现了文本编辑器类

<<< @/fragments/javascript/state.js#TextEditor

可以像这样使用，它将调用对应状态的方法

<<< @/fragments/javascript/state.js#useTextEditor

### 📒 模板方法模式 / Template Method

现实生活中的例子

> 假设我们要盖一栓房子。建造的步骤可能像这样
>
> - 打地基
> - 筑墙壁
> - 盖屋顶
> - 加楼层
>
> 这些步骤的顺序不可更改——墙没砖好就无法盖屋顶。但每个步骤的实现细节可以自由调整，比如墙壁可以用木头、聚酯纤维或石头来砖。

简单来说

> 模板方法模式定义了某一算法的执行框架，但将各步骤的具体实现延迟到子类。

维基百科解释道

> 在软件工程领域，模板方法模式是一种行为型设计模式。模板方法是（通常为抽象的）超类中的方法，它通过一系列高层步骤定义了操作的骨架。这些步骤由同一类中的辅助方法实现。

**编程示例**

假设我们在开发一个构建工具，它能帮助我们进行测试、代码检查、构建、生成报告（如代码覆盖率和检查结果等），最后将应用部署到测试服务器

首先编写基类，定义构建算法的框架

<<< @/fragments/javascript/templateMethod.js#Builder

现在编写其具体实现

<<< @/fragments/javascript/templateMethod.js#extendBuilder

可以像这样使用它

<<< @/fragments/javascript/templateMethod.js#useExtendedBuilder

## 🚦 尾声

到这里教程的正文内容就结束了。我会持续改进这篇教程，如果以后想回来查看最新内容，不妨关注或收藏本仓库。此外，我还计划撰写同样风格的软件架构教程，敬请期待。

## 👬 参与贡献

- 反馈问题
- 拉取请求，改进文档
- 分享此文档
- 如有任何反馈，请联系 [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/kamrify.svg?style=social&label=Follow%20%40kamrify)](https://x.com/kamrify)

## 🔑 项目许可

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
