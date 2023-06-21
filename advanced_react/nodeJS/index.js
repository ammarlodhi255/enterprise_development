// const math_module = require("./math");
// console.log(math_module.add(1, 2), math_module.subtract(3, 2))

const PizzaShop = require("./PizzaShop");
const pizzaShop = new PizzaShop();

pizzaShop.on("order pizza", (size, toppings) => {
    console.log(`Ordering ${size} pizza with ${toppings} toppings`);
});

pizzaShop.order("large", "mushrooms");

console.log(pizzaShop.getOrderNumber())
