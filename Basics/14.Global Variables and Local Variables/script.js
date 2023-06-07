let car="Audi"; //Global Variable (variables outside the function)
//global can be executed anywhere inside or outside function
//let car="Tata"

function add(){
let result=33;//Local Variable(variable inside function are local)
// yeh sirf apnay function k lye local hy
console.log(result);
}

function sub(){
    let result=50;
    console.log(result);
    //many same name local variables can be defined. first on deleted after its loop ends
    }//but global variables must have different names.can not be declared twice.

add(); 
sub();
console.log(car);
// benefit of local var is that they can be declared many times.
// draw back is that it can be used for its function only
// -----------------------------------------------------------------------
//benefit of global variable is that it can be used anywhere inside or outside
//draw back of global variable is it can not be declared twice with same name.
