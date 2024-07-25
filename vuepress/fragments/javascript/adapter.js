// #region Lion
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
// #endregion Lion

// #region Hunter
class Hunter {
    hunt(lion) {
        // ... 前面的一些代码
        lion.roar();
        // ... 后面的一些代码
    }
}
// #endregion Hunter

// #region WildDog
// 需要追加到游戏中的野狗
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
// #endregion WildDog

// #region newWildDog
wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(wildDog);

hunter = new Hunter();
hunter.hunt(wildDogAdapter);
// #endregion newWildDog
