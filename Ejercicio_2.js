var burbuja = (arreglo = [9,3,5,1,7,4,8]) => {
    for(i=0;i<(arreglo.length-1);i++)
	for(j=0;j<(arreglo.length-i);j++){
		if(arreglo[j]>arreglo[j+1]){
		     aux=arreglo[j];
			 arreglo[j]=arreglo[j+1];
			 arreglo[j+1]=aux;
		}
	}
	return arreglo
}