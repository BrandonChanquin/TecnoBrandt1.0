
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


	// var html = document.querySelector("html");
	// var inicio = document.querySelector(".inicio");
	// var label = document.querySelector(".label");
	// var servicio = document.querySelector(".servicio");
	// var contacto = document.querySelector(".contacto");
	// var sobre_mi = document.querySelector(".sobre_mi");

	// inicio.addEventListener("click", close_menu, false);
	// servicio.addEventListener("click", close_menu, false);
	// contacto.addEventListener("click", close_menu, false);
	// sobre_mi.addEventListener("click", close_menu, false);
	// label.addEventListener("click", open_menu, false);


	// function close_menu(){
	// $(".nav").fadeOut(500).hidde();
	// // $(".nav").animate({left:"-100%"},500);
	// }

	// function open_menu(){
	// $(".nav").fadeIn(500).show();
	// // $(".nav").animate({right:"100%"},500);
	// }

	