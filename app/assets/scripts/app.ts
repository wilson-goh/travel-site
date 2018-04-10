// var Person = require("./modules/Person");
//import Person from "./modules/Person";

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
// e

let kb = new Person("kb", "white");
// kb.greeting();
// var kbg : Me = new Me("kbgts", "green");
kb.greeting();


// IIF
/*
((name)=>{
console.log("test IIF "+name);
})("KB");
*/
// console.log("webpack tes running");
/*
import MobileMenu from "./modules/MobileMenu";
var mobileMenu = new MobileMenu();
*/
