/*function Student(first , last , age , cls){
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
    console.log(student2);*/


    // ----------------------------------------------------------------------------------------------------------------------

    //forgot to add in OCF now through "prototypes" we can add more  methods and properties later below
    //"Prototype" is a senior level class which inherits all other classes

    // ----------------------------------------------------------------------------------------------------------------------


    function Student(first , last , age , cls){
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.cls=cls;
        }
        Student.prototype.nationality="Pakistani";
        Student.prototype.name=function(){
            return this.firstName+" "+this.lastName;
        }
        var student1=new Student("Hufsa" , "Hanif" , 27 , 5);
        var student2=new Student("Aasiya" , "Hanif" , 20 , 1);
        
        console.log(student1.name());
        console.log(student2);





