"use strict";
class IDate {
    constructor(day = 1, month = 1, year = 1900) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const anniversary = new IDate(23, 3, 2012);
const marriage = new IDate;
console.log(anniversary);
console.log(marriage);
class IIDate {
    constructor(day = 1, month = 1, year = 1900) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const ianniversary = new IIDate(23, 3, 2012);
const imarriage = new IIDate;
console.log(ianniversary);
console.log(imarriage);
