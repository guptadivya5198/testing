 function User(username, loginCount, isLoggedIn){
    this.username =username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
 }

 const userOne = new User('hitesh', 12, true);
 const usertwo = new User('harry', 11, false);
 console.log(userOne);
 console.log(usertwo);