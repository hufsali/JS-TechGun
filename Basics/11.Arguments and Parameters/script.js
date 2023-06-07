/* -----------------------------passing one arguement function----------------------------------------
function MulTable(num){
    for(i=1 ; i<=10 ; i++){
        document.write(`${num} x ${i} =${num*i}`);
        document.write("<br>");
    }

    document.write("<br><br>");
}

MulTable(12);
document.write("Hello <br>");
document.write("<br>");
MulTable(5);*/
// here num is parameter and the value we passed (2&5) is parameter
function add(num1 , num2){
    document.write(num1+num2);
}
add(5 , 7);
// here num1 and num2 are tw parameters
