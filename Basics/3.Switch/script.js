// if input=1, "y" , "yes" output = continue...
// if input=0' "n" , "no" output = End...
let input;
input="yes";
/*if(input===1){
    document.write("continue...");
}
else if (input==="y"){
    document.write("continue...");
}
else if(input==="yes"){
    document.write("continue...");
} else if(input===0){
    document.write("End...");
}
else if(input==="n"){
    document.write("End...");
}
else if(input==="no"){
    document.write("End...");
}
else{
    document.write("your  statement is wrong...");
}*/

// _________________switch________________
// ===comparison
/*switch(input){
    case 1: //if(input===1)
document.write("continue");
break;
case "y": //if(input==="y")
break;
case "yes": //if(input==="yes")
document.write("continue...");
break;
case 0: //if(input===0)
document.write("end...");
break;
case "n": //if(input==="n")
document.write("end...");
break;
case "no": //if(input==="no")
document.write("end...");
break;
default:
   
document.write("continue...");
}*/
//__________________if else another way________________________
if (input===1 || input==="y" || input==="yes"){
    document.write("continue...");
}
if(input===0 || input==="n" || input==="no"){
    document.write("end...");
}

