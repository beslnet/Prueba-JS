$(document).ready(function($) {
	
function Persona(nombre, email, sexo) {
	//propiedad
	this.nombre = nombre
	this.email = email
	this.sexo = sexo
}



$( "#formulario" ).submit(function( event ) {
	event.preventDefault();
	if($('#email').val() === ""){
		alert("Ingrese un email en la casilla respectiva!");
	}
	else{

	  var nombre = $('#nombre').val();
	  var email = $('#email').val();
	  var sexo = $('#sexo').val();

  //alert(nombre);
  persona = new Persona(nombre, email, sexo);
  personas = [];
  personas.push(persona);
  //console.log(persona);
  }
});

//var personas = new Telefono(73798921, "iPhone", "Silver");



});