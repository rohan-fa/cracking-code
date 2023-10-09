//to learn javascript two things are most important Object and events

//we can declear object in two ways, 
// literal and constructor

// IMPORTANT
//singleton
// any constructor we make that become singleton object. it itself the only object
// but in other way we make an object thats not singleton, multiple instance created that way. 

/// when we make like in literal way singleton doesnt make.if we constructor than way singleton will create

// object literals
//Object.create           //this is constructor that makes singleton

const symble = Symbol("asdhjnd")

const jsUser = {
    name: "Rohan",
    age: 19,
    [symble]: "mysym",
    "full-name": "Rohan Farzana",
    location: "japous",
    email: "hi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//now lets access the object. In javascript we access object through dot notation

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full-name"])
// console.log(typeof jsUser[symble])    //showing string not a symbol
// console.log(jsUser[symble])    

// Lets change the object from above

jsUser.email = 'hello@gmail.com'
//we can also freeze the changes so no one can change it

//Object.freeze(jsUser);

//console.log(jsUser)

//lets add functions also in object

jsUser.greetings = function () {
    console.log("welcome")
}
jsUser.greetings2 = function () {
    console.log(`hello user ${this.location}`)
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());
//~~~~~~~~~~~~~~~~~~~~~~~~~ PART 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


