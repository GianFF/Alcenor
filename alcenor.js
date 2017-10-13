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

////////////////////// COMPONENTS 2 ///////////////////////////

function ImageComponent2(img_src, description, title, titleStyle, htmlId){
    this.img_src = img_src;
    this.description = description;
    this.title = title;
    this.titleStyle = titleStyle;
    this.htmlId = htmlId;
}

ImageComponent2.prototype.toHTML = function(){
    return "<div id='"+this.htmlId+"'>"+
        "<h2 class='alcenor_titles "+this.titleStyle+"'>"+this.title+"</h2>"+
        "<div class='ui grid container'>"+
        "<div class='wide column'>"+
        "<img class='ui large left circular floated image' src='"+this.img_src+"'>"+
        "<p class='alcenor_text'>"+this.description+"</p>"+
        "</div>"+
        "</div>"+
        "</div>";
};


////////////////////// COMPOSER 2 ///////////////////////////

function ImageComponentComposer2(container){
    this.container = $(container);
}

ImageComponentComposer2.prototype.compose = function(components){
    var self = this;
    components.forEach(function(component) {
        self.container.append(component.toHTML());
    });
};

////////////////////// INITIALIZE COMPONENTS ///////////////////////////

var sistemasDeCarpinteriaComponents = [
    new ImageComponent("assets/lineaamericana.png", "assets/lineaamericana.pdf", "Línea Americana"),
    new ImageComponent("assets/lineagold.png", "assets/lineagold.pdf", "Línea Gold"),
    new ImageComponent("assets/lineatradicional.png", "assets/lineatradicional.pdf", "Línea Tradicional"),
    new ImageComponent("assets/linea6000.png", "assets/linea6000.pdf", "Línea 600"),
    new ImageComponent("assets/linea640.png", "assets/linea640.pdf", "Línea 640")
];
var fachadasIntegralesComponents = [
    new ImageComponent("assets/frenteintegral.png", "assets/frenteintegral.pdf", "Frente Integral"),
    new ImageComponent("assets/pieldevidrio.png", "assets/pieldevidrio.pdf", "Piel de Vidrio"),
];
var sistemasComplementariosComponents = [
    new ImageComponent("assets/baranda.png", "assets/baranda.pdf", "Barandas"),
    new ImageComponent("assets/techovidriado.png", "assets/techovidriado.pdf", "Cortinas de Enrollar"),
    new ImageComponent("assets/mampara.png", "assets/mampara.pdf", "Mampara de Baño"),
    new ImageComponent("assets/proximamente.png", "assets/proximamente.pdf", "Revestimientos"),
    new ImageComponent("assets/proximamente.png", "assets/proximamente.pdf", "Cortinas de enrrollar"),
    new ImageComponent("assets/tabiqueria.png", "assets/tabiqueria.pdf", "Tabiqueria"),
    new ImageComponent("assets/proximamente.png", "assets/proximamente.pdf", "Parasoles"),
    new ImageComponent("assets/frentedeplacard.png", "assets/frentedeplacard.pdf", "Frente de Placard"),
    new ImageComponent("assets/normalizados.png", "assets/normalizados.pdf", "Estructurales"),
];
var serviciosComponents = [
    new ImageComponent2("assets/servicio_pintado.png",
        "Es el proceso de recubrimiento con pintura en polvo por sistema electroestático y horneado en colores con terminación brillante, semimate, microtexturado y simil madera dicho proceso permite mayor espesor y uniformidad en la terminación del producto.",
        "Pintado",
        "alcenor_servicios_titles",
        "alcenor_servicio_pintado"),
    new ImageComponent2("assets/servicio_anodizado.png",
        "Al igual que el anodizado el proceso de electrocoloración forma una capa protectora de óxido de aluminio sobre la superficie de aluminio base, dicho proceso tiene la posibilidad de ser coloreado obteniéndose distintas tonalidades.",
        "Anodizado",
        "alcenor_servicios_titles",
        "alcenor_servicio_anodizado"),
    new ImageComponent2("assets/servicio_electrocoloracion.jpg",
        "Es un tratamiento electrolítico que brinda dureza superficial, resistencia a la abrasión y corrosión de agentes químicos y/o atmosféricos brindando una mayor vida útil.",
        "Electrocoloración",
        "alcenor_servicios_titles",
        "alcenor_servicio_electrocoloracion"),
    new ImageComponent2("assets/servicio_curvado.png",
        "",
        "Curvado",
        "alcenor_servicios_titles",
        "alcenor_servicio_curvado"),
    new ImageComponent2("assets/servicio_perfilesexclusivos.png",
        "Los Perfiles de Aluminio tienen múltiples aplicaciones. Alcenor ofrece su capacidad y experiencia en el desarrollo de productos para asesorar y apoyar al cliente para que su idea se lleve a cabo, únicamente trabajamos con materia prima Aluar y disponemos además de profesionales especializados.",
        "Diseño de perfiles exclusivos",
        "alcenor_servicios_titles",
        "alcenor_servicio_disenio")
];

$(document).ready(function(){
    new Dropdawn();

    new ImageComponentComposer('#sistemas_de_carpinteria_components').compose(sistemasDeCarpinteriaComponents);
    new ImageComponentComposer('#fachadas_integrales_components').compose(fachadasIntegralesComponents);
    new ImageComponentComposer('#sistemas_complementarios_components').compose(sistemasComplementariosComponents);

    new ImageComponentComposer2('#servicios_components').compose(serviciosComponents);

    new Carrousel('.carrousel_images', 3);
    new Carrousel('.carrousel_servicios', 1);

    new Catalog();
    new MyMap();
});