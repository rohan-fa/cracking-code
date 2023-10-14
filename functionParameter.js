// we will learn function with js memory management
//in programming language empty string is consider as a false, like as undefine is false, but we can not access to the block unless its true means if statement 
// if (need to be true){}

function userName(user = "Rohan"){
    //like user === undefine same as !user
    if(!user){
        return console.log("please a username");
    }
    //because we used return in the scope so this return wont work for that
    return `${user} is you congrates`
}

//console.log(userName("me"));

// to avoid undifine we can put default value
// function userName(user = "rohanh"){
    
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SHOPPING CARD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// in the shopping card user keep on adding the item so to add those totals so for that we need to make a function that will take many numbers of parameters


//(...num1) it is a rest operator     => [ 2, 33333, 3345445 ] so that we have got array now we can add loop and do sum operation 
function calculateCardPrice(...num1){
    //now what ever parameter may come will return
    return num1
}
//console.log(calculateCardPrice(2OO, 4090, 33))        //200 others did not add so to solve that there's a rest operator

function calculateCardPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCardPrice(2, 33333, 3345445,423423,23423))

//lets talk about object

const user = {
    name: 'rohan',
    age: 22
}

function handleObject(anyobject){
    console.log(`user may come to say ${anyobject.name} and ${anyobject.age}`);
}
//console.log(handleObject(user));

handleObject({
    name: "ROhan",
    age: 3
})

//Now lets learn array

const myNewArr = [142312,32432,5456,456]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([123,123,31,2,3,2,]));





