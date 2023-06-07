//  let book=["Physics","Maths","Com","Biology"];
/*----------------------------to add element in array-----------------------

book.push("English");         end(push)
book.unshift("English");      start(unshift)*/

/* ---------------------------to remove element from array------------------------

book.pop();                   from end
book.shift();                 from start
book.splice(1/2/3 , 1/2/3);   from between jitnay b htaanay hyn
book=[]; to empty array way 1
book.length=0; empty array way 2`   
console.log(book)*/

/*---------------------------to find position of an elememt-----------------------

let position=book.indexOf("Biology"); 
console.log(position);*/

/*----------------------------is it an array or not------------------------------------
 
let book ="Maths";
console.log(Array.isArray(book));*/

/*----------------------------to split each word in single array------------------

let text="This is a random text";
let wordarray =text.split(' ') ;
console.log(wordarray); */ 

/*----------------------------to eliminate a specific word from the text and separates text by it-----------------

let text="This is a random text";
let wordarray =text.split('s') ;
console.log(wordarray); */ 

/* -------------------------to write elements as a sentence--------------------------

let book=["Physics","Maths","Com","Biology"];
let wordarray=book.join(' ');
console.log(wordarray);*/

/*----------------------------to put a dash among them all---------------------------

let book=["Physics","Maths","Com","Biology"];
let wordarray=book.join('-');
console.log(wordarray);*/

/*------------------------to join multiple arrays---------------------------------

let book=["Physics","Maths","Com","Biology"];
let book2=["English" , "Persian"];
let book3=["Punjabi" , "Urdu"];
let newbook=book.concat(book2 , book3);
console.log(newbook);*/

/*----------------------------Multidimensional Array (Array in Array------------------------------

    let book=["Physics","Maths","Com","Biology"];
let bookwithpages=[
    ["Maths" , "300"] ,
    ["Physics" , "350"] ,
    ["Com" , "200"] , 
    ["Biology" , "500"]
];
let fetch = bookwithpages[1]//[0];
console.log(fetch);*/

/*----------------------------------loop through an array----------------------------------------

let book=["Physics","Maths","Com","Biology"];
let booklength=book.length;
for(i = 0;i < booklength; i++){
    console.log(`Element ${i} is ${book[i]}\n`);
}*/

// ------------------------------for each---------------------------------

let book=["Physics","Maths","Com","Biology"];
book.forEach(myfu);
function myfu(value){
console.log(value);
}

