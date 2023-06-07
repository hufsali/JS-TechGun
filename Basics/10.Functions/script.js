/*to write maths table normally
for(i=1 ; i<=10 ; i++){
    document.write(`2 x ${i} =${2*i}`);
    document.write("<br>");
}*/

/*--------------------------------through function one table(2)--------------------------------

// through function, we dont have to repeatedly write the whole code, we just call the function

function MulTable(){
    for(i=1 ; i<=10 ; i++){
        document.write(`2 x ${i} =${2*i}`);
        document.write("<br>");
    }

    document.write("<br><br>");
}

MulTable();
document.write("Hello <br>");
document.write("<br>");
MulTable();*/

// ----------------------------------for multiple or different tables-----------------------------------

function MulTable(){
    for(i=1 ; i<=10 ; i++){
        document.write(`2 x ${i} =${2*i}`);
        document.write("<br>");
    }

    document.write("<br><br>");
}

MulTable();
document.write("Hello <br>");
document.write("<br>");
MulTable();