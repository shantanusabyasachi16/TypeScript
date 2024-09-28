"use strict";
//  function addTwo (num:number){
//     return num+2
//  }
//  function getvalue (val :string){
//     return val.toLowerCase
//  }
Object.defineProperty(exports, "__esModule", { value: true });
//  function Signup(name:string, email:string, password:boolean){
//  }
//  let loginuser =(name:string, email:string, isPaid:boolean =false) =>{}
//  addTwo(5)
//  getvalue("DUGU")
//  Signup("shantanu","shantanu@gmail.com",true)
//  loginuser ("dugu","dugu@gmail.com")
function addTwo(num) {
    //return num+2
    //return "hello" // it will still work
    //too avoid this we have to give a type to the function itself
    return num + 2;
}
function getvalue(val) {
    return val.toLowerCase;
}
function Signup(name, email, password) {
}
var loginuser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var userss = addTwo(5);
getvalue("DUGU");
Signup("shantanu", "shantanu@gmail.com", true);
loginuser("dugu", "dugu@gmail.com");
// function getuserss (myVal:number):string{
// if (myVal>7) {
//     return true
// }
// return '200 ok'
// }
//here we are getting more than one type
//in arrow function
var getdataa = function (name) {
    return "";
};
//so here the typscript  automaticaly detets it is string or a number
var cars = ["thar", "punch", "fortuner"];
//const  cars =[1,2,3]
cars.map(function (cars) {
    return "car is ".concat(cars);
});
