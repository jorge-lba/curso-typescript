interface Person {
    name:string,
    age:number
}

function greetWithHello(person:Person){
    console.log( `Olá, ${person.name}` )
}

function changeName(person:Person){
    person.name = 'Luiz'
}

const person = {
    name: 'Jorge',
    age: 27
}

changeName(person)
greetWithHello(person)

export = {}
