let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sqOfEven = num
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((intSum, n) => intSum + n, 0)

console.log(sqOfEven);