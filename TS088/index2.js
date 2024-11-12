//returning  two types in array
// it can be done in two types
//function car (arr:carr):(string|number){   
function car(arr) {
    return arr[1];
}
var model = car(["suzuki", "kia"]);
var model2 = car([1, 2]);
console.log(model);
