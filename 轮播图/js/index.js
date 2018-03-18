requirejs.config({
    paths:{
        jquery:'jQuery-3.3.1'
    }
});
require(['carousel'],function $(Carousel) {
    var c1 = new Carousel;
    var settings1 = {
        imgArr:['../image/1.jpg','../image/2.jpg','../image/3.jpg','../image/4.jpg'],
        speed:500,
        bodyStyle:'square',
        selector:'#div1'
    }
    c1.init(settings1);
});
