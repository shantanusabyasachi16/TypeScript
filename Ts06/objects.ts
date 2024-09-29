let user ={
    name:"shantanu",
    email: "xyz@gmail.com",
    isActive:true,
}

function createuser ({name:string, isPaid:boolean}){

}

//object which return object
createuser({name: "shantanu", isPaid: true})

function createCourse ():{name:string, price:number}{
return{name:"node.js" , price:2344}
}

//type is kwyword in ts
type User = {
    _id:string,
  name:string,
  email: string,
  isActive:boolean,
   readonly creaditcard: number //cannot change or manipulate the value
}
let Myuser: User={
    _id:"12345",
    name:"shantanu",
    email: "s.com",
    isActive:true,
    creaditcard:123344
}
Myuser.email = "ss@gmail.com"
//Myuser.creaditcard=



type CardNumber={
    cardNumber:string
}
 type cardDate ={
    cardDate: string
 }

 type CardDetails = CardNumber & cardDate  & {
    cvv:number
 }
export{}