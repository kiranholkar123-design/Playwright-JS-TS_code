
// Ascending order using a for loop
let numArr = [13, 34, 9, 50, 1, 6]

for (let a = 0; a < numArr.length; a++) {
    for (let x = a + 1; x < numArr.length; x++) {
        if (numArr[a] > numArr[x]) {
            let num1 = numArr[a];
            numArr[a] = numArr[x];
            numArr[x] = num1;
        }
    }
}

console.log(numArr);