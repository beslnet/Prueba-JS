function Telefono(numero, marca, color) {
	//propiedad
	this.numero = numero
	this.marca = marca
	this.color = color
	this.contador_llamadas = 0;
	//metodo
	this.marcar = function(){
		this.contador_llamadas += 1;
	}
}

var iPhone = new Telefono(73798921, "iPhone", "Silver");
var SIII = new Telefono(83291020, "SIII", "Yellow");
var HTC = new Telefono(92022020, "HTC", "Gold");

var arreglo = [iPhone, SIII, HTC];

console.log(arreglo);