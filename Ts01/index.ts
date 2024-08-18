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

function  calculatedsum1 (a:number, b:number,
     type: "sum" |"sub"| "mul" |"div" //type:string=> if any send random string value it will  run so strict typings is done
    ):number{
if(type==="sum"){
    return a+b;
}
if (type==="sub") {
    return a-b;
}
if (type==="mul") {
    return a*b ;
}
if (type==="div") {
    return a/b;
    
}
return -1;
}

const asw = calculatedsum1(3,2 ,"mul") //if will give wrong argument it will show error
console.log(asw);
//typscript throws the compilation error and js throws the  run time error

// Typescript complier does't run or execute code  it only checks the type is correct or not
// 1st it takes input of the index.ts  and checks the type is correct or not then only it  convert it into the js and then the js compiler compiles it
// so the code is not executed untill the types are written.
 // the typescript throws a compilation errors if the types are not written.
 //typecript is Development tool and helps for better code with less errors