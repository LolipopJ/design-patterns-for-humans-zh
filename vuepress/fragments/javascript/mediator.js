// #region ChatRoom
// Mediator
class ChatRoom {
    showMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(time + "[" + sender + "]:" + message);
    }
}
// #endregion ChatRoom

// #region User
class User {
    constructor(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatMediator.showMessage(this, message);
    }
}
// #endregion User

// #region useChatRoom
const mediator = new ChatRoom();

const john = new User("John Doe", mediator);
const flank = new User("Flank Loi", mediator);

john.send("你好！");
flank.send("你好哇！");

// 输出如下
// Feb 14, 10:58 [John]: 你好！
// Feb 14, 10:58 [Flank]: 你好哇！
// #endregion useChatRoom
