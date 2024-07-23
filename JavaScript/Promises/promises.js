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