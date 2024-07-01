// creation of an array

let numbers = [ 1,3,4,5,6];
console.log(numbers);

// Instertion in Array
// 1. End --> numbers.push
// 2. Middele --> numbers.splice
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
    {num: 2, name: "prateek"}
]

console.log(courses);

// to search any oject is or compare we use call by refrence using find function

// let course= courses.find(function(course){
//     return course.name =='prateek'
// });

// console.log(course);

// another way to write a function
let course= courses.find(course=> course.name =='prateek');

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
