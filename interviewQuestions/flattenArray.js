let numN = [1, 2, 3, 4,[5, 6, 7,[8, 9], 10]]

function flattenArray(inputArray) {
    let newArr = [];
    for (let a of inputArray) {
        if (Array.isArray(a)) {
            newArr.push(...flattenArray(a))
        }
        else {
            newArr.push(a)
        }
    }
    return newArr
}
let result = flattenArray(numN)
console.log(JSON.stringify(result))