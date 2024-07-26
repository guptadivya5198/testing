class User{
    constructor(username){
        this.username = username
    }
    
    static logMe(){
        console.log(`Username is ${this.username}`);
    }
    
    logIn(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username} `);
    }
}

const chai = new Teacher('chai','chai@gmail.com','123')

chai.addCourse()

const masalachai = new User('masalachai')
masalachai.logIn()

console.log(chai instanceof User);
chai.logMe()