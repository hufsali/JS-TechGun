 /*let str='hufsa \t hanif'; to add double space
 let str='hufsa \n hanif'; to add space between
 let str='hufsa \' hanif';
 let str='hufsa \\ hanif';
 let str="hufsa \" hanif";
let str="hufsa  ";
let str2="hanif";
 let greet=`hi ${str}`;
 console.log(str.length); to find length of value.
 console.log(str[3]); to output a specific character.
console.log(str+str2);*/
/*----------------------------
let str="Hufsa Hanif";
if("Hufsa Hanif"==str){
console.log("Equal");
}else{
    console.log("Not Equal");
}*/
// __________________concat to add things_________________
/*let str="Hufsa ";
let str2="Hanif";
let str3=str.concat("was " ,str2);
console.log(str3);*/
/* __________________to extract substring______________________
let str="This is Java Script Tutorial. It is a good tutorial";
let substring= str.substr( 8, 20);
console.log(substring);
let substring="This is Java Script Tutorial. It is a good tutorial";
let substring1= str.substring( 8, 28);
console.log(substring1);*/
/*_____________to find position indexOf________________________
let str="This is Java Script Tutorial. It is a good tutorial";
let position= str.indexOf('is' ,6);
console.log(position);
--------------------to find from end--------------------
let str="This is Java Script Tutorial. It is a good tutorial";
let position= str.lastIndexOf('iss'); iss is not present, it will output -1
console.log(position);*/
/* ______________________removing white spaces__________________
let str=" This is Java Script Tutorial. It is a good tutorial. ";
 let trimedStr=str.trim();.......trimStart ya trimEnd use ho skty sirf start ya sirf end k lye
console.log(trimedStr);
console.log(str);*/
/* _____________________________to capitalize_______________
let str=" This is Java Script Tutorial. It is a good tutorial. ";
 let trimedStr=str.toUpperCase(); isi trha toLowerCase
console.log(trimedStr);
console.log(str);*/
/*_______________________________replace_______________________
let str=" This is Java Script Tutorial. It is a good tutorial. ";
 let trimedStr=str.replace('good' , 'the best'); 
console.log(trimedStr);
console.log(str);*/
// ___________________________include word is present or not____________________________
let str=" This is JavaScript Tutorial. It is a good tutorial. ";
let trimedStr=str.includes('Java');
console.log(trimedStr);
console.log(str);

 

