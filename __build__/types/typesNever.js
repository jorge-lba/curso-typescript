"use strict";
//Never é um tipo onde uma função não pode ser comcluida, sendo um loop infinito ou um erro
function error(message) {
    throw new Error(message);
}
const product = {
    name: 'Caderno',
    price: -1,
    validateProduct() {
        if (!this.name || this.name.trim().length == 0) {
            error("O Produto precisa ter um nome");
        }
        if (this.price <= 0) {
            error("Preço invalido");
        }
    }
};
console.log(product.validateProduct());
module.exports = {};
