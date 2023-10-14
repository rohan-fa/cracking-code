// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.




//code that execute 
// we divide it into two parts.
// 1.(through browser) call stacks (you have a memory how your functions will go, how that will execute, how get out of that function)
// 2. through browser we will paste JS code execute it visualize that how call slacks are using we dont need any diagram

// JS EXECUTION CONTEXT(whatever file we made how JS going to run it or execute it)
// JS runs works ,it runs in two phases.

// whatever code we give to JS {} = Global execution context(GEC)
// when it GEC created that refers one variable `This` inside of `this` GRC stays. different EC in node and the browser context. 
// JS is a single threaded. everything runs in a process


// GEC
// functional EC 
//in mongoose EVAL EVAL execution context


//~~~~~~~~~~ PHASES~~~~~~~~~~~~~`
// Memory creation phase
// execution phase

// 1. Global Execution (this)
// 2. memory phase (creation phare)(all variable are summed up and only store them)
// let val1 = 10
// let val2 = 5

// function addTwo(num1,num2){
//     let total = num1 + num2
//     return total
// };
// let result1 = addTwo(val1, val2);
// let result1 = addTwo(20, 3);

// SO in the memory phase
// val1 = undefine
// val2 = undefine

//addTwo definition 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//=> means (num1,num2){
//     let total = num1 + num2
//     return total
// };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// result1 = undefine
// result2 = undefine

// 3. Execution phase 
//val1 <- 10      
//val1 <- 5
            //~~~~~~~~~~~~~~~~~~~    
//addNum -> | new variable environment|
//          |       +                 |  
//          | Execution thread        |  
//          |~~~~~~~~~~~~~~~~~~~~~~~~~~

// for this new function
//let result1 = addTwo(val1, val2);

//~~~~~~~~~~~~~~~~~~~ call stacks~~~~~~~~~~~~~~~~~~~

