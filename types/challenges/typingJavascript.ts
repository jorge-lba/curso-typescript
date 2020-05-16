type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => number
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria:ContaBancaria = {
    saldo:3456,
    depositar: function(valor:number):number{
        return this.saldo+= valor
    }
}

 
let correntista:Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
console.log(correntista.contaBancaria.depositar(3000))
console.log(correntista)

/**
     * let contaBancaria = {
        saldo: 3456,
        depositar(valor) {
            this.saldo += valor
        }
    }
    
    let correntista = {
        nome: 'Ana Silva',
        contaBancaria: contaBancaria,
        contatos: ['34567890', '98765432']
    }
    
    correntista.contaBancaria.depositar(3000)
    console.log(correntista)
 */