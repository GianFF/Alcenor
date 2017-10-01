var x = document.createElement('script');
x.src = 'file:///home/gian/Projects/Alcenor/javascripts/map.js';
document.getElementsByTagName("head")[0].appendChild(x);

x.onload = main;


function main(){
    var sistemasDeCarpinteriaComponents = [
        new SistemaDeCarpinteriaImageComponent("assets/lineaamericana.png", "assets/lineaamericana.pdf", "Línea Americana"),
        new SistemaDeCarpinteriaImageComponent("assets/lineagold.png", "assets/lineagold.pdf", "Línea Gold"),
        new SistemaDeCarpinteriaImageComponent("assets/lineatradicional.png", "assets/lineatradicional.pdf", "Línea Tradicional"),
        new SistemaDeCarpinteriaImageComponent("assets/linea6000.png", "assets/linea6000.pdf", "Línea 600"),
        new SistemaDeCarpinteriaImageComponent("assets/linea640.png", "assets/linea640.pdf", "Línea 640")
    ];

    $(document).ready(function(){
        new Dropdawn();

        var sistemasDeCarpinteriaComposer =  new SistemaDeCarpinteriaImageComponentsComposer();
        sistemasDeCarpinteriaComposer.compose(sistemasDeCarpinteriaComponents);

        new Carrousel('.carrousel_images', 3);
        new Carrousel('.carrousel_servicios', 1);

        new Catalog();
        new MyMap();
    });
}
