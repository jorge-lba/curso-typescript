export={}

let person:{
    name: string,
    age: number
}

person = {
    name: 'Jorge',
    age: 27
}

console.log( person )

let employee: {
    supervisoryNames: string[],
    hitPoint: ( hours: number ) => string  
}

function testPoint( hours:number ):string{
    if( hours <= 8 ){
        return 'normal point'
    }else{
        return 'out of hours'
    }
}

employee = {
    supervisoryNames:["Jorge", "Karen"],
    hitPoint: testPoint
}

console.log( employee.supervisoryNames )
console.log( employee.hitPoint(8) )
console.log( employee.hitPoint(12) )