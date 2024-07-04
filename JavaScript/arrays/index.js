// creation of an array

let numbers = [ 1,3,4,5,6];
console.log(numbers);

// Instertion in Array
// 1. End --> numbers.push
// 2. Middle --> numbers.splice
// 3. Start  --> numbers.unshift

numbers.push(9);
console.log(numbers);

numbers.unshift(8);
console.log(numbers);

numbers.splice(2 , 0 , 'a', 'b', 'c');
console.log(numbers);

// searching

console.log(numbers.indexOf(4));

console.log(numbers.includes("d"));

console.log(numbers.indexOf(2, 4));

// array of objects

let courses = [
    {num: 1, name: 'Divya'},
    {num: 2, name: "Neha"}
]

console.log(courses);

// to search any oject is or compare we use call by refrence using find function

// let course= courses.find(function(course){
//     return course.name =='Neha'
// });

// console.log(course);

// another way to write a function
let course= courses.find(course=> course.name =='neha');

console.log(course);

// removing an element in array

let nums = [1,2,4,6,8,10];

//1. remoing end = nums.pop()
// 2. begining  = nums.shift()
// 3. Middele = nums.splice(2,1)
nums.pop();
nums.shift();
nums.splice(2,1);
console.log(nums);

// emptying an array

let nums2 = nums;
nums.length = 0;
console.log(nums);
console.log(nums2);

// combining & slicing

let first = [1,2,3];
let second = [4,5,7];

// let combined = first.concat(second);
let combined =[...first,...second]
console.log(combined);

let marks = [10,20,30,40,50,60,70,80];
console.log(marks);
let sliced = marks.slice(2,6);
console.log(sliced);

let assnums = [30,50,20,10];
console.log(assnums.sort());
console.log(assnums.reverse());

// filter message
let wholenums= [1,2,-3,-4];
let filtered =wholenums.filter(function(value){
    return value >= 0;
});
console.log(filtered);

// Mapping arrays
let stdnums = [7,8,9];
let att= stdnums.map(function(values){
    return 'students_rollno ' + values;
});
console.log(att);

// mapping with objects
 let numeric=[1,2,-6,-9];
 let item = numeric
            .filter(val => val >=0)
            .map(nums=>
    obj = {val: nums}
 );
 console.log(item);

//  const x =[1,2,3];
//  x.push(4);
//  console.log(x.length);

 let x =5;
function foo(){
    let x =10;
    console.log(x);
}
foo();
console.log(x);


const x1 = [1,2,3];
x1.forEach(function(element){
    console.log(element*2);
});

let x2 =0;
for(let i =0; i<5;i++){
    x2+=i;
}
console.log(x2);