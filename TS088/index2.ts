//returning  two types in array

type carr = (string|number)[];
// it can be done in two types
//function element (arr: (string|number)[]):(string|number){   
// is is a good way-
function element (arr:carr):(string|number){
    return arr[1]
}

let model1 =  element (["suzuki","kia"])//kia
let model3 = element ([1,2])//2

console.log(model3);
//model1.toLocaleCase() giving error

// Property 'toLocaleCase' does not exist on type 'string | number'.' ...it showing 2 types
 //to overcome this we can have  diffrent fuctions but is not a good way
 //so we use generics 

//generics

function element1 <T>(arr: T[]){
    return arr[0]
}
console.log( element1(["1","2"]));//string array
console.log( element1([1,2]));//number array



 