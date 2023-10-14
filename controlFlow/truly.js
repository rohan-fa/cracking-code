const name = "ROhan";       // if there's value inside string will take true, []= true, ""= empty false

if(name){
    console.log("test");
}else{
    console.log("go out");
}

//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy

// "0", 'false', ' ', [], {}, function(){}, 


// to check Array

// const username = []
// if(username.length === 0){
//     console.log("ss");
// }

// const usenmae = {}

// if(Object.keys(usenmae).length === 0){
//     console.log("ss");
// }

//Nullishg Calescing Operatior (??): null undefined 

// when we call through database ex firebase, that way we dont get direct response. We get two values, chances are we may get null response or dont get any response undefine. That case our full code structure may get disturbed. 
// so if null I will deal with that in other case or 

let val1
//val1 = 5 ?? 10 
//val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

//Terniary Operator 
// condition ? true : false 

// we can check condition direct

const ice = 222;
// we put the condition so now write the true statement, now giving the colmn another statement
ice >= 80 ? console.log(" less") : console.log("more");




