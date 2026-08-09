

//promise.resolve method

let p1 = Promise.resolve('resolve promise 1');
let p2 = Promise.resolve('resolve promise 2');
let p3 = Promise.resolve('resolve promise 3');

//-------- resolve promises
p1.then(
    (result) => {
        //console.log(result);
    }
)

//-------- rejecte promises
let p4 = Promise.reject('promise got rejected')

p4
    .catch((err) => {
        // console.log(err);
    })

//------ promise.all()
/**
 * it will return combine result once all promise got resolve, notmatter which finish first and last
 * from all, if any of the promise got reject - then entire promise get rejected even if other got succeed.
 * the order of the result is base on the input of the promise.all
 */

Promise.all([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

//------ promise.race
let pr1 = new Promise((resolve) => {
    setTimeout(() => { resolve('resolve pr1') }, 2000)
})

let pr2 = new Promise((resolve) => setTimeout(() => resolve('resolve pr2'), 3000))
let pr3 = new Promise((resolve) => setTimeout(() => resolve('resolve pr3'), 1000))
let pr4 = new Promise((reject) => setTimeout(() => reject('reject pr4'), 1000))

Promise.race([pr1, pr2, pr3, pr4])
    .then((result) => console.log(result))
    .catch((error) => console.log(error))












