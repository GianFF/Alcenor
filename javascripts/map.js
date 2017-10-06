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
    var self = this;

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

////////////////////// COMPONENTS ///////////////////////////

function ImageComponent(img_src, pdf_src, title){
    this.img_src = img_src;
    this.pdf_src = pdf_src;
    this.title = title;
}

ImageComponent.prototype.toHTML = function(){
    return "<div class='ui middle_aligned medium image'>"+
                "<img src=' "+this.img_src+" '>"+
                "<div hidden>' "+this.pdf_src+" '</div>"+
                "<h1 class='alcenor_sub_titles'>"+ this.title +"</h1>"+
            "</div>";
};

ImageComponent.prototype.bindClick = function (){
    var self = this;

    $('.ui.middle_aligned.medium.image').click(function(e){
        var clickedImageSrc = $(this).children()[0].src;
        self.chargePdfSrc($(this).children()[1].outerText);
        $('#modal_header').text(e.delegateTarget.innerText);
        $("#modal_image").attr("src", clickedImageSrc);

        $('.ui.modal').modal('show');
    });
};

// private

ImageComponent.prototype.chargePdfSrc = function (pdfSrc){
    pdf.src = pdfSrc.substring(1, pdfSrc.length-1)
};

///////////////////////////////////////////////////////////////////////

function ServicioComponent(img_src, description, title, htmlClass){
    this.img_src = img_src;
    this.description = description;
    this.title = title;
    this.htmlId = htmlClass;
}

ServicioComponent.prototype.toHTML = function(){
    return "<div id=' "+this.htmlId+" '>"+
                    "<h2 class='alcenor_titles' id='alcenor_title_rigth'>"+this.title+"</h2>"+
                    "<div class='ui grid container'>"+
                        "<div class='wide column'>"+
                            "<img class='i large left circular floated image' id='alcenor_nosotros' src=' "+this.img_src+" '>"+
                            "<p class='alcenor_text'>"+ this.description +"</p>"+
                        "</div>"+
                    "</div>"+
                "</div>";
};

////////////////////// COMPOSER ///////////////////////////

function ImageComponentComposer(container){
    this.container = $(container);
}

ImageComponentComposer.prototype.compose = function(components){
    var self = this;
    components.forEach(function(component) {
        self.container.append(component.toHTML());
        component.bindClick();
    });
};

///////////////////////////////////////////////////////////////////////

function ServicioComponentComposer(container){
    this.container = $(container);
}

ServicioComponentComposer.prototype.compose = function(components){
    var self = this;
    components.forEach(function(component) {
        self.container.append(component.toHTML());
    });
};
