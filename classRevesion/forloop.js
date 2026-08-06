let x = 1;
for (x; x <= 10; x++) {
    console.log(x);
}


let start = 2;
let range = 40;
let newnum;
let pn1 = start;
let pn2 = pn1;
for (let n = start; n <= range; n = newnum) {
    console.log(n);
    newnum = pn1 + pn2;
    pn1 = pn2;
    pn2 = newnum;
}


// * pattern

function rightAngleTriangle(height) {
    let pattern = '';
    let incrementNum = 0;
    for (let x = 1; x <= height; x++) {


        for (let p = 4; p >= x; p--) {
            pattern = pattern + ' '
        };

        for (let y = 1; y <= x + incrementNum; y++) {
            pattern = pattern + '*';
        };

        incrementNum = incrementNum + 1;
        pattern = pattern + '\n';

    };
    console.log(pattern);
};

rightAngleTriangle(5)
