import { Hero } from "../interfaces/hero";
import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Villian } from "../interfaces/villian";
// printObject(123);
// printObject(new Date());
// printObject("hola mundo");

// console.log(genericFunction(3.34343).toFixed(2));

// console.log(genericFunctionArrow(new Date().getDate()));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston ",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);
console.log(genericFunctionArrow<Hero>(deadpool).realName);
