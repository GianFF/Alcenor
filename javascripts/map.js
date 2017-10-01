////////////////////// PDF ///////////////////////////

// Singleton
var pdf = {
    src: null
};


////////////////////// MAP ///////////////////////////

// Prototype Constructor
function MyMap() {
    var latLongCoordinates = this.initializeLatLongCoordinates();
    var map = this.initializeMapInPage(latLongCoordinates);
    this.initializeMarker(map, latLongCoordinates);
}

// private

// Prototype Methods
MyMap.prototype.initializeLatLongCoordinates = function() {
    return {lat: -34.7292844, lng: -58.2811177};
};

MyMap.prototype.initializeMapInPage = function (latLongCoordinates) {
    return new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: latLongCoordinates
    });
};

MyMap.prototype.initializeMarker = function (map, latLongCoordinates) {
    return new google.maps.Marker({
        position: latLongCoordinates,
        map: map
    });
};



////////////////////// MODAL ///////////////////////////

function Modal() {
}

// public
Modal.prototype.modal = $('.ui.middle_aligned.medium.image');

Modal.prototype.show = function (){
    self = this;
    this.modal.click(function(e){
        var clickedImageSrc = $(this).children()[0].src;
        self.chargePdfSrc($(this).children()[1].outerText);

        $('#modal_header').text(e.delegateTarget.textContent);
        $("#modal_image").attr("src", clickedImageSrc);

        $('.ui.modal').modal('show');
    });
};

// private

Modal.prototype.chargePdfSrc = function (pdfSrc){
    pdf.src = pdfSrc.substring(1, pdfSrc.length-1)
};


////////////////////// CARROUSEL ///////////////////////////

function Carrousel(carrousel, slidesToShow){
    var configuration = {
        dots: true,
        autoplay: true,
        infinite: true,
        accessibility: true,
        autoplaySpeed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow
    };

    $(carrousel).slick(configuration);
}

////////////////////// CATALOG ///////////////////////////

function Catalog(){
    $('#show_catalog').click(function (e) {
        if (pdf.src === null) {
            window.alert("Catálogo no encontrado");
            return;
        }
        window.open(pdf.src);
    });
}

////////////////////// DROPDAWN ///////////////////////////

function Dropdawn(){
    $('.ui.dropdown.item').dropdown();
}
