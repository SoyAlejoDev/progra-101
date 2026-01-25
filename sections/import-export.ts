import { dividir, multiplicar, restar, sumar } from "../helpers/math-helpers";

let number1: number = 10;
let number2: number = 20;

let total: number = sumar(number1, number2);
let total2: number = restar(number1, number2);
let total3: number = multiplicar(number1, number2);
let total4: number = dividir(number1, number2);
console.log(total);
console.log(total2);
console.log(total3);
console.log(total4);
