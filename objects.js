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

// jsUser.greetings = function () {
//     console.log("welcome")
// }
// jsUser.greetings2 = function () {
//     console.log(`hello user ${this.location}`)
// }

// console.log(jsUser.greetings());
// console.log(jsUser.greetings2());
//~~~~~~~~~~~~~~~~~~~~~~~~~ PART 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//we will learn how to create object singleton using constructor

//const appUser = new Object()    //this is a singleton Object
//this is a non singleton object
const tinder = {}

tinder.name = "Rphjan"
tinder.age = 132
tinder.id = "w2314da"
tinder.isLoggedIn = true 

//console.log(tinder);   //{}
const regularUser = {
    email: "nrd@gmial.com",
    fullname: {
        userfullname: {
            firstname: "ROhan Farzana",
            lastname: "farzana"
        }
    }

}
//console.log(regularUser.fullname.userfullname.lastname);
// as we merged array now we will merge object

const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "a", 4: "b"}
const ob3 = {5: "a", 6: "b"}
const ob4 = {7: "a", 8: "b"}

const obj = {ob1, ob2} 

//console.log(obj)    //same problem { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'a', '4': 'b' } } nested object not merged

// syntax 
const obj5 = Object.assign(ob1, ob2);
//console.log(obj5);  // weird { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//another syntax
const obh = Object.assign({}, ob1, ob2, ob3, ob4)   // it is safer to put empty {} this is a target,  ob1, ob2, ob3, ob4 and it is source

//console.log(obh);
//best way 
const abhs = {...ob1, ...ob2}
//console.log(abhs)

//when we get the value from the database

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    }

]
users[1].email
//console.log(tinder);

//console.log(Object.keys(tinder));   //[ 'name', 'age', 'id', 'isLoggedIn' ] datatype is array 
//console.log(Object.entries(tinder));    //less use it makes keys also string in an array so you can loop through

//console.log(tinder.hasOwnProperty('isLoggedIn'));    // asking if the Object has the property boolean

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MOST IMPORTANT Object de-structure and JSON API intro ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// we can destructure arrays and objects

// In react there will be objects, will destructure the values

const course = {
    name: "jsIn",
    price: '233',
    coiseInstructor: "Rohan"
}
//this is good but if we want to get the same data over and over again thats a lot to write

//console.log(course.price);

//first {} = then from where to get? course object. So which value you want to extract? write it in {}
const {coiseInstructor} = course

// I can also call in deferent names if that is too big like

const {coiseInstructor: instructor} = course

//this way we dont have to use . notation
console.log(instructor);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~ In React we may see ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const navbar = ({company}) => {

// }

// navbar(company = "ROhan")

//~~~~~~~~~~~~~~   APIIIIII ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// if we go to restaurant we take the menu and order, we dont care about how he going to make it 
// So API is the same. MENU card is API documentation. When we get values from backend and how we write it

// {
    //object is JSON
// }

// {
//     'name': "Rohan"
//     'price': "22",
//     'age': 22
// }

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }

// go to json formatter and paste it

























