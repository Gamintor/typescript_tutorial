import { calculateTotalAmount } from './lib/calculate-total-amount';
import { Order } from './lib/order';
import { ShoppingCart } from './lib/shopping-cart';

const cart = new ShoppingCart();
console.log("Cart's total is", calculateTotalAmount(cart));
const order = new Order();
console.log("Order's total is", calculateTotalAmount(order));
