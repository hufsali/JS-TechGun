/*--------------------jb kuch b apply nhi kia to ye nichy k sb arguments autimatically 'arguments' me store ho jatay hyn . yaha py console open kr k dekha koi error nhi aya.
        
function add(){

    }
    add(5 , 7);
    add(5 , 7 , 8);
    add(8 , 6 , 4 , 2);*/

/*--------------------------to find the length of each individual argument given below---------------------------------

function add(){

console.log(arguments.length);
    
}
add(5 , 7);
add(5 , 7 , 8);
add(8 , 6 , 4 , 2);*/

/* ------------------------------to get each argument full in console--------------------------------------

function add(){

    console.log(arguments);
        
    }
    add(5 , 7);
    add(5 , 7 , 8);
    add(8 , 6 , 4 , 2);*/

/* ------------------------------to access any one argument from add function---------------------------------

function add(){

    console.log(arguments[1]);
        
    }
    // add(5 , 7);
    add(5 , 7 , 8);
    // add(8 , 6 , 4 , 2);*/

// --------------------------------doesnt add any argument------------------------------------

function add(){

    if(arguments.length==0){
    console.log("No argument passed!");
        }else{
            let sum=0;
            for(let i=0 ; i<arguments.length ; i++){
            sum=sum+arguments[i];
            }
            console.log(sum);
        }
    }
    let addition=add;
    
   // add(5 , 7); //add();  //add(5);
     add(5 , 7 , 8);
     addition(8 , 6 , 4 , 2);