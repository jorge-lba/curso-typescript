"use strict";
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    priceDiscount() {
        return this.price * (1 - this.discount);
    }
    abstract() {
        return `${this.name} custa R$ ${this.priceDiscount().toFixed(2)} ( ${this.discount * 100}% off)`;
    }
}
const [productPen, productNote] = [
    new Product('Caneta', 1),
    new Product('Caderno', 10, 0.1)
];
const productTest = new Product("Test", 25.60, 0.9);
console.log(productPen.abstract());
console.log(productNote.abstract());
console.log(productTest.priceDiscount().toFixed(2));
