var Binario = (x = 10) => {
    aux = "";
    while(x > 0){
        aux = x%2 + aux;
        x = Math.trunc(x/2);
    }
    console.log(aux)
    
}
