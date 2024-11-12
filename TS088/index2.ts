//returning  two types in array

type carr = (string|number)[];
// it can be done in two types
//function car (arr:carr):(string|number){   
function car (arr:(string|number)[]):(string|number){
    return arr[1]
}

let model =  car (["suzuki","kia"])//kia
let model2 = car ([1,2])//2

console.log(model);
//model.toLocaleCase() giving error

// Property 'toLocaleCase' does not exist on type 'string | number'.'
 //to overcome this we can have  diffrent fuctions but is not a good way




