console.log("Function in Js");

// function declaration
function run(){
    // console.log("running");
}

// Function call or invoke
run();

//Named function assignment declaration

let stand=function walk(){
    // console.log("walking");
}

// function call
stand();

// anonymous function assignment
let stand2 = function(){
    // console.log("walk");
}
 
let jump =  stand2;
jump();

// arrguments print object
function sum(){
   let total =0;
    for(let value of arguments)
    total= total+ value;
    return total;
}

let ans = sum(1,2,3,7,4,5,5,6,7,);
// console.log(ans);


// Rest operator

function add(nums,value,...args){
    console.log(args);
};

add(1,2,3,5,7,8);
console.log(add);

// default parameter
function intrest(p,r=5,y=9){
    return p*r*y/100;

}
// console.log(intrest(1000));

let person= {
    fName :'Love',
    lName : 'Babbar',
    get fullName(){
        return `${person.fName}    ${person.lName}`;
    },

    set fullName(value){
        if(typeof value !== String){
            throw new Error("you have not sent  string")
        }
        let parts = value.split(' ');
        this.fName =parts[0];
        this.lName = parts[1];

    }
};

try{

    person.fullName = true;
}
catch(e){
    alert(e);
}
// console.log(person.fullName);

l


