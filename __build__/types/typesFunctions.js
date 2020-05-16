"use strict";
function fullName(fristName, lastName) {
    return `${fristName} ${lastName}`;
}
function hello() {
    console.log('Oi');
}
hello();
console.log(fullName('Jorge', 'Alegretti'));
function Calc(fristNumber, secondNumber) {
    return fristNumber * secondNumber;
}
let calc;
calc = Calc;
console.log(calc(2, 2));
module.exports = {};
