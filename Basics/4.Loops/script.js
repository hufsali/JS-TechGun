//while doWhile for (loops) to repeat same thing again and again.
//while loop
/*document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');
document.write('Hufsa Hanif');*/
// ________________________________________loop easy example____________________________________________
/*let counter=1;
while(counter<=10){
    document.write('Hufsa Hanif');
    counter=counter+2;
}
*/
// _______________________________________loop real example (to add even numbers_____________________________________________
/*let counter=1;
let sum=0;
while(counter<=1000){
if(counter%2==0){
sum=sum+counter;
}
counter++;
}
document.write(sum);*/
// ------------------------------------------do while loop----------------------------------------------------------------------
/*let counter=1;
do{
    document.write('Hufsa Hanif');
    counter++;
    
}
while(counter<=10); */
// -------------------------------------------for loop--------------------------------------------------------------------------
/*for(let counter=1; counter<=10; counter++){
document.write("hufsa hanif");
}*/
// ------------
/*for(let counter=1; counter<=10; counter++){
    if(counter==5){
        continue;                                      
    }
    document.write(counter);
    document.write('<br>');
}*/
// ----------------------------------------------------nested loop---------------------------------------------------------------
outer:for(let counter=1; counter<=10; counter++){
    
    
    document.write(counter);
    document.write('<br>');
    for(let counter2=1; counter2<3; counter2++){
        if(counter==3){
            break outer;
        }
document.write("hufsa hanif");
document.write('<br>');
    }
}