// ---------------------------------------alert-------------------------------------------------
// alert("Welcome");
// ---------------------------------------prompt------------------------------------------------
/*let age=prompt("Enter your name" , 20);
if( age !=null){
    document.write(`Your age is ${age}`);
}
else{
    document.write("age field was blank");
}*/
// --------------------------------------confirm------------------------------------------------
response=confirm("Are you sure, you want to delete?");
if(response){
document.write('deleted');
}
else{
    document.write(' not deleted');
}