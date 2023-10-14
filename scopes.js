//what is closers => to ans that you need to know dom that means how we menipulate html web page through javascript. 

function one(){
    const username = "Rohan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //as the error being called two() didnt executed
    two()
}
one()

if(true){
    const username = "Rhh"
    if(username === "Rhh"){
        const name = "HI"
        console.log(name + username);
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ interesting ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//we have a function just do function

function addone(num){
    return num + 1
}
addone(5);

//=> Cannot access 'addTwo' before initialization. because we are storing in a variable. It is hoisting
addTwo(8);
const addTwo = function(num){
    return num + 2
}

