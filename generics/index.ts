export = {}
// Tipo generico

function echo<T>(item:T):T{
    return item
}

console.log(echo('Jorge').length)
// console.log(echo(20).length)
console.log(echo<number>(20))
console.log(echo({name:'Jorge', age:27}))

// Generics disponiveis na API

const evaluation:number[] = [2,2.8,15]
// evaluation.push('2')
evaluation.push(5)

console.log(evaluation)

function print<T>(items:T[]): void{
    items.forEach(item => console.log(item))
}

const itemString:string[] = ['Jorge', 'Karen']
const itemNumber:number[] = [2,5,3]

type Person = {name:string, age:number}

print([...itemNumber, ...itemString])
print<string>(itemString)
print<number>(itemNumber)
print<Person>([
    {name:'Jorge', age:20}
])

// Tipo Generico

const callEcho:<T>(data:T) => T = echo
console.log(callEcho<string>('Jorge'))