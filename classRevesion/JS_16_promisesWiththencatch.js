

function startTheMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Starting the Machine');
            resolve();
        }, 5000)
    })
}

function grindTheBeans() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Gringding the beans');
            resolve();
        }, 3000)
    })
}

function boilwater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Boiling the water');
            resolve();
        }, 3000)
    })
}

function brewTheCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Brew the coffee');
            resolve()
        }, 2000)
    })
}

function poringTheCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Poring the coffee');
            resolve()
        }, 2000);
    })
}

function coffeeIsReady() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('your coffe is ready');
            resolve()
        }, 2000);
    })

}

startTheMachine()
    .then(() => { return grindTheBeans() })
    .then(() => { return boilwater() })
    .then(() => { return brewTheCoffee() })
    .then(() => { return poringTheCoffee() })
    .then(() => { return coffeeIsReady() })