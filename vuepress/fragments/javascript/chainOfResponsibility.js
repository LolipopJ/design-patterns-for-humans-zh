// #region Account
class Account {
    setNext(account) {
        this.successor = account;
    }

    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`使用 ${this.name} 支付 ${amountToPay}！`);
        } else if (this.successor) {
            console.log(`无法使用 ${this.name} 支付。继续中...`);
            this.successor.pay(amountToPay);
        } else {
            console.log('没有账户额度足够');
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }
}

class Bank extends Account {
    constructor(balance) {
        super();
        this.name = '银行';
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = '贝宝';
        this.balance = balance;
    }
}

class Bitcoin extends Account {
    constructor(balance) {
        super();
        this.name = '比特币';
        this.balance = balance;
    }
}
// #endregion Account

// #region useAccount
// 让我们像下面这样构成责任链
//      银行.贝宝.比特币
//
// 银行优先支付
//      如果银行不足以支付，则使用贝宝
//      如果贝宝不足以支付，则使用比特币

const bank = new Bank(100); // 银行额度为 100
const paypal = new Paypal(200); // 贝宝额度为 200
const bitcoin = new Bitcoin(300); // 比特币额度为 300

bank.setNext(paypal);
paypal.setNext(bitcoin);

// 让我们尝试使用银行优先支付
bank.pay(259);

// 输出如下
// ==============
// 无法使用 银行 支付。继续中...
// 无法使用 贝宝 支付。继续中...
// 使用 比特币 支付 259！
// #endregion useAccount
