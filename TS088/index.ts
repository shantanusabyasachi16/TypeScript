//arrray notaion
//(arr:number[]):number{  fuction returns number type
function addNumber(arr:number[]):number{ 
return arr[0]
}

let ans = addNumber([1,2,3]);
console.log(ans);

//anothertype

type numbarray= number[];
function addNumberr(arr:numbarray){
    return arr[0]
    }
    
    let answer= addNumberr([5,6,7]);
    console.log(answer);