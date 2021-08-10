// #region Animal
class Monkey {
    shout() {
        console.log('Ooh oo aa aa!');
    }

    accept(operation) {
        operation.visitMonkey(this);
    }
}

class Lion {
    roar() {
        console.log('Roaaar!');
    }

    accept(operation) {
        operation.visitLion(this);
    }
}

class Dolphin {
    speak() {
        console.log('Tuut tuttu tuutt!');
    }

    accept(operation) {
        operation.visitDolphin(this);
    }
}
// #endregion Animal

// #region speak
const speak = {
    visitMonkey(monkey) {
        monkey.shout();
    },
    visitLion(lion) {
        lion.roar();
    },
    visitDolphin(dolphin) {
        dolphin.speak();
    },
};
// #endregion speak

// #region AnimalSpeak
const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak); // Ooh oo aa aa!
lion.accept(speak); // Roaaar!
dolphin.accept(speak); // Tuut tutt tuutt!
// #endregion AnimalSpeak

// #region jump
const jump = {
    visitMonkey(monkey) {
        console.log('跳了 20 英尺高！跳到了树上去！');
    },
    visitLion(lion) {
        console.log('跳了 7 英尺高！回到了地上！');
    },
    visitDolphin(dolphin) {
        console.log('探出了水面一点随后消失了');
    },
};
// #endregion jump

// #region AnimalJump
monkey.accept(speak); // Ooh oo aa aa!
monkey.accept(jump); // 跳了 20 英尺高！跳到了树上去！

lion.accept(speak); // Roaaar!
lion.accept(jump); // 跳了 7 英尺高！回到了地上！

dolphin.accept(speak); // Tuut tutt tuutt!
dolphin.accept(jump); // 探出了水面一点随后消失了
// #endregion AnimalJump
