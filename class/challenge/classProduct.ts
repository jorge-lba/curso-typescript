class Product {
    constructor(
        public name:string,
        public price:number,
        public discount:number = 0
    ){}
}

const [productPen, productNote]:{}[] = [
    new Product('Caneta', 1),
    new Product('Caderno', 10, 2)
]

console.log(productPen)
console.log(productNote)