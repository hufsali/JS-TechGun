/*------------------a function with no name -------------------------------
function (){
    console.log("Hello World");
}*/
/* ---------------------------------function Expression--------------------
let show= function (){
    console.log("Hello World");
};
show();*/
/*-------------------------------set time out------------------------------*/
//anonymous function is used to pass only once and is written in as a parameter
//computer memory waste na ho save krnyn me
setTimeout(function (){
    console.log("Hello World");
} , 3000);