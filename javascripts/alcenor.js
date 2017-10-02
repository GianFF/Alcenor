var x = document.createElement('script');
x.src = 'file:///home/gian/Projects/Alcenor/javascripts/map.js';
document.getElementsByTagName("head")[0].appendChild(x);

x.onload = main;


function main(){
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
    $(document).ready(function(){
        new Dropdawn();

        new ImageComponentComposer('#sistemas_de_carpinteria').compose(sistemasDeCarpinteriaComponents);
        new ImageComponentComposer('#fachadas_integrales').compose(fachadasIntegralesComponents);

        new Carrousel('.carrousel_images', 3);
        new Carrousel('.carrousel_servicios', 1);

        new Catalog();
        new MyMap();
    });
}
