// decending order using a for loop
let arrN = [13, 34, 9, 50, 1, 6]

for (let k = 0; k < arrN.length; k++) {
    for (let m = k + 1; m < arrN.length; m++) {
        if (arrN[k] < arrN[m]) {
            let temp = arrN[k];
            arrN[k] = arrN[m];
            arrN[m] = temp;
        }
    }
}

console.log(arrN);