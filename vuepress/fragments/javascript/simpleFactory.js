// #region WoodenDoor
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
// #endregion WoodenDoor

// #region DoorFactory
const DoorFactory = {
    makeDoor: (width, height) => new WoodenDoor(width, height),
};
// #endregion DoorFactory

// #region makeDoor
// 制造一个 100x200 的门给我
const door = DoorFactory.makeDoor(100, 200);

console.log('Width:', door.getWidth());
console.log('Height:', door.getHeight());

// 制造一个 50x100 的门给我
const door = DoorFactory.makeDoor(50, 100);
// #endregion makeDoor
