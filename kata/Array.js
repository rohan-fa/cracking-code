// array

const myArr = [1,2,3,4,5]
const myHero = ["da", "ddede3"]

const myArr2 = new Array(0,2,3,4)
 



//myArr.push(7) //[ 1, 2, 3, 4, 5, 7 ]
//myArr.unshift(9)    //[9, 1, 2, 3, 4, 5, 7]
//myArr.shift()    //   [ 1, 2, 3, 4, 5 ]

//console.log(myArr);

// Answer some questions for me


//console.log(myArr.includes(3)); // true or false
//tell which index the elements are
//console.log(myArr.indexOf(3));
// join will make all the elements into string
const newArr = myArr.join("")
//console.log(newArr);
//+++++++++++++++SLICE ++++++++++++++++++//

// splice or splice

//console.log("A ", myArr);
// it includes from the first and finishes before 3.And it does not manipulate the main array 
const mynA1 = myArr.slice(1, 3)

//console.log(mynA1);
//console.log("B ", myArr);

const mynA2 = myArr.splice(1, 3)    //it changes the entire array 

//console.log(mynA2);
//console.log("C ", myArr);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PART 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const heros = ['a' ,'a' ,'a' , 'f']
const anotherHero = ['ayy' ,'arr' ,'ass' , 'fdd']

const hi = [...heros, ...anotherHero]

//console.log(hi)
const anotherArr = [1,1,[1,1,4,2,],34,2,[3,[4,2,4,7],6,7,8],6,8,[7,[99,87],6],9]

const hiArr = anotherArr.flat(Infinity);
//console.log()

console.log(Array.isArray("ROgab")) //false its not an array
console.log(Array.from("ROgab")) //false its not an array
console.log(Array.from({name: "ROgab"})) //output is empty, because we have to specify the key or the value for it to make an array
console.log(Array.of("ROgab")) //false its not an array

let score = 100
let score1 = 300
let score2 = 400

console.log(Array.of(score,score1))












