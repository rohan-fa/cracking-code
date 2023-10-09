const score = 400;
//console.log(score)


const balance = new Number(200);        //we are defining in new object  
// console.log(balance);

// console.log(balance.toString().length) 
// console.log(balance.toFixed(2))     //precision value


const otherNumber = 1123.65432;

//console.log(otherNumber.toPrecision(5))

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));     //adds commas 

// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++

//maths comes javascript by default

// console.log(Math);
// console.log(Math.abs(-4));        //absolute value no negative value 
// console.log(Math.round(104.85525))
// console.log(Math.ceil(104.15525))       //it will show anything the higher value like 105
// console.log(Math.floor(104.15525))       //it will show anything the lower value like 104

// console.log(Math.min(3,2,4,2,3,5,4,2,5))       

//console.log(Math.random()*10);       

const max = 20
const min = 10

// console.log((Math.random()*10) +1)       // in random value should be between 0-1
// console.log(Math.floor(Math.random()* 10) +1)        // Math.random()*10 => to get full number,sometime result may come 0.1 so floor will create as zero, +1 is to avoid getting zero


// +++++++++++++++++= IMPORTANT +++++++++++++++++++++++=
console.log(Math.floor(Math.random() * (max-min + 1)) + min)    //need to define max and min, so we user Math.random apart from using *10 we used the comparison (max-min) to get the range,+1 to avoid zero case. but result was showing less than 10 for that used min for the value to come more than 10 or min 


