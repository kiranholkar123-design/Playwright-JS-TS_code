
//====== Equality ===========================
// loose equality ( == ) - compare only value

console.log(10 == 10); //true

console.log(10 == '10'); // true

console.log(10 == `10`); // true

console.log('test' == "test"); //true

console.log('test' == "Test"); //false

let x;
console.log(x == '7'); //false

let xx;
let yy;
console.log(xx == yy); //true

console.log(true == 1); //true
console.log(true == '1'); // true
console.log(false == 0); // true
console.log(false == '0'); // true

console.log('true' == '1'); // false
console.log('false' == '0'); // false

//======== strict equality ( == ) - compare only value

console.log(10 === 10); //true

console.log(10 === '10'); // false

console.log(10 === `10`); // false

console.log('test' === "test"); //true

console.log('test' === "Test"); //false

let a;
console.log(a === '7'); //false

let aa;
let bb;
console.log(aa === bb); //true

console.log(true === 1); //false
console.log(true === '1'); // false
console.log(false === 0); // false
console.log(false === '0'); // false

console.log('true' === '1'); // false
console.log('false' === '0'); // false

