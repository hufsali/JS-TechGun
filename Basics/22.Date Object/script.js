// compare date.......before after date...to calculate hours between...... to calculate someone's age.
//let x="2021-01-25";  this i snot a defined formate . user can do in a different way

/*_______________________________________to find compared Date & Time___________________________________________

    7 parameters of Date(year , month , day , hour , minute , second , milisecond)
  let x = new Date      (2018 ,  11   , 13  ,  10  ,  33    ,  56    , 7   );
  console.log(x); */




//   -----------------------------------Get Function-------------------------------------------------------------





/*________________________________________to  get time separately________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getTime());   it displays time in miliseconds*/

/*________________________________________to get year separately_________________________________________________

let x = new Date      ( 2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getFullYear());  */

/* _______________________________________to get month___________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getMonth());  */

/* _______________________________________to get Date____________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getDate());  */

/* _______________________________________to get Hours____________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getHours());  */

/* _______________________________________to get Minutes____________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getMinutes());  */

/*_______________________________________to get Seconds____________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getSeconds());*/

/*_______________________________________to get Day________________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
console.log(x.getDay()); */





// ---------------------------------------Set Function-------------------------------------------------------------





/* _____________________________________________change Year________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
x.setFullYear(2020);
console.log(x); */

/* _____________________________________________change Month________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
x.setMonth(2);
console.log(x); */

/* _____________________________________________change Date________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
x.setDate(2);
console.log(x); */

/* _____________________________________________change Hour________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
x.setHours(2);
console.log(x); */

/* _____________________________________________change Minutes________________________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
x.setMinutes(2);
console.log(x); */

/* _____________________________________________change Seconds and Year_______________________________________________

let x = new Date      (2018 ,  11  , 13 ,  10 ,  33   ,  56   , 7   );
x.setSeconds(2);
x.setFullYear(2020);
console.log(x); */

 



// ---------------------------------------More operations---------------------------------




/* ________________________to calculate some days after date from recent__________________

let x=new Date("October 13 , 2018 11:12:33");
let y=new Date("October 13 , 2018 11:12:33");
 y.setDate(x.getDate() + 50);   //first fetch recent date then add as much you want
console.log(x);
console.log(y);*/

// ________________________________to compare two dates___________________________________

let x=new Date("October 13 , 2024 11:12:33");
let y=new Date();
 
if(y>x){
  console.log("x is past date");

}else if(x>y){
  console.log("x is future date");

}else{
  console.log("x is same date");
}

 























































