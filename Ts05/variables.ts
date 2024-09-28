// lets define a variable ony having string types
let greetings: string = "hi shantanu";

greetings.toLowerCase()
//greetings= true  //error
 //greetings= 6  //error
 //greetings.replace and it will only show thr methods associated with strings
console.log(greetings);

// number
//let userId: number = 334455.3
let userId = 334455.3// in number typescript can detect automatically it is number 

userId.toFixed()
// userId = "shantanu"// if we also don't define it will show error ... cannot no assign a string to it

// boolean
let isLoggedIn: boolean = false



// any variables

//we can use any if we don't want a type checking

//let hero; it is not a good practice
let hero: string;

function getHero(){
    return "thor"
    //return false
}

hero = getHero()



export {}