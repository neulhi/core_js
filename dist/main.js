"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
const sum = (a, b) => a + b;
function greet(person, date) {
    console.log(`hello ${person} today is ${date}!`);
}
greet('tiger', 2);
