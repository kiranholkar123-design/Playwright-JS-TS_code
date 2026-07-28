

//---------- String ----------------------
/**
 * size: 2 byte = 16 bites
 * can be declared it in single - double quotes, template literals
 */
let name = 'Kiran';
console.log(name);
console.log(typeof name);

//-------- Number ------------------------
/**
 * size: 8 byte = 64 bites
 * can be stores number, integer, flote(decimal)
 * max limit: MAX_SAFE_INTEGER = 2^53 − 1.
 * min limit: MIN_SAFE_INTEGER = −(2^53 − 1)
 */
Number.MAX_SAFE_INTEGER
let n = -9 / 0
console.log(n);
console.log(typeof n);



let g;
console.log(g);

//-------- BitInt ------------------------
/**
 * limitations
 * bitInt calculated with bigInt only, we can't mix bitint and Number directly for mathematic operations
 * we can't store decimal/flote value in bitInt. e.g. let b = 34.90n // not allowed
 */

let x = 123n;
console.log(x);
console.log(typeof x);


//-------- null ------------------
let v = null;
console.log(v); // null
console.log(typeof v); // object

//------- undefined --------------

let gh;
console.log(gh); // undefined
console.log(typeof gh); // undefined