// #region Bulb
// Receiver
class Bulb {
    turnOn() {
        console.log("点亮了灯泡！");
    }

    turnOff() {
        console.log("黑暗！");
    }
}
// #endregion Bulb

// #region Command
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
        this.bulb = bulb;
    }

    execute() {
        this.bulb.turnOn();
    }

    undo() {
        this.bulb.turnOff();
    }

    redo() {
        this.execute();
    }
}

class TurnOffCommand {
    constructor(bulb) {
        this.bulb = bulb;
    }

    execute() {
        this.bulb.turnOff();
    }

    undo() {
        this.bulb.turnOn();
    }

    redo() {
        this.execute();
    }
}
// #endregion Command

// #region RemoteControl
// Invoker
class RemoteControl {
    submit(command) {
        command.execute();
    }
}
// #endregion RemoteControl

// #region useRemoteControl
const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // 点亮了灯泡！
remote.submit(turnOff); // 黑暗！
// #endregion useRemoteControl
