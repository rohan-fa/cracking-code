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
    //console.log(item.language);
})

// if we want to store it in a variable, we need to return it manually see the output => JS
// Python
// ruby
// cpp
// java
// undefined !~~~~~~~~~ came undefine cause there's no return. it still returns undefine

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1,2,3,2,1,3,42,13,4]

//callback after that we give (num > 4) condition, 
// const newNum = myNums.filter((num) => num > 4)
// console.log(newNum);

// const newNum = myNums.filter((num) => {
//     return num < 4     // now it's not implicit return so as we started scope in {} so need to write return
// })
// console.log(newNum);

// Same thing if we want to use forEach as filter

// const newNUm = []

// myNums.forEach((num) => {
//     if(num < 4){
//         newNUm.push(num)
//     }
// } )

// console.log(newNUm);



// ~~~~~~~~~~~~~~~~ BOOKS ~~~~~~~~~~~~~~~~~~~~~~

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === 'History');
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"})


//console.log(userBooks);

// ~~~~~~~~~~~~~~~~~~~  MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//const myNumbs = [1,43,22,4,3,2,4,25,3,4,46,7,64,5]

//const nun = myNumbs.map((num) => num + 10 )

//console.log(nun);

// we will learn chaining method 

//const num = myNumbs
                    .map((num) => num * 10 ) //what is the num of the array? after multiplying the new arr is num now
                    .map((num) => num + 1)
                    .filter((num) => num < 25 )  // filer is true false kind of operation



//console.log(num);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   reduce ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const myNumbs = [1,43,22,4,3,2,4,25,3,4,46,7,64,5]

// const myNum = myNumbs.reduce((acc, currval) => {
//     console.log(`acc ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0);
// console.log(myNum);

const myTotal = myNumbs.reduce((acc, currval) => acc + currval, 0)

//console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js Course",
        price : 22992, 
    },
    {
        itemName: "py Course",
        price : 244, 
    },
    {
        itemName: "mobile course",
        price : 529, 
    },
    {
        itemName: "data science",
        price : 22992, 
    },
]
//item denoting all the item in the object and we need to get the price
const rpice = shoppingCard.reduce((acc, item) => acc + item.price, 0)
console.log(rpice);







