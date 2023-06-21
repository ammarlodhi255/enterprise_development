const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNo = 0;
    }

    order(size, toppings) {
        this.orderNo += 1;
        this.emit("order pizza", size, toppings);
    }

    getOrderNumber() {
        return this.orderNo;
    }
}

module.exports = PizzaShop;