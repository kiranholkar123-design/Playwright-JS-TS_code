


class Car {

    static wl = 4;

    static start() {
        console.log('Static Car -- start');
    }

    wheel() {
        return Car.wl
    }

    start() {
        console.log('Car -- start');
    }

    stop() {
        console.log('Car -- stop');
    }

    refuel() {
        console.log('Car -- refuel');
    }
}

class BMW extends Car {

    start() {
        console.log('BWM -- start');
    }

    autoParking() {
        console.log('BMW -- auto parking');
    }
}

class Audi extends Car {
    thefSafty() {
        console.log('Audi -- Theft Safty');
    }
}

let bmw = new BMW();
bmw.start();
bmw.stop();
Car.start();
console.log(bmw.wheel())

// let car = new Car();
// car.stop();


// export { Car, BMW, Audi }