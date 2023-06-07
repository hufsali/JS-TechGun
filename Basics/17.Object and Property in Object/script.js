/*  1.property........name , height , weight , mobile , adress
        car......brand , company , color , variant etc
        bank account.........limit , type
    2.Method/ Action/ Function.........eat , drink , run , talk , read
        koi ap py kry..........hair cut , teach you 
        car.........park , service , drive , manufacture
____________________________________________________________

Object in Programming
learnig management system(student, teacher , course)
banking systems(bank manager , acount , cashier , account holder)
.......all entities in a system are objects (as a noun)
.......99% programming is object based......whole management system

____________________________________________________________
object alson has name like variables
____________________________________________________________
array []    object{properties} 
____________________________________________________________*/

/*let person={
    firstName:'Hufsa' , //firstName is written in camel case
    // to apply space between properties : 'first Name' or put 'first-Name' (it fails in .notation...........use array like notation while accessing)
    lastName:'Hanif'
};
//two ways to access the properties of an object
 console.log(person.lastName);     //---- dot notation
//console.log(person['lastName']); ---- array like notation */


/*----------------------to see full object dont use property but only write object name-----------------------

let person={
firstName:'Hufsa' ,
lastName :'Hanif'
};
console.log(person);*/

/*-----------------------------to modify the value of a property--------------------------

let person={
    firstName:'Hufsa' ,
    lastName :'Hanif'
    };
    person.firstName='hafas';
    console.log(person);*/

/*------------------------------to add a new property--------------------------------

let person={
    firstName:'Hufsa' ,
    lastName :'Hanif'
    };
    person.age=27;
    person.firstName='hafas';
    console.log(person);*/

/* -----------------------------to delete a property---------------------------

let person={
    firstName:'Hufsa' ,
    lastName :'Hanif'
    };
    person.age=27;
    person.firstName='hafas';
    delete person.lastName;
    console.log(person);*/
// ________________________________________________________________________
//koi property defined hy ya nhi two ways to know 
// ________________________________________________________________________   
/*  1..write its name in console, appeared value shows its presence and undefined shows it is not present
    let person={
        firstName:'Hufsa' ,
        lastName :'Hanif'
        };
        person.age=27;
        person.firstName='hafas';
        delete person.lastName;
        console.log(person.height);*/

/* 2-------------------------------------------------
    
    let person={
        firstName:'Hufsa' ,
        lastName :'Hanif'
        };
        person.age=27;
        person.firstName='hafas';
        delete person.lastName;
        console.log('height' in person); //returns in true or false.
________________________________________________________________________________*/

//  ------------------------------------to access all properties of person object if we do not know how many and which properties are there in an object-----------------------------------
// -------------------------------iterating over properties of an object----------------------------------------

// 'for' loop with 'in' operator
let person={
    firstName:'Hufsa' ,
    lastName :'Hanif'
    };
    person.age=27;
    for(let key in person){
console.log(key + " : " + person[key]);
    }