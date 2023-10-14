//This key let us know about current context

const user = {
    username: "Rophan",
    price: 999,
    //what I want is whoever user comes let pass the function
    //this user refers current context
    welcome: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcome();
// user.username = "Sam"

// user.welcome()
//console.log(this);

// function chai(){
//     let user = "Rohan";
//     //this wont work because this only works on objects
//     console.log(this.user); //undefined
// }

// chai()
//~~~~~~~~~~ same ~~~~~~` undefine
// const chai = function chai(){
//     let user = "Rohan";
//     //this wont work because this only works on objects
//     console.log(this.user); //undefined
// }

// chai()

const chai = () => {
    let user = "Rohan";

    console.log(this); 
}

chai()

// Implicit return

// const addTwo = (num1, num2) => {username."ROhan"}   // => undefine

const addTwo = (num1, num2) => ({username: "ROhan"})  //use parentesis
console.log(addTwo(1,6));

const myArray = [1,2,3,1,2,3]

//myArray.forEach()

