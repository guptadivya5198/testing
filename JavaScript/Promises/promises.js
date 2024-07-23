 const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task complete");
        resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log("Promise one completed");
 })

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
 }).then(function(){
    console.log("Async task 2 resolved");
 })

 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Divya" , email: "chaiorcode@gmail.com"})
    },1000)
 })

 promiseThree.then(function(user){
    console.log(user);
 })

 let promiseFour = new Promise((resolve,reject) =>{
   setTimeout(()=>{
      let error = false;
      if(!error){
         resolve({username:"hitesh" , password:"123"})
      }
      else{
         reject("ERROR: Something went wrong")
      }
   },1000)
 })
 promiseFour.then((user) =>{
   console.log(user);
   return user.username;
 })
 .then((username) =>{
   console.log(username);
 })
 .catch((error)=>{
   console.log(error);
 })
 .finally(() =>{
   console.log('The Promise is either resolve or rejected');
 })

 let promiseFive = new Promise((resolve,reject) =>{
   setTimeout(()=>{
      let error = true;
      if(!error){
         resolve({username:"JavaScript" , password:"123"})
      }
      else{
         reject("ERROR: JS went wrong")
      }
   },1000)
 })

 async function consumePromiseFive(){
   try {
      const response = await promiseFive
      console.log(response);
   } catch (error) {
      console.log(error);
   }
 }

 consumePromiseFive()

// async function getAlluser(){
//   try {
//    const response= await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
//   } catch (error) {
//    console.log('E: ',error);
//   }
// }

// getAlluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
})
.then((data)=>{
   console.log(data);
})
.catch((error)=>{
   console.log(error);
})