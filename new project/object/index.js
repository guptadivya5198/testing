// create Object

// let rectangle ={
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log("Drawing rectangle");
//     }
// };

// // factory function

// function creatrectangle(length,breadth){
//     return rectangle ={
//         length,
//         breadth,
//         draw: function(){
//             console.log("drawing rectangle");

//         }
//     };
// }
  
// let rectangleObj1 = creatrectangle(5,4);
  
// let rectangleObj2 = creatrectangle(3,4);
  
// let rectangleObj3 = creatrectangle(2,4);

// constructor function

// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw= function(){
//         console.log('drawing');
//     }
// }

// // object creation using constructor

// let rectangleObject = new Rectangle(4,6);

// // rectangleObject.color = "yellow";
// // console.log(rectangleObject);

// // delete rectangleObject.color;
// // console.log(rectangleObject);


// // object cloning

// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let dest ={};

// for(let key in src){
//    dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

// object #2

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 ={value:25};

// let dest = Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);

// objec #3

let src = {
    a:10,
    b:20,
    c:60
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);






