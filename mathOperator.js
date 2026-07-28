

console.log(9/0);

console.log(0/0);

console.log('kiran' == 'Kiran');
console.log(0.0/0.0);

console.log('9'/2);


console.log(9%2);

let x = 99.1%2
if(x === 1){
    console.log('Number is odd');
}else{
    console.log('Number is even');
}


let a = 1;
let b =a++;
console.log(a);
console.log(b);

let x = -99;
let y = x++;

console.log(x++);
console.log(y);
console.log(y);
console.log(x);

let total = 100;
console.log(total++);
console.log(total);

// pre increment
let p = 1;
let q= ++p;
console.log(p);
console.log(q);

let aa = -999;
let bb = ++aa;
console.log(aa);
console.log(bb);

let m = 1;
let n = m--;
console.log(m);
console.log(n);

let amt = 100;
console.log(--amt);
console.log(amt);

let i = 11;
let j = i++ + ++i;
console.log(i)
console.log(j);

let a=11, b=22, c;
c= a+b+ a++ + b++ + ++a + ++b;
console.log('a = '+ a);
console.log('b = '+ b);
console.log('c = '+ c);

let i=0;
j= i++ - --i + ++i - i--
console.log('i = '+ i);
console.log('j = '+ j);


let nn = true;
nn++
console.log(nn);

let r = 0, k = 0;
let pp = --r * --k * k-- * r--;
console.log(pp);
console.log(r);
console.log(k);

// console.log(++true);