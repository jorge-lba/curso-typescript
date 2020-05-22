import moment from 'moment'

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

// Classe com Generics

abstract class BinaryOperation<T, R> {
    constructor(
        public operation1:T,
        public operation2:T
    ){}

    abstract run():R
}

class BinarySoma extends BinaryOperation<number, number>{
    run():number{
        return this.operation1 + this.operation2
    }
}

class Duration extends BinaryOperation<Date, number>{
    run():number{
        const date1 = moment(this.operation1)
        const date2 = moment(this.operation2)
        const duration = moment.duration(date1.diff(date2))

        return duration.asDays()
    }
}

class DifferenceBetweenDates extends BinaryOperation<string, string> {
    getTime(date:string):number{
        const [day, month, year] = date.split('-')
        return new Date(`${month}/${day}/${year}`).getTime()
    }

    run():string{
        const time1 = this.getTime(this.operation1)
        const time2 = this.getTime(this.operation2)
        const difference = Math.abs(time1-time2)
        const day = 1000 * 60 * 60 * 24

        return`${Math.ceil(difference / day)} dia(s)`

    }
}

console.log(new BinarySoma(3,2).run())
console.log(new Duration(new Date, new Date("2020-05-25") ).run())
console.log(new DifferenceBetweenDates('20-5-2020','25-5-2020').run())

// Desafio 01
class Row<T extends number | string> {
    private element:T[]
    constructor(
        ...element:T[]
    ){
        this.element = element
    }

    public entry(item:T){
        this.element.push(item)
    } 

    public leave():T | null{
        const [item] =  this.element.length > 0 
            ? this.element.splice(0,1) 
            : [null]
        return item
    }

    public print(){
        console.log(this.element)
    }

}

const listStrings = new Row<string>('Jorge', 'Karen', 'Damian')
listStrings.entry('Lucy')
listStrings.print()
console.log(listStrings.leave())
console.log(listStrings.leave())
console.log(listStrings.leave())
console.log(listStrings.leave())
console.log(listStrings.leave())

listStrings.print()

const listNumber = new Row<number>(20,66,98,12)
listNumber.entry(55)
listNumber.entry(97)
listNumber.print()
listNumber.leave()
listNumber.print()

//Desafio 02

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
 
class Mapa<T extends number,R>{
    private _mapa:{
        chave:T
        valor:R
    }[]

    constructor( ){
        this._mapa = []
    }

    public colocar(item:{chave:T, valor:R}){
        let ind:number = 0
        const [itemExiste] = this._mapa.filter((elemento, indice) =>{
            if(elemento.chave === item.chave){
                ind = indice
                return true
            }
            return false
        } )
        itemExiste ? this._mapa[ind] = item : this._mapa.push(item) 
    }

    public obter(item:number): object | null{
        const [itemExiste] = this._mapa.filter((elemento) =>elemento.chave === item)
        return itemExiste ? itemExiste : null
    }

    public imprimir():void{
        console.log(this._mapa)
    }

    public limpar():void{
        this._mapa = []
    }
}

const mapa = new Mapa<number, string>( )
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(3))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()