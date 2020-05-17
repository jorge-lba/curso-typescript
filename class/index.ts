class IDate {
    day:number
    month:number
    year:number

    constructor(day:number = 1, month:number = 1, year:number = 1900){
        this.day = day
        this.month = month
        this.year = year
    }
}

const anniversary = new IDate(23, 3, 2012)
const marriage = new IDate

console.log(anniversary)
console.log(marriage)

class IIDate {

    constructor(
        public day:number = 1, 
        public month:number = 1, 
        public year:number = 1900
    ){ }
}

const ianniversary = new IIDate(23, 3, 2012)
const imarriage = new IIDate

console.log(ianniversary)
console.log(imarriage)