
function user(){
    return new Promise((resolve, reject)=>{
        resolve('Kiran')
    })
}

async function welcomeUser(){
    console.log(`hello ${await user()}`);
}

welcomeUser()





console.log('====================================');
function fetchData(flag) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag) {
                resolve('got the correct user data . . . .')
            } else {
                reject('invalid auth tocken . . . .')
            }
        }, 3000)
    })
}

async function getUserData() {
    console.log('fetching the user data');
    let authToken = false;
    let userData = await fetchData(authToken);
    console.log(userData);
}

getUserData()
    .then(() => {
        console.log("User data fetched successfully");
    })
    .catch((err) => {
        console.error("Error while fetching user data:", err);
    });