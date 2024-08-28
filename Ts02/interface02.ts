// We also can use one interface which can be used in another interface

//example



interface Person{
    name:string,
    age:number,
    job:string,
    address:Address
}

interface Address{
    city:string,
    state:string,
    pincode:number
}


function profile(seeker:Person):string{
    return `Name is ${seeker.name} and age is ${seeker.age} and job is ${seeker.job} and belongs to ${seeker.address.city},${seeker.address.state},${seeker.address.pincode}`
}

console.log(profile({
    name:"shantanu",
    age:22,
    job:"Software Engineer",
    address:{
        city:"bbsr",
        state:"odisha",
        pincode:7503834
    }
  }));

  //output
  
 // Name is shantanu and age is 22 and job is Software Engineer and belongs to bbsr,odisha,7503834

 