export={}

abstract class Calc{
    protected _result:number = 0

    abstract run(...numbers:number[]):void

    get result():number{
        return this._result
    }
}

class Soma extends Calc {
    run(...numbers:number[]):void{
        this._result = numbers.reduce((numCurrent, numNext) => numCurrent + numNext )
    }
}

class Multiply extends Calc {
    run(...numbers:number[]):void{
        this._result = numbers.reduce((numCurrent, numNext) => numCurrent * numNext )
    }
}

const soma:Calc = new Soma()
const multiply:Calc = new Multiply()

multiply.run(2,3,8,7)
console.log(multiply.result)

soma.run(12,25,36,98)
console.log(soma.result)