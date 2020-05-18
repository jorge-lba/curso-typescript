interface Person {
    name:string,
    age?:number,
    [prop:string]:any
    greet(lastName:string):void
}

function greetWithHello(person:Person){
    console.log( `Olá, ${person.name}` )
}

function changeName(person:Person){
    person.name = 'Luiz'
}

const person:Person  = {
    name: 'Jorge',
    age: 27,
    greet(lastName:string):void{
        console.log('Olá ' + lastName)
    }
}

changeName(person)
greetWithHello(person)
person.greet('Jorge Alegretti')
// greetWithHello({name: 'Carlos', age:35, test:true})

class Client implements Person {
    name:string = ''
    lastPurchase:Date = new Date

    greet(lastName:string):void{
        console.log( `Olá, meu nome é ${this.name} ${lastName}` )
    }
}

const client:Client = new Client
client.name = 'Jorge'
client.greet('Alegretti')
console.log(client.lastPurchase)

interface CalculationFunction {
    (a:number, b:number):number
}

let power:CalculationFunction

power = (base:number, exp:number ):number => base ** exp

console.log( power(8,2) )
console.log(
    Array(2).fill(8).reduce((t, a) => t * a)
)

// interface Object{
//     log():void
// }

// Object.prototype.log = function(){
//     console.log(this.toString())
// }

// const x = 2
// const y = 3
// const z = 4

// console.log(x)
// console.log(y)
// console.log(z)

// x.log()

export = {}
