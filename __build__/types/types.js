"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Jorge";
const age = 27;
const haveHobbies = true;
const hobbies = ["Estudar", "Desenhar"];
const dates = [{
        date: '20/05/2020',
        description: 'Aniversario'
    }];
const address = ['Rua primeiro de abril', 200]; // Tuplas - Tipo para definir formato de um array
var Colors;
(function (Colors) {
    Colors["green"] = "verde";
    Colors["blue"] = "azul";
    Colors["red"] = "vermelho";
})(Colors || (Colors = {}));
var Position;
(function (Position) {
    Position[Position["Zero"] = 0] = "Zero";
    Position[Position["Frist"] = 1] = "Frist";
    Position[Position["Second"] = 2] = "Second";
})(Position || (Position = {}));
const color = Colors.green;
let car = 'BMW';
car = {
    model: 'H2',
};
console.log(`Nome: ${name}, Idade: ${age}, Possui Hobbies: ${haveHobbies}, Seu hobbies são ${hobbies}`);
console.log(dates);
console.log(address);
console.log(color, Position.Frist);
console.log(Colors);
console.log(car);
