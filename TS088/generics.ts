//GENRICS
//generics refer to a programming conbept that allows the creation of classes ,interfacs or methods that can work with diffrent data types maintaing type safety.
// generics provide way to write reusable code that can operate on various data types without sacrifcing type checking at compile time



//returning  two types in array

type hero = (string|number)[];

function superhero (arr:hero):(string|number){   

    return arr[1]
}

let an =  superhero (["ironman","batman"])
let an2= superhero ([1,2])//2

console.log(an);
//an2.toLocaleCase....
// Property 'toLocaleCase' does not exist on type 'string | number'.'
 //to overcome this we can have  diffrent fuctions but is not a good way

 //generic fuction

function marvel<T>(arr:T[]){
    return arr[2]
}

let heros= marvel(["thor","ironman","spiderman"])
let heros2 = marvel([1,2,3])

console.log(heros);//spiderman

//now we can write
heros.toLowerCase()


//and also we can explicitly wrtite as

//let heros= marvel <string> (["thor","ironman","spiderman"])
//let heros2 = marve l<number> ([1,2,3])


// it makes types more strict


//swap fuction
//same types
function swap<T>( a:T, b:T):[T,T]
{
return [b,a]
}

let ans = swap(1,2)
let ans2 = swap("1","2")

//fuction have diffrent types
//we have to give  2templates for 2 diffrent types e.i T,U

function swap2 <T,U>(a:T,b:U):[U,T]{
    return [b,a]
}

let val= swap2(1,"2");//string , number
let val2 = swap2(1,true)//number, boolean
