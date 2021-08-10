// #region TeaMaker
// 所有将被缓存的数据即是享元
// 这里茶的类型将成为享元
class KarakTea {}

// 充当工厂，保存沏好的茶
class TeaMaker {
    constructor() {
        this.availableTea = {};
    }

    make(preference) {
        this.availableTea[preference] =
            this.availableTea[preference] || new KarakTea();
        return this.availableTea[preference];
    }
}
// #endregion TeaMaker

// #region TeaShop
class TeaShop {
    constructor(teaMaker) {
        this.teaMaker = teaMaker;
        this.orders = [];
    }

    takeOrder(teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType);
    }

    serve() {
        this.orders.forEach((order, index) => {
            console.log('上茶给桌号 #' + index);
        });
    }
}
// #endregion TeaShop

// #region serveTea
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('少糖', 1);
shop.takeOrder('多奶', 2);
shop.takeOrder('无糖', 5);

shop.serve();
// 上茶给桌号 #1
// 上茶给桌号 #2
// 上茶给桌号 #5
// #endregion serveTea
