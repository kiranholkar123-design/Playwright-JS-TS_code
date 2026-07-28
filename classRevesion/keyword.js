//----------------------------------
//-------- var keyword -------------
//----------------------------------


// duplicate/redeclared- allowed - no error
var xx = 10;
var xx = 20;
console.log(xx);

//re-assigned - allowed
var yy = 100;
yy = 45;
console.log(yy);

//hoisting  - allowed - output: undefined
console.log(j); // undefined - will not get any error at runtime
var j = 'automation'

// block - scoped - outside the block allowed
if (true) {
    var tt = 40;
    console.log('inside the block: ' + tt);
}
console.log('outside the block: ' + tt); // no error


//----------------------------------
//-------- let keyword -------------
//----------------------------------


//duplicate/redeclaration - not allowed - syntax error - no error at compile time
let h = 200;
let h = 300;
console.log(h); //SyntaxError: Identifier 'h' has already been declared

// can be reassigned: we can declare fisrt and then can be initialized
let title_n;
title_n = 'automation testing'
console.log(title_n); // SyntaxError: Missing initializer in const declaration


// re-assigned - allowed
let r = 300;
r = 'kiran';
console.log(r);

// hoisting - not allowed - error at runtime - no error at parser
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = 'automation'

// block - scoped - outside the block not allowed
if (true) {
    let t = 40;
    console.log('inside the block: ' + t);
}
console.log('outside the block: ' + t); // ReferenceError: t is not defined

//----------------------------------
//-------- const keyword -----------
//----------------------------------

// duplicate - not allowed - error at runtime
const p = 23.98;
const p = 34;
console.log(p); // SyntaxError: Identifier 'p' has already been declared

// can not be reassigned: must be initialized at the time of declaration
const TITEL;
TITEL = 'automation testing'
console.log(TITEL); // SyntaxError: Missing initializer in const declaration


// re-assignment - not allowed
const PI = 3.14;
PI = 9.8;
console.log(PI); // TypeError: Assignment to constant variable.

// hoisting - not allowed - error at runtime - no error at parser
console.log(test); // ReferenceError: Cannot access 'name' before initialization
const test = 'automation'

// block - scoped - outside the block not allowed
if (true) {
    const tp = 40;
    console.log('inside the block: ' + tp);
}
console.log('outside the block: ' + tp); // ReferenceError: tp is not defined