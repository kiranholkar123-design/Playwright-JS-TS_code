// reverse sentence

let mainSentence = 'my name is kiran holkar';
let splitSentence = mainSentence.split(' ');
let reverseSentence = '';

for (let index = splitSentence.length - 1; index >= 0; index--) {
    reverseSentence = reverseSentence + splitSentence[index] + ' ';
}

console.log(reverseSentence);

// reverse string

let x = 'pradny';
let newX = '';

for (let index = x.length - 1; index >= 0; --index) {
    newX = newX + x.charAt(index);
};

console.log(newX);

// reverse string using function

function reveseString(string) {

    let newString = '';
    for (let index = string.length - 1; index >= 0; index--) {
        newString = newString + string.charAt(index);
    }
    console.log(newString);
};

function revSentence(string) {

    let splitSentence = string.split(' ');
    let reverseSentence = '';

    for (let index = splitSentence.length - 1; index >= 0; index--) {
        reverseSentence = reverseSentence + splitSentence[index] + ' ';
    }

    console.log(reverseSentence);
};



function rev(string, callback) {
    callback(string);
}

rev('my name is kiran', revSentence);

//------------------------------

function revStringChar() {
    let str = 'my name is kiran';
    let strArray = str.split(' ');
    let newStr = [];
    for (let s of strArray) {
        let txt = s;
        let revStr = ''
        for (let i = txt.length - 1; i >= 0; i--) {
            revStr = revStr + txt.charAt(i)
        }
        newStr.push(revStr)
    }

    console.log(newStr.join(' '));
}

revStringChar()

//---------------------------------

function seperateOddAndEven() {
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let odd = [];
    let even = [];

    for (let num of numArr) {
        let n = num % 2;
        if (n === 0) {
            even.push(num);
        } else {
            odd.push(num)
        }
    }

    console.log(`odd numbers: ${odd}`);
    console.log(`even numbers: ${even}`);

}

seperateOddAndEven()

//--------------------------------
// remove the duplicate
let str = 'asdasdfgtfgt';
let newStr = '';
for (let c of str) {
    //let char = str[i];
    if (newStr.indexOf(c) === -1) {
        newStr += c
    }
}

console.log(newStr);