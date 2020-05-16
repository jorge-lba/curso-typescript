let channel:string = 'Gaveta'
let subscribers:number = 610268

channel = 'subscribers'

function salute(isMorning:string, hours:number): string{

    let salutation:string

    if(isMorning){
        salutation = 'Bom dia'
        console.log(`Horário: ${hours}`)
    }else{
        salutation = 'Olá'
    }

    return salutation
}

console.log( salute('Bom dia', 11) )
console.log(channel)