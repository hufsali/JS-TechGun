// 'this' in object
let person={
    firstName: 'Hufsa' ,
    lastName: 'Hanif' ,
    sayHello() {
        //jb usi object me mojood function me usi object ko call krna hy to this sy b kam chalay ga
        console.log("Hello ! I am " +this.firstName+" and I have a "+ car.brand+" car");
    }
}
let car={
    brand:'Tata' ,
    model: 'Safari'
}
person.sayHello();