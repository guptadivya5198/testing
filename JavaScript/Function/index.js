console.log("Function in Js");

// function declaration
function run(){
    console.log("running");
}

// Function call or invoke
run();

//Named function assignment declaration

let stand=function walk(){
    console.log("walking");
}

// function call
stand();

// anonymous function assignment
let stand2 = function(){
    console.log("walk");
}
 
let jump =  stand2;
jump();