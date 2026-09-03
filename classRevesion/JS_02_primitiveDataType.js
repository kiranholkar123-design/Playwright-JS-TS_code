

// string - size is 2 bytes = 16 bits
let name = 'Kiran'
console.log(name); // Kiran
console.log(typeof name); // string

//number - 8 bytes = 64 bits
let x = 40;
console.log(x); // 40
console.log(typeof x); // number

//bigInt 
let num = 1000n;
console.log(num); // 1000n
console.log(typeof num); // bigint

let g = 20n;
let h = 50;
console.log(g + h); // TypeError: Cannot mix BigInt and other types, use explicit conversions

//boolean - size is 1 bytes = 8 bites
let s = true;
console.log(s); // true
console.log(typeof s); // boolean

//null
let b = null;
console.log(b); // null
console.log(typeof null); // object

//undefined - size - it not hold any real value and it size is depends on js engine - it might be between 0-8 bytes 
let y;
console.log(y); // undefined
console.log(typeof y); // undefined





