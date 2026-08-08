

let num = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10], 11], 12, 13]
let newArr = []


// function flattenArray(array) {
//     for (let n of array) {
//         if (Array.isArray(n)) {
//             flattenArray(n)
//         }
//         else{
//             console.log(n);
//         }
//     }
// }

// flattenArray(num)


function flattenArray(array) {
    let tempArr = []
    for (let n of array) {
        if (Array.isArray(n)) {
            tempArr = tempArr.concat(flattenArray(n));
        }
        else {
            tempArr.push(n)
            //console.log(n);
        }
    }
    return tempArr;
}


let result = flattenArray(num)


console.log(typeof result);
console.log(result);
console.log(Array.isArray(result));



console.log('====================');
let sArr = [2,3,4,5,6,7]
for (let a in sArr){
    console.log(`${a}: ${sArr[a]}`);
}

let squareArr = sArr.map(e => e * e);
console.log(squareArr);
console.log(sArr);


console.log('======================');
let arr = [12, 13, 14, 15, [16, 17, [21, 22], 24, 25], 34, 56];

function flattenArray(newArr) {
    let tempArr = [];
    for (let num of newArr) {
        if (Array.isArray(num)) {
            tempArr.push(...flattenArray(num))
        } else {
            tempArr.push(num)
        }
    }
    return tempArr;
}

console.log(flattenArray(arr));
