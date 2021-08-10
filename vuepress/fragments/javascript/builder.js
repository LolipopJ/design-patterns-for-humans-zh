// #region TelescopicConstructor
class Burger {
    constructor(
        size,
        cheese = true,
        pepperoni = true,
        tomato = false,
        lettuce = true
    ) {
        // ...
    }
}
// #endregion TelescopicConstructor

// #region Burger
class Burger {
    constructor(builder) {
        this.size = builder.size;
        this.cheeze = builder.cheeze || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
    }
}
// #endregion Burger

// #region BurgerBuilder
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
// #endregion BurgerBuilder

// #region newBurger
const burger = new BurgerBuilder(14)
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build();
// #endregion newBurger

// #region goodBurger
const burger = new Burger({
    size: 14,
    pepperoni: true,
    cheeze: false,
    lettuce: true,
    tomato: true,
});
// #endregion goodBurger

// #region badBurger
const burger = new Burger(14, true, false, true, true);
// #endregion badBurger
