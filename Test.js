// closures 

function shubham(){
    let a = 45;
    
    function shruti(){
        let b = 44;
        console.log(a,b);
    }

    return shruti;
}

let shruFunc = shubham();

shruFunc();


// closures 

function shruFunc(){
    let a = 45; // this work is done by closures
    
    let b = 44;
    console.log(a,b);

}





