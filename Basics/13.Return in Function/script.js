/* ------------------to not print, but only operate and keep by storing in a variable (digit etc)-------------------------------

function add(a , b){
  let d= a+b;
 return d; //what ever written in return ,would become output
}
let c=add(5 , 6);

document.write(c);*/

/*---------------------------------------------to return an array----------------------------------------------------

function add(a , b){
    let d= [2 , 3 , 4]; //to return multiple value store it in return.
   return d; //can not write multiple return. when it finds first return it stops execution.
  
 } let c=add(5 , 6);
  
  document.write(c);*/

//   -----------------------------------------to compare-------------------------------------------------------------
function compare(a , b){
    let d= [2 , 3 , 4]; //to return multiple value store it in return.
  if(a>b){
    return 1;
  }
  else if(b>a){
    return -1;
  }else{
    return 0;
  }
  
 } let c=compare(6 , 6);
  
  document.write(c);