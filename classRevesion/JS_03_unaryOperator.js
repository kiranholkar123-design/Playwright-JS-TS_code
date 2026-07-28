//=============================================
//======= '+' unary plus operator =============
//=============================================

/**
 * unary operator convert the string into number
 * but while using the unary operator, value should be pure number only
 * there is no point to use it with pure string/charactore
 */

console.log(+"3" + 9); //12

let billAmt = '1000';
console.log(+billAmt + 100); //1100

let billAmt1 = 'test'
console.log(+billAmt1 + 23); //NaN

console.log(+'Hello' + '23'); //NaN23

//=============================================
//======= '-' unary negation operator =========
//=============================================


console.log(-"3" + 9); //6
console.log(-"3" - 9); //-12

let billAmt = '1000';
console.log(-billAmt - 100); //-1100

let billAmt1 = 'test'
console.log(-billAmt1 - 23); //NaN

console.log(-'Hello' - '23'); //NaN



let g = '3000';
console.log(Number.parseInt(g) + 400); //3400







