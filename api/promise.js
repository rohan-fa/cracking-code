//promise is an object
//how to create promise? promise has to part resolve and reject

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task, 
    //DB calls, cryptography, networkCall, 
    setTimeout(function(){
        console.log('async task is');
    }, 1000)
})
//resolve directly connected with .then() . .then(callback function) this function automatically receives an argument. whos work is whichever work been done,that returns
promiseOne.then(function(){
    console.log('promis consume');
})