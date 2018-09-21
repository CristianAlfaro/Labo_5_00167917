var Fibonacci = (x = 5) => {
    if(x == 0 || x == 1){
        console.log(x);
    } else{
        a=0,b=1,c=0;
        console.log(a);
        console.log(b);
       for(let i= 0; i<x-2;i++){
        c=a+b; 
		console.log(c);
		a=b; b=c;
       }

    }
}

		
