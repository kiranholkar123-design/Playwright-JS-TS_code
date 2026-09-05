// Template literals - string using back tick
/**
 * tamplet literals are string literals enclosed in back tick
 * it support the string interpolation/ embedded expressions
 * it support multi line string formatting with out any special charecters
 */

let name = 'Kiran Holkar';
console.log(`Hello, ${name}`); // embedded variables


let x = 20;
let y = 49;
console.log(`addition of x anf y is ${x + y}`); // we can use expressions as well, also can call function as well

// multiline support
let msg =
    `Ambrane AAA Type C Rechargeable Batteries, 
Pack of 2, 740mAh Lithium Ion Battery, 
Charge with Any Type C Cable & Adapter,`

console.log(`Product info: 
${msg}`);