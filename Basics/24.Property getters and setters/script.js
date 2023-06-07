/*var person ={
name:"Hufsa Hanif" ,
age:27

};
console.log(person.name);*/ 

/* _________________________to capitalize____________________

var person ={
    name:"Hufsa Hanif" ,
    age:27
    
    };
    console.log(person.name.toUpperCase());*/

/* _________________________to capitalize without writing 'toUpperCase through method___________________

var person ={
    name:"Hufsa Hanif" ,
    age:27,
    
    getname: function(){
        return this.name.toUpperCase();
    }
    };
    console.log(person.getname()); //method is called by name and paranthsis  */
    
/*______to capitalize without writing 'toUpperCase through getter (TO manipulate data before sending)___
// delete add change all abusive or unwanted words
var person ={
    name:"Hufsa Hanif" ,
    age:27,
    
    get getname(){
        return this.name.toUpperCase();
    }
    };
    console.log(person.getname);  //property is called by name only*/

    //____________________________________to capitalize when saving)____________________________________
   
var person ={
    name:"Hufsa Hanif" ,
    age:27,
    
   set setname(n){
        this.name=n.toUpperCase();
    }
    };
    person.setname="hufsa";
    console.log(person);  
    
    