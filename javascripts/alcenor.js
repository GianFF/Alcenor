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
        new ServicioComponent("assets/servicio_pintado.png",
            "Es el proceso de recubrimiento con pintura en polvo por sistema electroestático y horneado en colores con terminación brillante, semimate, microtexturado y simil madera dicho proceso permite mayor espesor y uniformidad en la terminación del producto.",
            "Pintado",
            "alcenor_servicio_pintado"),
        new ServicioComponent("assets/servicio_anodizado.png",
            "Al igual que el anodizado el proceso de electrocoloración forma una capa protectora de óxido de aluminio sobre la superficie de aluminio base, dicho proceso tiene la posibilidad de ser coloreado obteniéndose distintas tonalidades.",
            "Anodizado",
            "alcenor_servicio_anodizado"),
        new ServicioComponent("assets/servicio_electrocoloracion.jpg",
            "Es un tratamiento electrolítico que brinda dureza superficial, resistencia a la abrasión y corrosión de agentes químicos y/o atmosféricos brindando una mayor vida útil.",
            "Electrocoloración",
            "alcenor_servicio_curvado"),
        new ServicioComponent("assets/servicio_curvado.png",
            "",
            "Curvado"),
        new ServicioComponent("assets/servicio_perfilesexclusivos.png",
            "Los Perfiles de Aluminio tienen múltiples aplicaciones. Alcenor ofrece su capacidad y experiencia en el desarrollo de productos para asesorar y apoyar al cliente para que su idea se lleve a cabo, únicamente trabajamos con materia prima Aluar y disponemos además de profesionales especializados.",
            "Diseño de perfiles exclusivos",
            "alcenor_servicio_disenio")
    ];

    $(document).ready(function(){
        new Dropdawn();

        new ImageComponentComposer('#sistemas_de_carpinteria_components').compose(sistemasDeCarpinteriaComponents);
        new ImageComponentComposer('#fachadas_integrales_components').compose(fachadasIntegralesComponents);
        new ImageComponentComposer('#sistemas_complementarios_components').compose(sistemasComplementariosComponents);

        new ServicioComponentComposer('#servicios_components').compose(serviciosComponents);

        new Carrousel('.carrousel_images', 3);
        new Carrousel('.carrousel_servicios', 1);

        new Catalog();
        new MyMap();
    });
}
