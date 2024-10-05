/*Union types are used when a value can be more than a single type.
uch as when a property would be string or number
*/

let score: number| string = 55

score=88
score="88"

type User1={
    name:string,
    id:number,
}

type Admin={
    username:string,
    id:number
}

let allmembers :User1|Admin={ name:"shantanu", id:23, }
  allmembers= {username:"dugu",id:89}


  //
  
//    function getID(id:number| string){
//     console.log( `ID is ${id}`);
    
//    }
//    getID(3)
//    getID("45")


function getID(id:number| string){
      //id.toLowerCase()// it will not recognise because it is accepecting to datatypes.
   if (typeof id === "string") {
    id.toLowerCase()
   }
    }


    
//array
const data: number[]=[1,2,3]
const data2: string[]=["1","2","3"]

//const data3 : number|string[]=[1,2,3] // we have to keep it on ()
const data3 : (number|string)[]=[1,"2",3]