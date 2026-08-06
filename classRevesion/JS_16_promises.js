

let myPromise = new Promise((resolve, reject) => {
    let flag = false;
    if (flag) {
        resolve('Promise is resolved');
    }
    else {
        reject('Promise is rejected');
    }
})

myPromise
    .then((result) => { console.log(result) })
    .catch((error) => console.log(error));



function nPromise(flag) {
    return new Promise((resolve, reject) => {
        //let flag = true
        if (flag) {
            setTimeout(() => {
                console.log('Promise is resolved - 200ok');
                resolve();
            }, 3000);
        }
        else {
            setTimeout(() => {
                console.log('Promise is rejected - 500 error');
                reject();
            }, 1000);
        }
    })
}

nPromise(false)
    .then(() => { })
    .catch(() => { })


let x = new Promise((resolve, reject) => {
    resolve(5);
})

x
    .then((a) => a + 5)

console.log(x);


let p1 = Promise.resolve('task 1 done');
let p2 = Promise.resolve('task 2 done');
let p3 = Promise.resolve('task 3 done');

let [p1r] = Promise.all([p1, p2, p3]);
console.log(p1r);