"use strict";
// Exercicio 1
const dobro = (valor) => valor * 2;
// var dobro = function(valor) {
//     return valor * 2
// }
console.log(dobro(10));
// Exercicio 2
const dizerOla = (name = 'Pessoa') => console.log(`Olá, ${name}`);
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }
dizerOla();
dizerOla("Anna");
// Exercicio 3
const num = [-3, 33, 38, 5];
console.log(Math.min(...num));
// var nums = [-3, 33, 38, 5]
// console.log('???')
// Exercicio 4
const array = [55, 20, ...num];
console.log(array);
// var array = [55, 20]
// console.log(array)
// // Exercicio 5
const [nota1, nota2, nota3] = [8.5, 6.3, 9.4];
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
console.log(nota1, nota2, nota3);
// Exercicio 6
const { primeiroNome, experiencia } = { primeiroNome: "Will", experiencia: 12 };
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia);
module.exports = {};
// Promise
// import fetch  from 'node-fetch'
// fetch('https://swapi.co/api/people/1')
//     .then(response => response.json)
//     .then((personagem:any) => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(film => console.log(film))
//** API fora do AR */
