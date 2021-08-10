// #region Door
/**
 * Door interface :
 *
 * open()
 * close()
 */

class LabDoor {
    open() {
        console.log('打开实验室门');
    }

    close() {
        console.log('关闭实验室门');
    }
}
// #endregion Door

// #region Security
class Security {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('奥不！密码错误。');
        }
    }

    authenticate(password) {
        return password === 'ecr@t';
    }

    close() {
        this.door.close();
    }
}
// #endregion Security

// #region openCloseSecurityDoor
const door = new Security(new LabDoor());
door.open('invalid'); // 奥不！密码错误。

door.open('ecr@t'); // 打开实验室门
door.close(); // 关闭实验室门
// #endregion openCloseSecurityDoor
