//to pull/lift
function hello(){

    console.log("Hello World");
}
hello();//call baad declare pehlay

// _________________________________hoisting in function_________________________________________
hello();
function hello(){

    console.log("Hello World");
} //call first , it first reads full code and then hoists it on the top then executes. it automatically lifts declaration up

// _________________________________hoisting in variable_________________________________________

x=7;  //assignment
console.log(x); //call
var x; //declaration oopr ly jata hy yeh declaration ko 

//_________________________________diff of var vs let and const________________________________________________

//var has now value output undefined 
console.log(y);
var y;
y=3;

/*but

let and const don't output undefined, they give error
console.log(z);
let z;
z=3;*/ // variable doesn'ot get initialised

//if we write dec and ass together it would become undefined  

 console.log(u);
 var u=9;

//_________________________no declaration still works in JS. it declares it khud sy_______________________________


x=4;
console.log(x); 

//____________________________no declaration doesn't work in JS when strict mode on_______________________________

"use strict"

p=9;
console.log(p); //it causes bug so JS provides strict mode, it doesn't allow to use any variable without declaration






































