/*Union types are used when a value can be more than a single type.
uch as when a property would be string or number
*/

let score: number| string = 55

score=88
score="88"

type User={
    name:string,
    id:number,
}

type Admin={
    username:string,
    id:number
}

let allmembers :User|Admin={ name:"shantanu", id:23, }
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