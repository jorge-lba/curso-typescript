export = {}

function fullName(fristName:string, lastName:string):string {
    return `${fristName} ${lastName}`
}

function hello():void{
    console.log('Oi')
}

hello()
console.log( fullName('Jorge', 'Alegretti') )

function Calc(fristNumber: number, secondNumber: number): number{
    return fristNumber*secondNumber
}

let calc: (numberA:number, numberB:number) => number

calc = Calc

console.log( calc(2,2) )