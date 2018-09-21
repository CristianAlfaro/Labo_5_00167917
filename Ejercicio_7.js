var Bisiesto = (x = 2000) => {
    if ((x % 4 == 0) && ((x % 100 != 0) || (x % 400 == 0))){
        console.log("Si es bisiesto")
    }else{
        console.log("No es bisiesto")
    }
}
