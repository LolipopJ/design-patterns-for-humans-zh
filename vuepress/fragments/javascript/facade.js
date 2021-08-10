// #region Computer
class Computer {
    getElectricShock() {
        console.log('Ouch!');
    }

    makeSound() {
        console.log('Beep beep!');
    }

    showLoadingScreen() {
        console.log('加载中..');
    }

    bam() {
        console.log('准备就绪！');
    }

    closeEverything() {
        console.log('Bup bup bup buzzzz!');
    }

    sooth() {
        console.log('Zzzzz');
    }

    pullCurrent() {
        console.log('Haaah!');
    }
}
// #endregion Computer

// #region ComputerFacade
class ComputerFacade {
    constructor(computer) {
        this.computer = computer;
    }

    turnOn() {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    turnOff() {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}
// #endregion ComputerFacade

// #region useComputerFacade
const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! 加载中.. 准备就绪！
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz
// #endregion useComputerFacade
