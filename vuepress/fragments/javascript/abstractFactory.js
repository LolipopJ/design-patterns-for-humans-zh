// #region Door
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
// #endregion Door

// #region DoorFittingExpert
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
// #endregion DoorFittingExpert

// #region DoorFactory
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
// #endregion DoorFactory

// #region makeDoor
woodenFactory = new WoodenDoorFactory();

door = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();

door.getDescription(); // 输出：我是一个木门
expert.getDescription(); // 输出：我只能安装木门

// 铁门工厂和上面一样
ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription(); // 输出：我是一个铁门
expert.getDescription(); // 输出：我只能安装铁门
// #endregion makeDoor
