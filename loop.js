//for 


for (let i = 0; i <= 2; i++) {
    const element = i;
    if(element == 1){
        //console.log("fsd");
    }
    //console.log(element);
}
for (let i = 0; i < 2; i++) {
   //console.log(`utterloop ${i}`);
    for (let j = 0; j < 3; j++) {
     //   console.log(`innerloop ${j} and innnerlop ${i}`);
    }
    
}

//let arr = ["Rohan", "sfid","asdasd"]
//console.log(arr.length);

//for (let i = 1; i < arr.length -1; i++) {
//     const element = arr[i];
//     //console.log(element);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~ for of loop ~~~~~~~~~~~~~~~~~~~~~~~~~~

//for of

// ['', '', '']
// [{}, {}, {}]

let arr = [1,2,3,4,2,3,4]

for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    //console.log(`sdfnhs ${greet}`);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~MAPS ~~~~~~~~~~~~~~~~~~~~~
// map keeps unique values 

// const map = new Map()
// map.set("dhaka", "Bangladesh")
// map.set("USA", "unitesadfsdf")
// map.set("FI", "france")
// map.set("d", "fshijd")
// map.set("USA", "unitesadfsdf");

// //console.log(map);

// // for (const key of map) {
// //     //console.log(map);   ///it prints keys and value
// // }
// // for (const [key, value] of map) {
// //     console.log(key, ':', value);   ///it prints keys and value
// // }

// const myObject = {
//     'game1' : "daesd",
//     "game2" : "das"
// }

// // for (const [key] of myObject) {
// //     console.log(key);
// // }        => myObject is not iterable

// const my1Object = {
//     game1 : "daesd",
//     game2 : "das"
// }

// // IN OBJECTS FORIN loop works
// for (const key in my1Object) {
//     //console.log(`${key} for sadddddd ${my1Object[key]}`);   // [gives the values], key gives the keys
// }

// //what if we run forin in array

// for (const key in my1Object) {
//     console.log(my1Object[key]);
// }

//~~~~~~~~~~~~~ FOREACH ~~~~~~~~~~~~~~~~~~~~~~

const coding =[ "JS", "Python", "ruby", "cpp", 'java']

//callback has no name
// coding.forEach( function name(){} )
// coding.forEach( function (){} )
//so we usually give name to the parameters, we can name anything to connect with the array and imply the function, every array has a item so lets call it an item. 

// coding.forEach(function(item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

//we can have access to its index, and array list as well
coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})


const myCoding = [
    {
        language: "JavaScript",
        languageFileName : "JS",
        
    },
    {
        language: "Java",
        languageFileName : "java",

    },
    {
        language: "python",
        languageFileName : "py",

    },
]

// we called all the objects in the array an item
myCoding.forEach((item) => {
    console.log(item.language);
})