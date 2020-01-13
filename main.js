//Value Type
let num1=20;
let num2=num1; //copy value

console.log(num2);
console.log(num1);

num2=30;
console.log(num2);

//Reference Type
let user=function(){
    this.fullName=undefined;
}

let userobj1=new user();
userobj1.fullName="Madhuri"; //copy Reference
let userobj2=userobj1;
console.log(userobj2.fullName);

userobj2.fullName="Ranjit";
console.log(userobj1.fullName);

let userobj3=new user();
userobj3.fullName="Vaibhav";
userobj1=userobj3;
console.log(userobj1.fullName);

userobj3.fullName="pratik";
console.log(userobj1.fullName);;


