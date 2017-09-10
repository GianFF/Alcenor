var pdf = null;

$(document).ready(function(){

	initMap();
	showModal();
	openCatalagoInNewWindow();
	initializeHeaderDropdown();
	initializeCarrousel('.carrousel_images', 3);
	initializeCarrousel('.carrousel_servicios', 1);
});

function initMap(){
  var uluru = { lat: -34.7292844, lng: -58.2811177 };
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function initializeHeaderDropdown(){
	$('.ui.dropdown.item').dropdown();
}

function initializeCarrousel(carrousel, slidesToShow){
 	var configuration = {
	  	dots: true,
			autoplay: true,
			infinite: true,
	  	accessibility: true,
	  	autoplaySpeed: 2000,
		  slidesToShow: slidesToShow,
		  slidesToScroll: slidesToShow
	}
	$(carrousel).slick(configuration);
}

function showModal(){
	$('.ui.middle_aligned.medium.image').click(function(e){
		var src = $(this).children()[0].src;
		chargePdfSrc($(this).children()[1].outerText);

		$('#modal_header').text(e.delegateTarget.textContent);
		$("#modal_image").attr("src", src);

		$('.ui.modal').modal('show');
	});
}

function chargePdfSrc(pdfSrc){
	pdf = pdfSrc.substring(1, pdfSrc.length-1)
}

function openCatalagoInNewWindow(){
	$('#show_catalog').click(function(e){	
		if(pdf===null){
			window.alert("Catálogo no encontrado");
			return;
		}
		window.open(pdf);
	});
}