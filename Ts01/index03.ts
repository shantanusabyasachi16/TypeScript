function sumadd (a:number, b:number){
    return a+b;
  }
  let anss = sumadd(3,4);
  console.log(anss)

// so typescritpt converts the code into javascript
// example we have the index02.ts file 
// and when we do the "tsc index01.ts" it will convert the code into index01.js
// and when we do the "node index01.js" it will execute the code
// and the output will be the sum of 3 and 4


// but to manipulate the convertion of typescript into jsvascript 
// we have something calles tsconfig.json
// and it is a file that contains the configurations of the convertion
// and it is located in the root of the project

// let us see the tsconfig.json file
// to create we have to go to the root directory of the project
// and type "tsc --init"
// and it will create the tsconfig.json file
// and it will contain the configurations of the convertion