// // Exercício 1 - Classe

class Moto{
    constructor(
        public readonly name:string,
    ){}
        
    private _velocidade:number = 0
    
    public buzinar():void{
        console.log( 'Toooooooot!' )
    }

    public acelerar(delta:number):number{
        return this._velocidade = this._velocidade + delta
    }

    get velocidade():number{ return this._velocidade}
}

// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
 
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
 
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
 
const moto:Moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// // Exercício 2 - Herança

abstract class Objeto2D {
    constructor(
        public base:number = 0,
        public altura:number = 0
    ){}

    abstract area():number
}

class Retangulo extends Objeto2D{
    public area():number{
        return this.base * this.altura
    }
}

const retangulo:Retangulo = new Retangulo(5,25)

// var objeto2D = {
//     base: 0,
//     altura: 0
// }
 
// var retangulo = Object.create(objeto2D)
retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
console.log(retangulo.area())
 
// // Exercício 3 - Getters & Setters

class Estagiario{
    private _primeiroNome:string = ''

    constructor(primeiroNome:string){
        this._primeiroNome = primeiroNome
    }

    get primeiroNome():string{ return this._primeiroNome }
    set primeiroNome(nome:string){
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
    }


}

const estagiario:Estagiario = new Estagiario('Jorge') 

// var estagiario = {
//     _primeiroNome: ''
// }
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)