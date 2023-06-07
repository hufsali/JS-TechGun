//object inside object
var user={

    id:101 , 
    email: "abc@gmail.com" , //baki data isi user ka kisi aur object me rakhna hy
    personalInfo:{
name:"Hufsa" ,
address:{
    address:"xyz" ,
    street:"vyu" ,
    country: "Pakistan" ,
}
    }
};
console.log(user.personalInfo.address.country);