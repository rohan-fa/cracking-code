let myDate = new Date()

// console.log(myDate);    //the output we are getting is 2023-10-06T05:33:35.751Z. not readable so how to converse that? 

// console.log(myDate.toString())  //Fri Oct 06 2023 15:40:33 GMT+1000 (GMT+10:00)
// console.log(myDate.toLocaleDateString())        //06/10/2023
// console.log(myDate.toDateString())          //Fri Oct 06 2023
// console.log(typeof myDate)



// let myCreatedDate = new Date(2023, 0, 15);
//let myCreatedDate = new Date(2023, 0, 15, 43, 6);
let myCreatedDate = new Date("2023-05-15");



//console.log(myCreatedDate.toLocaleDateString());

// +++++++++++ TimeStamps ++++++++++++++++++++ ///////

// i want to know exact time stamp or the time a have created something

let myTimeStamp = Date.now();

// console.log(myTimeStamp);       //if you want to create a airbnb clone or hotel app you need compare time like this. THis is how are booked
// console.log(myCreatedDate.getTime());

//lets convert to seconds
//console.log(Math.floor(Date.now()/1000));           //interview


let newDate = new Date();

//lets say I want to know the month or year from the date
console.log(myDate.getDay() + 1);

// String interpolation means `${}` backticks

// Important method used a lot 

newDate.toLocaleString('default', {
    weekday: "short"
})









