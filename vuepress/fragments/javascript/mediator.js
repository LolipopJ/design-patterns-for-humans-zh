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
const jane = new User("Jane Doe", mediator);

john.send("你好！");
jane.send("你好哇！");

// 输出如下
// Feb 14, 10:58 [John]: 你好！
// Feb 14, 10:58 [Jane]: 你好哇！
// #endregion useChatRoom
