// Interface

// In TypeScript, an interface is a way to define the structure of an object.
// It acts as a contract that specifies what properties and methods an object should have.
// This helps ensure that objects conform to a particular shape, which improves code quality and maintainability.

// An interface is defined using the keyword interface, followed by the name of the interface and a list of its properties and methods.



export function greet(person:{
    name:string;
    age:number
  }):string{
    return "hello mr " + person.name + " your age is " + person.age;
  }
  
  console.log(greet({
    name:"shantanu",
    age:23
  }))

 // let us use interface

 //when use an interface 1stletter should be in capital letter

 // Create an object that conforms to the Person interface
 interface Person{
  name:  string;
  age: number;
}

// Function using the Person interface
export function greett(person:Person):string{
  return "hello mr " + person.name + " your age is " + person.age;
}
//to use is complex 
/*export function greett(person:Person):string{
  return "hello mr " + " your age is " + person.age;
}*/

console.log(greett({
  name:"shantanu",
  age:23
}))
////output  = hello mr shantanu your age is 23

// Using interfaces in TypeScript classes allows you to define contracts for the shape of an object, which the class must adhere to.
// This ensures that the class implements all the properties and methods specified in the interface.
