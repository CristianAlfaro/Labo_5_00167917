var Palindromo = (a = "") => {
    if(a == a.split("").reverse().join("")){
        console.log("si es palindroma")
    } else{
        console.log("no es palindroma")
    }
}
