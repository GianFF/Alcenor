var x = document.createElement('script');
x.src = 'file:///home/gian/Projects/Alcenor/javascripts/map.js';
document.getElementsByTagName("head")[0].appendChild(x);

x.onload = main;



function main(){
    $(document).ready(function(){
        new MyMap();
        var modal = new Modal();
        modal.show();
        new Catalog();
        new Dropdawn();
        new Carrousel('.carrousel_images', 3);
        new Carrousel('.carrousel_servicios', 1);
    });
}
