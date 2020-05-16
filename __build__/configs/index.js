"use strict";
let channel = 'Gaveta';
let subscribers = 610268;
channel = 'subscribers';
function salute(isMorning, hours) {
    let salutation;
    if (isMorning) {
        salutation = 'Bom dia';
        console.log(`Horário: ${hours}`);
    }
    else {
        salutation = 'Olá';
    }
    return salutation;
}
console.log(salute('Bom dia', 11));
console.log(channel);
