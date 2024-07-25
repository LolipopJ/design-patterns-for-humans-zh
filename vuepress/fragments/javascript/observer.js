// #region JobSeeker
const JobPost = (title) => ({
    title: title,
});

class JobSeeker {
    constructor(name) {
        this._name = name;
    }

    notify(jobPost) {
        console.log(this._name, ' 接收了一个新职位的通知：', jobPost.title);
    }
}
// #endregion JobSeeker

// #region JobBoard
class JobBoard {
    constructor() {
        this._subscribers = [];
    }

    subscribe(jobSeeker) {
        this._subscribers.push(jobSeeker);
    }

    addJob(jobPosting) {
        this._subscribers.forEach((subscriber) => {
            subscriber.notify(jobPosting);
        });
    }
}
// #endregion JobBoard

// #region useJobBoard
// 创建订阅者
const johnDoe = new JobSeeker("John Doe");
const flankDoe = new JobSeeker("Flank Doe");
const kaneDoe = new JobSeeker("Kane Doe");

// 创建发布者并绑定订阅者
const jobBoard = new JobBoard();
jobBoard.subscribe(johnDoe);
jobBoard.subscribe(flankDoe);

// 添加一份新的职位，看看订阅者是否能收到通知
jobBoard.addJob(JobPost("软件工程师"));

// 输出如下
// John Doe 接收了一条新的招聘信息：软件工程师
// Flank Doe 接收了一条新的招聘信息：软件工程师
// #endregion useJobBoard
