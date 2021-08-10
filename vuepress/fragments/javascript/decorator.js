// #region Coffee
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
        return '普通咖啡';
    }
}
// #endregion Coffee

// #region ExtraCoffee
class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription() {
        return this.coffee.getDescription() + '，加奶';
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
        return this.coffee.getDescription() + '，加鲜奶油';
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
        return this.coffee.getDescription() + '，加香草';
    }
}
// #endregion ExtraCoffee

// #region getCoffee
let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // 普通咖啡

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // 普通咖啡，加奶

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // 17
console.log(someCoffee.getDescription()); // 普通咖啡，加奶，加鲜奶油

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription()); // 普通咖啡，加奶，加鲜奶油，加香草
// #endregion getCoffee
