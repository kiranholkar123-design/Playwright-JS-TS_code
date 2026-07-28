

let user = {
    name: 'Kiran',
    email: 'kirantest@test.com',
    phone: 998800,
    isActive: true,
}

console.log(Object.entries(user));

//using for in loop
for (let key in user) {
    console.log(`${key} = ${user[key]}`);
}

console.log('===========================');
//using for of loop
for (let [key, value] of Object.entries(user)) {
    console.log(`${key} = ${value}`);
}

console.log('===========================');
let userN = {
    name: 'Kiran',
    email: 'kirantest@test.com',
    phone: 998800,
    isActive: true,
    adress: {
        flat: 34,
        city: 'Pune',
        State: 'Maharashtra'
    },
    devices: ['iphone', 'Moto']
}


let company = {
    name: "TechCorp",
    location: "Pune",
    departments: {
        hr: {
            head: "Kiran",
            employees: [
                { id: 1, name: "Tushar", role: "Recruiter" },
                { id: 2, name: "Pravin", role: "Coordinator" }
            ]
        },
        engineering: {
            head: "Harshal",
            teams: {
                frontend: {
                    lead: "Amit",
                    stack: ["HTML", "CSS", "JavaScript"]
                },
                backend: {
                    lead: "Sneha",
                    stack: ["Node.js", "Express", "MongoDB"]
                }
            }
        }
    }
};

let json = JSON.stringify(company, null, 2)
console.log(json);

function flattenJSON(inputFile, parentKey) {

    let finalObj = inputFile;
    if (typeof inputFile === 'string') {
        finalObj = JSON.parse(inputFile)
    }

    for (let key in finalObj) {
        if (Array.isArray(finalObj[key])) {
            for (let item of finalObj[key]) {
                if (typeof item === 'object') {
                    flattenJSON(item, `${parentKey}.${key}`)
                }
                else {
                    console.log(`${parentKey}.${key}: ${item}`);
                }
            }
        }
        else if (typeof finalObj[key] === 'object') {
            flattenJSON(finalObj[key], `${parentKey}.${key}`)
        }
        else {
            console.log(`${parentKey}.${key}: ${finalObj[key]}`);
        }
    }
}

flattenJSON(json, 'company')