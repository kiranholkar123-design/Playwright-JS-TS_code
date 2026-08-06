

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

function boilwater() {
    setTimeout(() => {
        console.log('Boiling the water');
        //callback();
    }, 3000)
}

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