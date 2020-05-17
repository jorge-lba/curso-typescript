class Calc {
    static PI:number = 3.1416

    static circumferenceArea(radius:number):number{
        return this.PI * radius * radius
    }
}

console.log(Calc.circumferenceArea(10))