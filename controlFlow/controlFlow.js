// if statement 

if(true){
    //then internal will execute, or false wont go to the block
}
let balance = 300

if(balance < 500) console.log("test");   //implicite scope

// if(balance < 500) console.log("test"),
// console.log("test1");

// if(balance < 500){
//     console.log("less than ");
// }else if(balance < 750){

// }

//~~~~~ in real life~~~~~~~~~~~

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}
if(userLoggedInFromGoogle || loggedInFromEmail){
    console.log("got in");
}