
window.addEventListener('scroll', function(){
	
		var header = document.querySelector('header');

		header.classList.toggle('down', window.scrollY>0);
	})


$(document).ready(function(){
	

	$("#mensaje").hide();
	$("#mensaje_toggle").click(texto_on);
	$("#cerrar_mensaje").click(texto_off);

});
	
	function texto_on(){
		$("#mensaje").fadeIn(1000).show();
	}

	function texto_off(){
		$("#mensaje").fadeOut(1000).hidde();
	}

//! Codigo del menu responsive

let nav = document.querySelector(".nav");
let abrir = document.querySelector(".open");
let cerrar = document.querySelector(".close");

// acá lo hice con una funcion flecha
abrir.addEventListener("click", () => {
	nav.classList.add("visible");
})

//Acá lo hice con una funcion normal 
cerrar.addEventListener("click", cerrar_menu, false);

function cerrar_menu(){
	nav.classList.remove("visible");
}

//! codigo para que cuando den click en una seccion del menu se cierre el nav
let contacto = document.querySelector(".contacto");
let inicio = document.querySelector(".inicio");
let servicio = document.querySelector(".servicio");
let sobre_mi = document.querySelector(".selected");

contacto.addEventListener("click", menu_no, false);
inicio.addEventListener("click", menu_no, false);
servicio.addEventListener("click", menu_no, false);
sobre_mi.addEventListener("click", menu_no, false);

function menu_no(){
	nav.classList.remove("visible");
}
