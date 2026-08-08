// callback - A function passed as an argument to another function, which will be called later
// call by function = call back

let coffee = function () {
    console.log('Your order placed for coffee....');
    console.log(('Preparing the coffee now....'));
}

function placingOrderFor(callback) {
    callback();
}

placingOrderFor(coffee);


console.log('================================');
// calculater example
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

function calculater(a, b, callback) {
    return callback(a, b)
}

let result = calculater(30, 20, add)
console.log(result);

console.log('================================');

//browser launch example

/**
 * 
 * @param {string} browserName 
 */
let initBrowser = function (browserName) {
    console.log(`browser name: ${browserName}`);

    switch (browserName.trim().toLowerCase()) {

        case 'chrome':
            console.log('launch the chrome');
            return true;

        case 'firefox':
            console.log('launch the firefox');
            return true;

        case 'edge':
            console.log('launch the edge');
            return true;

        default:
            console.log(`entered the invalid browser: ${browserName}`);
            return false;
    }
}


function enterURL(browserName, URL, callback) {
    console.log('starting the the test case execution...');

    let isBrowserLaunched = callback(browserName);
    if (isBrowserLaunched) {
        console.log('entering the URL:', URL);
    }

}

enterURL('edge', 'www.google.com', initBrowser)

//calling a function by passing a function body itself

function testCaseToLaunchURL(URL) {
    console.log('starting the the test case execution...');

    let isBrowserLaunched = flag;
    if (isBrowserLaunched) {
        console.log('entering the URL:', URL);
    }
}
function launchBrowser_1(browserName, callback) {
    return callback(browserName);
}

let flag = launchBrowser_1('chrome', (browserName) => {
    console.log(`browser name: ${browserName}`);

    switch (browserName.trim().toLowerCase()) {

        case 'chrome':
            console.log('launch the chrome');
            return true;

        case 'firefox':
            console.log('launch the firefox');
            return true;

        case 'edge':
            console.log('launch the edge');
            return true;

        default:
            console.log(`entered the invalid browser: ${browserName}`);
            return false;
    }
})

// function testCaseToLaunchURL(URL) {
//     console.log('starting the the test case execution...');

//     let isBrowserLaunched = flag;
//     if (isBrowserLaunched) {
//         console.log('entering the URL:', URL);
//     }
// }

testCaseToLaunchURL('www.google.com');

function myCal(a, b, callback) {
    return callback(a, b)
}

let add = myCal(10, 40, function (a, b) {
    return a + b
})
console.log(add);


console.log('===========================');
//call back with normal function

function sum(x, y) {
    return x + y
}

function cal(x, y, callback) {
    return callback(x, y);
}

console.log(cal(34, 56, sum));