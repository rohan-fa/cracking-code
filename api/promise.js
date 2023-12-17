//promise is an object
//how to create promise? promise has two part resolve and reject

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task, as promise is being created we need to consume it. created as in promisOne
    //DB calls, cryptography, networkCall, 
    setTimeout(function(){
        console.log('async task is');
        resolve()
    }, 1000)
})
//resolve directly connected with .then() . .then(callback function) this function automatically receives an argument. whos work is whichever work been done,that returns
//we are not getting the output as promise being comsumed. why? because we havenot connected the resolve with .then(). how do we do that? 

promiseOne.then(function(){
    console.log('promis consume');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    }, 1000)
})

//as I havenot store it in variable can use .then()

.then(function(){
    console.log("Async two consmed");
})

// ~~~~~~~~~~~~~~ Third promise ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'chai@exapcode.com'})
        console.log("");
    }, 1000)
})
// as we connected resolve and .then() so can expect some data may come. let use an argument as user. 
promiseThree.then(function(user){
    console.log(user);
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ four ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name: 'rphan', email: "sdfnhos@com"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.name
})
.then((username) => {
    console.log(username); 
})
.catch((error => console.log(error)));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ five ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name: 'rphan', email: "sdfnhos@com"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 2000)
})

async function consumeFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumeFive();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ six ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

async function userAll(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

userAll();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ seven ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error)=> error)






















