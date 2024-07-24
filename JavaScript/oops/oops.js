 function User(username, loginCount, isLoggedIn){
    this.username =username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
 }

 const userOne = new User('hitesh', 12, true);
 const usertwo = new User('harry', 11, false);
//  console.log(userOne);
//  console.log(usertwo);

//  prototype

function creatUser(username, score){
  this.username = username,
  this.score =  score
}

creatUser.prototype.increment = function(){
    this.score++
}
creatUser.prototype.printMe = function(){
   console.log(`price is ${this.score}`);
}
const chai =new creatUser('chai' ,25)
const tea = new creatUser('tea',125)

chai.printMe()

let myHeros =["thor", "spiderman"]

let heroPower = {
   thor:'hammer',
   spiderman: 'sling',

   getSpiderPwer : function(){
      console.log(`spidy power is ${this.spiderman}`);
   }
}
Object.prototype.hitesh = function(){
   console.log(`hitesh is present in all object`);
}
// heroPower.hitesh()
myHeros.hitesh()