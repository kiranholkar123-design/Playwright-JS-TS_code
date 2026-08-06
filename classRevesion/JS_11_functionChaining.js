

function login() {
    console.log('login to app');
    search()
}

function search() {
    console.log('search for the product');
    addTOCard();
}

function addTOCard() {
    console.log('adding product to card');
    login();
}

login();

// function recurtion

function billing() {
    let x = 20;
    let y = 30;
    console.log(x + y);
    billing();
}

billing()

//factorial number

function factorial(x) {
    if (x <= 1) {
        return 1
    }
    return x * factorial(x - 1)

}

console.log(factorial(0));



let total  = (a, b)=>{ return a+b}

let add = total(10,30)
console.log(add);

