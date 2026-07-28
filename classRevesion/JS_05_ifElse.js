
// if else statement

let num = 234;
if (num % 2 === 1) {
    console.log('number is odd');
}
else {
    console.log('number is even');
}


// nested if 
let num = 99;
if (num > 0) {
    console.log('Number is Positive');
    if (num % 2 === 0) {
        console.log('Number is Even');
    }
    else {
        console.log('Number is Odd');
    }
}
else {
    if (num === 0) {
        console.log('Number is Zero');
    } else {
        console.log('Number is Negative');
        if (num % 2 === -0) {
            console.log('Number is Even');
        }
        else {
            console.log('Number is odd');
        }
    }
}

