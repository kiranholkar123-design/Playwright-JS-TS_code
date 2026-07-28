

//--------------
let i = 11;
let j = i++ + ++i;
console.log(i); // 13
console.log(j); // 24

//=================================

let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b;
console.log(`a = ${a}`); // 13
console.log(`b = ${b}`); // 24
console.log(`c = ${c}`); // 103

//=================================
let l = 0;
let p = l++ - --l + ++l - l--;
console.log(l); // 0
console.log(p); // 0 
