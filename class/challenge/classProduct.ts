class Product {
    constructor(
        public name:string,
        public price:number,
        public discount:number = 0
    ){}

    public priceDiscount():number{
        return this.price*(1-this.discount)
    }

    public abstract():string {
        return `${this.name} custa R$ ${this.priceDiscount().toFixed(2)} ( ${this.discount*100}% off)`
    }
}

const [productPen, productNote] = [
    new Product('Caneta', 1),
    new Product('Caderno', 10, 0.1)
]

const productTest = new Product("Test", 25.60, 0.9)

console.log(productPen.abstract())
console.log(productNote.abstract())
console.log(productTest.priceDiscount().toFixed(2))