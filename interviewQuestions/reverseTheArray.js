
let arr = [10, 20, 30, 40, 50]
let newArr = []

for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
}

console.log(newArr);
//=============================

// using for - in loop

let num = [10, 20, 30, 40, 50]

let i = num.length - 1;
console.log(num);
let r = ''
for (let n in num) {
    r += num[i]
    i--;
    r += ', '
}

console.log(typeof r);
console.log(r);

//============================

let nm = [10, 20, 30, 40, 50]

let revArr = []
for (let y of nm) {
    let count = nm.length - nm.indexOf(y) - 1;
    revArr.push(nm[count])
}
console.log(revArr);