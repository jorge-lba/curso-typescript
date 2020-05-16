"use strict";
const employeeEng = {
    supervisoryNames: ['Maria', 'José'],
    maxHours: 10,
    hitPoint: function (hours) {
        if (hours <= this.maxHours) {
            return 'normal point';
        }
        else {
            return 'out of hours';
        }
    }
};
const employeeFin = {
    supervisoryNames: ['Marcos', 'Aline'],
    maxHours: 8,
    hitPoint: function (hours) {
        if (hours <= this.maxHours) {
            return 'normal point';
        }
        else {
            return 'out of hours';
        }
    }
};
console.log(employeeFin.hitPoint(10));
console.log(employeeEng.hitPoint(10));
module.exports = {};
