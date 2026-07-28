let userN = {
    state: 'maharashtra',
    u1: {
        id: 3,
        name: "kiran",
        city: 'Pune',
        devices: ['iphone', 'moto']
    }
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



// function flattenJSON(obj, parentKey = 'userN') {
//     for (let key in obj) {

//         if (Array.isArray(obj[key])) {

//             for (let each of obj[key]) {
//                 if (typeof each === "object") {
//                     flattenJSON(each, `${parentKey}.${key}`)
//                 } else {
//                     obj[key].forEach(value => {
//                         console.log(`${parentKey}.${key} = ${value}`);
//                     });
//                 }

//             }



//             // for (let arr of obj[key]) {
//             //     console.log(`${parentKey}.${key}: ${arr}`);
//             // }
//         }
//         else if (typeof obj[key] === "object") {
//             flattenJSON(obj[key], `${parentKey}.${key}`)
//         }
//         else {
//             console.log(`${parentKey}.${key}: ${obj[key]}`);
//         }
//     }
// }

function flattenJSON(json, parentKey) {
    for (const [key, value] of Object.entries(json)) {
        //1st handle the array
        if (Array.isArray(value)) {
            for (const item of value) {
                if (typeof item === 'object') {
                    flattenJSON(item, `${parentKey}.${key}`)
                }
                else {
                    console.log(`${parentKey}.${key}: ${item}`);
                }
            }
        }
        //2nd handle the object
        else if (typeof value === 'object') {
            flattenJSON(value, `${parentKey}.${key}`)
        }
        //3rd handle the individual objects
        else {
            console.log(`${parentKey}.${key}: ${value}`);
        }
    }
}

flattenJSON(company, 'company')