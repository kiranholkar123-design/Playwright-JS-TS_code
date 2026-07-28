
let userdata = {};

let user1 = {
    name: 'Kiran',
    email: 'kitan123@test.com',
    phone: 909090
}


let user2 = {
    name: 'Tushar',
    email: 'Tushar123@test.com',
    phone: 808080
}


let user3 = {
    name: 'Pravin',
    email: 'pravin123@test.com',
    phone: 101010
}


let user4 = {
    name: 'Harshal',
    email: 'harshal123@test.com',
    phone: 404040
}

user1 = user2;
user2 = user3;
user3 = user4;
user4 = user1;
// console.log("user1:", user1);
// console.log("user2:", user2);
// console.log("user3:", user3);
// console.log("user4:", user4);

userdata.user1 = user1;
userdata.user2 = user2;
userdata.user3 = user3;

console.log(userdata);

//================================

let userN = {
    state: 'maharashtra',
    u1: {
        id: 3,
        name: "kiran",
        city: 'Pune',
        devices: ['iphone', 'moto']
    }
}
//console.log(typeof userN.u1.devices);
function flattenJSON(obj, parentKey = 'userN') {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            flattenJSON(obj[key], `${parentKey}.${key}`)
        } else if (Array.isArray(obj[key])) {
            for (let arr of obj[key]) {
                console.log(`${parentKey}.${key}: ${arr}`);
            }
        }
        else {
            console.log(`${parentKey}.${key}: ${obj[key]}`);
        }
    }
}

flattenJSON(userN)

console.log(typeof userN);
console.log(typeof userN.state);
console.log(typeof userN.u1);


for (let key in userN) {
    for (let inKey in userN[key])
        console.log(`userN.${key}.${inKey}: ${userN[key][inKey]}`);
}


let numN = [1, 2, 3, 4,[5, 6, 7,[8, 9], 10]]

function flattenArray(inputArray) {
    let newArr = [];
    for (let a of inputArray) {
        if (Array.isArray(a)) {
            newArr.push(...flattenArray(a))
        }
        else {
            newArr.push(a)
        }
    }
    return newArr
}
let result = flattenArray(numN)
console.log(JSON.stringify(result))
