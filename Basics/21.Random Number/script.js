//how to generate : pick a random number from program
//random is a method of Math object which is used to generate random number

/*let x=Math.random(); //it generates a random number among 0-1

console.log(x);*/

// ---------------------0-9-----------------------------
/*let x=Math.random()*10; 
0-10 tk k liye *11
0-13 *14.... so on
0-99 *100
console.log(x);*/

// ---------------------to remove point-----------------

/*let x=Math.floor(Math.random()*10); 

console.log(x);*/

// ---------------------for 1-10------------------------

/*let x=Math.floor(Math.random()*10)+1; //1-10

console.log(x);*/ 

//-----------------------to generate 15-25--------------

 //start from maximum number ot will generate 15-24

 function getRandom(min , max){
     let x=Math.floor(Math.random()*(max - min+1))+min; //to add 25 also min+1
return x;
 }
console.log(getRandom(15 , 25));


