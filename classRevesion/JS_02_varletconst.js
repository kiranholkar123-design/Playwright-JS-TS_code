// var
// Hoisting
console.log(x);  // undefined
var x = 100;

//duplicate allowed redeclaration not allowed
var r = 30;
var r = 90;
console.log(r);

// reassign
var name = 'kiran'
name = 'Test';
console.log(name);

//==============================================================================================
// let keyword 
/**
 * introduced in ES6 - 2015
 */

// hointing - not allowed
console.log(y); //ReferenceError: Cannot access 'y' before initialization
let y = 30;

// redeclaration - duplicate not allowed
let hm = 'test';
//let hm = 'test123';
console.log(hm); // SyntaxError: Identifier 'hm' has already been declared

// reassign - it can be reassign
let gm = "pop";
gm = 'mop';
console.log(gm);

//block scop
if (true) {
    let insideBlock = 'KiranTest'
    console.log(`inside: ${insideBlock}`); //inside: KiranTest
}
console.log(`outside: ${insideBlock}`); //ReferenceError: insideBlock is not defined

//====================================
// const keyword =====================
//====================================

//hoisting - const can not be hoisted
console.log(num);
const num = 300;

//redecleare - it can not be redecleared
const t = 45;
//const t = 50;
console.log(t); //// SyntaxError: Identifier 't' has already been declared

//reassign - const can not be reassign
const v = 'Kiran';
v = "test";
console.log(v); // TypeError: Assignment to constant variable.