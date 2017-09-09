
$(document).ready(function(){
	
	initMap();
	showModal();
	initializeHeaderDropdown();
	initializeCarrousel('.carrousel_images', 3);
	initializeCarrousel('.carrousel_servicios', 1);

	$('#show_catalog').click(function(e){
		debugger;
		window.open('assets/lineagold.pdf');
	});
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

		$('#modal_header').text(e.delegateTarget.textContent);
		$("#modal_image").attr("src", src);

		$('.ui.modal').modal('show');
	});
}