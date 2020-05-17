class Person {
    private _age:number = 0

    get age():number{
        return this._age
    }

    set age(value:number){
        if(value >= 0 && value <= 120) this._age = value
    }
}

const person:Person = new Person() 
person.age = 18
console.log(person.age)