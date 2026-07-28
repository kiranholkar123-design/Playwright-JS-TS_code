

let num = [
    [1, 2, 3],
    [10, 20, 30],
    [100, 200, 300]
]

for (let i = 0; i < num.length; i++) {
    let row = []
    for (let j = 0; j < num[i].length; j++) {
        row.push(num[i][j])
    }
    console.log(row);
}

for (let i = 0; i < num.length; i++) {

    for (let j = 0; j < num[i].length; j++) {
        process.stdout.write(`${num[i][j]}, `)
    }
    console.log();
}