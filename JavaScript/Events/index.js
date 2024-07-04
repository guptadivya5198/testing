// function eventFunction(){
//     console.log('I have clicked here');
// }

// // add eventlistener
// document.addEventListener('click',eventFunction);

// //remove eventlistener
// document.removeEventListener('click',eventFunction);


// // event object

//  const content = document.querySelector('#wrapper');

//  content.addEventListener('click',function(event){
//     // console.log(event);
//  });

//  preventdefault

// let links= document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click',function(event){
//      event.preventDefault();
//      console.log("maza aya");
// });



// let myDiv = document.createElement('div');
// function paraStatus(event){
//     console.log('Para, '+ event.target.textContent);  
//   }
//   myDiv.addEventListener('click',paraStatus);

// for (let i=1; i<100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);



// const t1 =performance.now();
// for (let i=1; i<100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//   document.body.appendChild(newElement);
// }
// const t2 =performance.now();
// console.log("this took " + (t2-t1) + "ms");

// const t3 =performance.now();
// let myDiv = document.createElement('div');
// for(let i =1; i<100; i++){

//     let newlyElement = document.createElement('p');
//     newlyElement.textContent= 'This is para 2' + i;

//     myDiv.appendChild(newlyElement);
// }

// document.body.appendChild(myDiv);
// t4 = performance.now();
// console.log("This took" + (t3-t4) +'ms');


// fragment loop

// const t3 =performance.now();
// let fragement = document.createDocumentFragment();
// for(let i =1; i<100; i++){

//         let newlyElement = document.createElement('p');
//         newlyElement.textContent= 'This is para 2' + i;
    
//         fragement.appendChild(newlyElement);
//     }
// document.body.appendChild(fragement);
// const t4 =performance.now();
// console.log("This took" + (t3-t4) +'ms');

// Event Loop(Important)
// setTimeOut function


// setTimeout(function(){
//     console.log("Third");
// },5000);

// function sync(){
//     console.log('first');
// }
// sync();

// console.log("second");


// promise in js

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise 1");
//     },5000);

//     // resolve(1234);
//     reject(new error("Error occurs"));
// });
//     promise1.then((value) => {console.log(value)});
//     promise1.catch((error) => {console.log("Recived an error")});

// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise 2");
//     },3000);

//     resolve(1989);
//     reject(new error("Error occurs"));

// });
// console.log("First");

for(let i =1;i<=100; i++){
  let newElement = document.createElement('p');
  newElement.textContent = 'This is my para ' + i;
  document.body.appendChild(newElement);
}

let myDiv =document.createElement('div');
for(let i =1; i<=100; i++ ){
    let element =document.createElement('p');
    element.textContent = 'This is my para ' + i;
    myDiv.appendChild(element);
    
}
document.body.appendChild(myDiv);