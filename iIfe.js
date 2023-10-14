//Immediate invoke (immediate execution)function Expressions (IIFE)


// interview, because of global scope,the problem we face pollution related to the global scopes variables or any other declaration to avoid that we use iife

//functions execute immediately
function chai(){
    console.log(`DB CONNECT`);
}
chai();

// Same thing like previous
(function chai(){
    //named Iife
    console.log(`DB CONNECT`);
})();
//Same
//()()

((name) => {
    console.log(`BD COMMMENT 2 ${name}`);
})("Roghan")    //same as chai("rohan")

