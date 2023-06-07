//Object
//function associated with object is called Method

//Four ways to make method

// -----------------1---------------------

/*let person={
        firstName:'Hufsa' ,
        lastName :'Hanif'
        };
        person.age=27;
   person.sayHello=function(){
    console.log("Hello !");
   }
   person.sayHello();*/

//-------------------2---------------------

/*let person={
    firstName:'Hufsa' ,
    lastName :'Hanif'
    };
    person.age=27;
   function greet(){
    console.log('Hello !');
   }
  person.sayHello=greet;
   person.sayHello();*/

//-------------------3----------------------

/*let person={
    firstName:'Hufsa' ,
    lastName :'Hanif' ,
    sayHello :function () {
        console.log("Hello !");
    }
    };
    person.age=27;
    person.sayHello();*/

// -----------------4----------------------

let person = {
  firstName: "Hufsa",
  lastName: "Hanif",
  sayHello() {
    console.log("Hello !");
  },
};
