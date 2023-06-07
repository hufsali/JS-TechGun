// --------------------------------type conversion------------------------------------------
// ----------------automatical conversion---------------------------------------------------
let type="5"+null; //is ko js khud sy null ko zero kr dy ga... ek string to dusray ko b string bna deta hy.
//plus add krta hy . minus add nhi krta so ye string ko b number me convert kr deta hy isi trha * b aur / b. chahay donu string hu.
console.log(type);
console.log(typeof type);
// -----------------------------------------functional--------------------------------------
//________________1. String()

/* number to string
let con=4;
console.log(typeof con);

let newtype=String(con);
console.log(typeof newtype);*/

// boolean to string
let x=true;
console.log(typeof x);
let x1=String(x);
console.log(typeof x1);
//________________2. Number()

 /*string to number
let num="32";
console.log(typeof num);
let newnum=Number(num);
console.log(typeof newnum);

// text string to number
let num="hello";
console.log(typeof num);
let newnum=Number(num);
console.log( newnum);*/

/*boolean to number
let bool=true;
console.log(typeof bool);
let newbool=Number(bool);
console.log(newbool);*/
//______________________3. Boolean()________________________

/* number to boolean
let bool=3;
console.log(typeof bool);
let newbool=Boolean(bool);
console.log(newbool);*/

//  string to boolean
let r="3";
console.log(typeof r);
let r1=Boolean(r);
console.log(r1);

/* text string to boolean
let r="hello";
console.log(typeof r);
let r1=Boolean(r);
console.log(r1);*/




