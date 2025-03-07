/**Partial changes all the properties in an object to be optional. */

interface Todo{
    id:number
    completed:boolean
}

type upadatinput = Partial<Todo>;

/* it means

upadatinput=  {
id?        : number|undefined;
completed? :  boolean|undefined;
}
   */


//The Partial<T> utility type in TypeScript takes an interface (or type) T and makes all of its properties optional. So Partial<Todo> will create a new type where both id and completed are optional.

function updateTodo(id:number ,updates: upadatinput){

}

updateTodo(2,{

completed:false 
})


//Since updates is of type Partial<Todo>, only" completed "is provided, and "id" is optional.