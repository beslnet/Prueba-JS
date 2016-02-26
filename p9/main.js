var arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arreglo(valor){
	arreglo2 = valor.slice();

	return arreglo2;
}

//arreglo2 = arreglo(arreglo1);
arreglo(arreglo1);
arreglo1[0] = 5;
arreglo2[3] = 12;
console.log(arreglo2);