export={}

type Employee =  {
    supervisoryNames: string[],
    maxHours: number,
    hitPoint: ( hours: number ) => string  
}

const employeeEng: Employee = {
    supervisoryNames: ['Maria', 'José'],
    maxHours: 10,
    hitPoint: function (hours:number):string{
        if( hours <= this.maxHours ){
            return 'normal point'
        }else{
            return 'out of hours'
        }
    }
    
}

const employeeFin:Employee = {
    supervisoryNames: ['Marcos', 'Aline'],
    maxHours: 8,
    hitPoint: function (hours:number):string{
        if( hours <= this.maxHours ){
            return 'normal point'
        }else{
            return 'out of hours'
        }
    }
}

console.log(employeeFin.hitPoint(10))
console.log(employeeEng.hitPoint(10))
