// object creation
let rectangle ={
    length: 1,
    breadth: 8,

    draw: function(){
        console.log("Draw");
    }
};
//  factory function
function creatFactoryFunction(length, breadth){
    return rectangle ={
        length,
        breadth,
        draw: function(){
            console.log("Draw");
        }
    }; 
}
// object for factory function
let rectangleObj1 = creatFactoryFunction(4,5);
let rectangleObj2 = creatFactoryFunction(9,5);
let rectangleObj3 = creatFactoryFunction(8,3);

// constructor function
function Rectangle(len, bre){
    this.len = len,
    this.bre = bre,
    this.draw = function(){
        console.log("Constructor function");
    }
}

// object creaction 
let RectangleObject = new Rectangle(50,4);
// dynamic nature of object

RectangleObject.color = 'yellow';
console.log(RectangleObject);

delete RectangleObject.color;
console.log(RectangleObject);

// inside working of above
let react = new Function('leng', 'brea',`this.leng = leng,
    this.brea = brea,
    this.draw = function(){
        console.log("Constructor function");
    }`);

    // object creation

    let reactObj = new react(4,5);
    console.log(reactObj);

    // call by value
    let a1 =10;
    let b =a1;

    a1++;
    console.log(a1);

    console.log(b);


// call by refrence 

let a ={value:10};

function inc(a){
    a.value++;
}

inc(a);
console.log(a.value);

// for in loop use to itraite the all keys present in object

let rec = {
    length : 4,
    breadth: 1,
}
// keys are reflect through key keyword and values are through rec[key]
for (let key in rec){
    console.log(key, rec[key]);
}

// for-off loop is apply only itreable - arrays, maps

for (let key of Object.entries(rec)){
    console.log(key);
}

// checking the value is present in object or absent

if('breadth' in rec){
    console.log('present');
}
else{
    console.log('absent');
}

// object cloning

// clone #1
let src = {
    a:10,
    b:20,
    c:30
};
let dest ={};

for(let key in src){
    dest[key] = src[key];
}

console.log(dest);

// Ocject cloning #2 assign 
 
let source = {
    a:15,
    b:25,
    c:36
};
let desti = Object.assign({},source);
console.log(desti);

// object cloning #3
let sources = {
    a:20,
    b:45,
    c:16
};
let destin = {...sources};
console.log(destin);

// string primitve
let lastName = 'Babbar';
console.log(lastName);

// string object

let firstName = new String('Love');
console.log(firstName);

let message =`this is
' my ${lastName} '
 message`;
console.log(message);

// date
let date = new Date();
console.log(date);

let date2 =  new Date('June 20 2024 07:15');
console.log(date2);

let date3 = new Date(1997,11 ,1, 0);
console.log(date3);


