"use strict";
var person;
person = {
    name: 'Jorge',
    age: 27
};
console.log(person);
var employee;
function testPoint(hours) {
    if (hours <= 8) {
        return 'normal point';
    }
    else {
        return 'out of hours';
    }
}
employee = {
    supervisoryNames: ["Jorge", "Karen"],
    hitPoint: testPoint
};
console.log(employee.supervisoryNames);
console.log(employee.hitPoint(8));
console.log(employee.hitPoint(12));
module.exports = {};
