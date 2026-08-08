

function startTheMachine(callback) {
    setTimeout(() => {
        console.log('starting the machine');
        callback()
    }, 5000)
}

function grindTheBeans(callback) {
    setTimeout(() => {
        console.log('Gringding the beans');
        callback();
    }, 3000)
}

function boilwater(callback) {
    setTimeout(() => {
        console.log('Boiling the water');
        callback();
    }, 3000)
}

function brewTheCoffee(callback) {
    setTimeout(() => {
        console.log('Brew the coffee');
        callback()
    }, 2000)
}

function poringTheCoffee(callback) {
    setTimeout(() => {
        console.log('Poring the coffee');
        callback()
    }, 2000);
}

function coffeeIsReady() {
    console.log('your coffe is ready');
}


startTheMachine(() => {
    grindTheBeans(() => {
        boilwater(() => {
            brewTheCoffee(() => {
                poringTheCoffee(
                    coffeeIsReady
                )
            })
        })
    })
})



console.log('-----------------------------------------------');

startTheMachine(() => {
    grindTheBeans(boilwater)
})

function hello(callback, name) {
    console.log('hello');
    callback(name);
}

function name(nm) {
    console.log(nm);
}

hello(name, 'Kiran');


function startTheMachine(callback) {
    setTimeout(() => {
        console.log('machine started');
        callback();
    }, 3000)
}

function onMachineReady() {

    setTimeout(() => {
        console.log('task completed');
    }, 3000)
    //console.log('task completed');
}

startTheMachine(onMachineReady)