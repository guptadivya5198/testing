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


function sum(){
   let total =0;
    for(let value of arguments)
    total= total+ value;
    return total;
}

let ans = sum(1,2,3,7,4,5,5,6,7,);
console.log(ans);
