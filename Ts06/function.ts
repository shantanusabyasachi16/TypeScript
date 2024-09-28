//  function addTwo (num:number){
//     return num+2
//  }
//  function getvalue (val :string){
//     return val.toLowerCase
//  }

//  function Signup(name:string, email:string, password:boolean){

//  }
//  let loginuser =(name:string, email:string, isPaid:boolean =false) =>{}

//  addTwo(5)
//  getvalue("DUGU")
//  Signup("shantanu","shantanu@gmail.com",true)
//  loginuser ("dugu","dugu@gmail.com")


function addTwo (num:number):number{
    //return num+2
    //return "hello" // it will still work
    //too avoid this we have to give a type to the function itself
    return num+2
 }
 function getvalue (val :string){
    return val.toLowerCase
 }

 function Signup(name:string, email:string, password:boolean){

 }
 let loginuser =(name:string, email:string, isPaid:boolean =false) =>{}

 let userss=addTwo(5)
 getvalue("DUGU")
 Signup("shantanu","shantanu@gmail.com",true)
 loginuser ("dugu","dugu@gmail.com")


// function getuserss (myVal:number):string{
// if (myVal>7) {
//     return true
// }
// return '200 ok'
// }
//here we are getting more than one type
//in arrow function
const  getdataa = (name:string):string=>{
return ""
}


//so here the typscript  automaticaly detets it is string or a number
 const cars =["thar", "punch", "fortuner"]
 //const  cars =[1,2,3]

 cars.map( (cars):string=>{ // and for better syntax we should give the type
return `car is ${cars}`
 })


 //never it means it never return a value
// function error(errMsg:string):void{
//     console.log(errMsg);
    
// }
// instead of this we should user "never" for making errors more roboust 
function error(errMsg:string):never{
     // console.log(errMsg);
        throw new Error(errMsg);
 }
 export {}