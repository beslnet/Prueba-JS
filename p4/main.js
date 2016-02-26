$(document).ready(function($) {

$("#evento").click(function() {
	var elemento = parseInt($("li:last()").text());
	var color_texto = $('#input2').val();
	var contenido_input = $('#input1').val();
	if(contenido_input === ""){
		contenido_input = "No ingresaste nada";
	}

	if(color_texto === ""){
		color_texto = "black";
	}

	$("ul:last()").append("<li><span style='color:"+color_texto+";'>"+contenido_input+"</span></li>");	

});

$("#evento2").click(function() {
	var elemento = parseInt($("li:first()").text());
	//alert(elemento);
	$("li:first()").remove();
});
	
});