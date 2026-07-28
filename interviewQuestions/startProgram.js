
// *
// **
// ***
// ****
// *****

let row = 5
for (let i = 0; i < row; i++) {
    let r = ''
    for (let j = 0; j <= i; j++) {
        //console.log(object);
        r += '*'
    }
    console.log(r);
}

//=====================================

// *****
//  ****
//   ***
//    **
//     *


let row1 = 5;
for (let i = 0; i < row1; i++) {
    let r = ''
    for (let j = 0; j < i; j++) {
        r += ' '
    }
    for (let k = 0; k < row1 - i; k++) {
        r += '*'
    }
    console.log(r);
}


//=====================================

let row2 = 5;
for (let i = 0; i < row2; i++) {
    let r = '';
    for (let j = 0; j < row2 - i; j++) {
        r += ' '
    }

    for (let k = 0; k <= i + i; k++) {
        r += '*'
    }

    console.log(r);
}