// #region Sheep
class Sheep {
    constructor(name, category = '山羊') {
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
// #endregion Sheep

// #region SheepPrototype
class SheepPrototype {
    constructor(proto) {
        this.proto = proto;
    }
    clone() {
        return new Sheep(this.proto.name, this.proto.category);
    }
}
// #endregion SheepPrototype

// #region cloneSheep
const originalSheep = new Sheep('Jolly');
originalSheep.getName(); // Jolly
originalSheep.getCategory(); // 山羊
// 克隆并根据需要修改
const prototype = new SheepPrototype(originalSheep);
const clonedSheep = prototype.clone();
clonedSheep.setName('Dolly');
clonedSheep.getName(); // Dolly
clonedSheep.getCategory(); // 山羊
// #endregion cloneSheep
