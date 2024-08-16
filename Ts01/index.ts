/**Why should I use TypeScript?
 * TypeScript is a superset of JavaScript that adds static typing to the language. This means that in TypeScript, you can specify types for variables, function parameters, return values, and other data structures. 
 * TypeScript code is then transpiled (converted) into plain JavaScript, which can run in any environment that supports JavaScript, such as web browsers or Node.js.
  
JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

 STATIC====Static typing refers to a type system in which the type of a variable is known at compile time rather than at runtime.
 This means that the types of all variables, function parameters, return values, and other data structures are explicitly 
 defined or inferred by the compiler before the code is executed. Static typing is used to enforce type constraints, catch errors early in the development process, and improve code 
*/

function calculatedsum (first: number, second: number):number{
    return first+second;
}
let sum=calculatedsum(2,8);
//let sum=calculatedsum(2,"8");Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(sum);
// output=10



//lets  create a calculater
//Functions has 3 argument