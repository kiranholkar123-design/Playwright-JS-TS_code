

let x = [1, 2, 3]
let y = [4, 5]
let newArr = [];
for (let numY of y) {
    let innerarr = [];
    for (let numX of x) {
        let add = numX + numY;
        innerarr.push(add)
    }
    newArr.push(innerarr)
    //console.log(newArr);
}
console.log(newArr);