// _______________________to make multiple objects of same properties but different values (normally)___________________________

/*var student1={
firstName:"Hufsa " ,
lastName:"Hanif" ,
age: 27 ,
class : 5 ,
}

var student1={
    firstName:"Asiya " ,
    lastName:"Hanif" ,
    age: 20 ,
    class : 1 ,
    }*/

/* __________________________________________________by Object constructor function_______________________________________________

function Student(first , last , age , cls){
this.firstName=first;
this.lastName=last;
this.age=age;
this.cls=cls;
}
var student1=new Student("Hufsa" , "Hanif" , 27 , 5);
var student2=new Student("Aasiya" , "Hanif" , 20 , 1);
console.log(student1);
console.log(student2);*/

/* ________________________________________________to add a new property partially in anyone object____________________________________________________

function Student(first , last , age , cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.cls=cls;
    }
    var student1=new Student("Hufsa" , "Hanif" , 27 , 5);
    var student2=new Student("Aasiya" , "Hanif" , 20 , 1);
    student1.nationality="Pakistani";
    console.log(student1);
    console.log(student2);*/

    /* ________________________________________________to add a new property in Student Object____________________________________________________

function Student(first , last , age , cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.cls=cls;
    }
    var student1=new Student("Hufsa" , "Hanif" , 27 , 5);
    var student2=new Student("Aasiya" , "Hanif" , 20 , 1);
    Student.nationality="Pakistani"; //aesa nhi ho skta
    console.log(student1);
    console.log(student2);*/

// ________________________________________________to add a new method in OCF i.e full name ____________________________________________________

function Student(first , last , age , cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.cls=cls;
    }
    var student1=new Student("Hufsa" , "Hanif" , 27 , 5);
    var student2=new Student("Aasiya" , "Hanif" , 20 , 1);
    student1.nationality="Pakistani";
student1.name=function(){
    return this.firstName+" "+this.lastName;
}
    console.log(student1.name());
    console.log(student2);

