

function startTheMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('machine Sarted . . . .');
            resolve();
        }, 4000)
    })
}

function grindingtheBeans() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('grinding the Beans . . . .');
            resolve();
        }, 3000)
    })
}

function boilwater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('boiling the water . . . .');
            resolve();
        }, 3000);
    })
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('brewing the coffee. . . .');
            resolve();
        }, 2000);
    })
}

function pourCoffe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('pouring the coffee . . . .');
            resolve();
        }, 2000);
    })
}

async function makeCoffee() {
    await startTheMachine();
    await grindingtheBeans();
    await boilwater();
    await brewCoffee();
    await pourCoffe();
    console.log('your coffee is ready . . . .');
}

makeCoffee();