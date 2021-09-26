function factorial(number){
    let f = 1;
    if (number < 0) {
        return;
    }
    for (let i=1; i<=number; i++){
         f= f*i;
       
    }
    console.log(f);
    
}


factorial(4);