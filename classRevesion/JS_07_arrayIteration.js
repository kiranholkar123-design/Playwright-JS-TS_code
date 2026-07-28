

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



