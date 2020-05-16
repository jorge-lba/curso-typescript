export{}

const name:string = "Jorge"
const age:number = 27
const haveHobbies:boolean = true
const hobbies:string[] = ["Estudar", "Desenhar"]
const dates:object[] =[ {
    date: '20/05/2020',
    description: 'Aniversario'
} ]
const address: [string, number] = ['Rua primeiro de abril', 200] // Tuplas - Tipo para definir formato de um array

enum Colors{
    green = 'verde',
    blue = 'azul',
    red = 'vermelho'
}

enum Position {
    Zero,
    Frist,
    Second
}

const color: Colors = Colors.green 

let car:any = 'BMW'
car = {
    model: 'H2',
}

console.log( `Nome: ${name}, Idade: ${age}, Possui Hobbies: ${haveHobbies}, Seu hobbies são ${hobbies}` )

console.log( dates )
console.log( address )

console.log( color, Position.Frist )
console.log( Colors )

console.log( car )