//export
export class Person {
  name : string ;
  color : string ;
  constructor(name: string, color: string ){
    this.name = name ;
    this.color = color ;
  }


  greeting ():void{
    console.log("babel way name is "+this.name+ "my favor color is "+ this.color);
  }
}
// export Person ;

/*
function Person (name, color){
  this.name = name ;
  this.color = color ;
  this.greeting = ()=>{

    console.log("name is "+this.name+ "my favor color is "+ this.color);
  }
}
console.log("person");
*/
/*commonjs way or node wayt*/
// module.exports = Person ;
