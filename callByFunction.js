//calculator

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {Function(add,mul,sub,div)} callback 
 */
let result = function(a, b, callback){
    let res = callback(a, b);
    console.log(res);
};

result(5, 6, mul);
