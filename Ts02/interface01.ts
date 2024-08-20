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

 interface Person{
  name:  string;
  age: number;
}

export function greett(person:Person):string{
  return "hello mr " + person.name + " your age is " + person.age;
}

console.log(greett({
  name:"shantanu",
  age:23
}))
