// #region Interviewer
/**
 * Interviewer interface
 *
 * askQuestions()
 */

class Developer {
    askQuestions() {
        console.log("询问设计模式问题！");
    }
}

class CommunityExecutive {
    askQuestions() {
        console.log("询问社区建设问题！");
    }
}
// #endregion Interviewer

// #region HiringManager
class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}
// #endregion HiringManager

// #region extendHiringManager
class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive();
    }
}
// #endregion extendHiringManager

// #region takeInterview
const devManager = new DevelopmentManager();
devManager.takeInterview(); // 输出：询问设计模式问题！

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // 输出：询问社区建设问题！
// #endregion takeInterview
