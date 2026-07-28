

//=== Increment operator ( ++ )
/**
 * it will increase the variable value by 1
 * we can't apply it directly on value
 */

//==== post increment
/**
 * do it later
 * 1st return the current value then increase it
 */

let x = 9;
console.log(x++); // 9
console.log(x);// 10

console.log(3++);
// SyntaxError: Invalid left-hand side expression in postfix operation
// we can't apply it directly on value

let k = -45;
let u = k++;
console.log(k); // -44
console.log(u); // -45


//==== pre increment
/**
 * do it first
 * 1st increase the value then return the updated value.
 */

let g = 29;
let r = ++g;
console.log(g); // 30
console.log(r); //30

let l = 0;
let h = ++l;
console.log(l); // 1
console.log(h); // 1

let hh = -233;
let vv = ++hh;
console.log(hh); //-232
console.log(vv); //-232


//==== post decrement ==========
/**
 * do it later
 * 1st return the current value then increase it
 */

let f = 45;
let s = f--;
console.log(f); // 44
console.log(s); // 45

let amt = -100;
console.log(amt--); // -100
console.log(amt); // -101



//==== pre decrement
/**
 * do it first
 * 1st decrement the value then return the updated value.
 */

let o = 45;
let p = --o;
console.log(o); // 44
console.log(p); // 44

let total = -98;
let revTotal = --total;
