//In this kata you should simply determine, whether a given year is a leap year or not. 
//In case you don't know the rules, here they are: 
//years divisible by 4 are leap years but years divisible 
//by 100 are not leap years but years divisible by 400 are leap years
 
// it a leap year or not n%4, n%100 !== leapyear
// const leapYear = (n) => {
//     return (n%4 === 0 && n%100 !== 0) || n%400 === 0;
// }
//------------------
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// const countBy = (x, n) => {
//     let z = [];

//     for(let i=1; i<= n; i++){
//         z.push(x*i);
//     }
//     return z;
// }
// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }
// console.log(countBy(1,10));
// console.log(countBy(3,40));
// console.log(countBy(5,60));
//-----------------------------------

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 

//const dropCap = (n) =>{
//     let m = n.split(" ");

//     for(let i =0; i < m.length; i++){
//         if(m[i].length > 2){
//             m[i] = m[i].slice(0, 1).toUpperCase() + m[i].slice(1).toLowerCase();
//         }
//     }
//     return m.join(" ")
// }
// console.log(dropCap("apple of banana"))

//------------------------


//[1, 1, 2] -> [1, 2]

// index[i]+i

// function distinct(a) {
//     return [...new Set(a)];
//   }
  