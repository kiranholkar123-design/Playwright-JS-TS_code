//=============================================
//======= + operator ==========================
//=============================================

// on number - if both side are number then it will do addition
let x = 12;
let y = 45;
console.log(x + y); // 57

// on string
let r = 30;
let u = "gtrat";
console.log(r + u); //30gtrat

let g = 1;
let m = '1';
console.log(g + m); // 11 - not 2

console.log(1 + 1 + '1'); // 21
console.log(1 + '1' + 1); // 111

//=============================================
//======= - operator ==========================
//=============================================

console.log(2 - 1); // 1 - both side are pure number

/**
 * if we use any mathematical operator other than
 * + operator, like  (-, *, /, %, etc.), with string (one/both side number) 
 * then in javascript it considered as a number only
 */
//single side numeric string
console.log(2 - '1'); // 1 

//both side numeric string
console.log('2' - '11'); // -9

//if single side pure string
console.log(3 - "Hello"); // NaN


//=============================================
//======= *  - multiplication operator ========
//=============================================

console.log(4 * 4); // 16
console.log(4 * '14'); // 56

console.log(-1 + '5' * 5); // 24

console.log("hello" * 9); // NaN
console.log("hello" * '9'); // NaN

console.log("hello" * 'Hi'); // NaN

//=============================================
//======= /  - division operator ========
//=============================================

console.log(4 / 4); // 1
console.log(4 / '2'); // 2

console.log('14' / '2'); // 7

console.log(-1 + '5' / 5); // 0

console.log("hello" / 9); // NaN
console.log("hello" / '9'); // NaN

console.log("hello" / 'Hi'); // NaN



























