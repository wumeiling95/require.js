requirejs.config({
    paths:{
        jquery:'jQuery-3.3.1'
    }
})
define(['jquery'],function ($) {
    //轮播图
    function Carousel() {
        this.$container = $('<div class="carousel-container"></div>');
        this.$img = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$srrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span><</span>');
        this.$next = $('<span>></span>');
        this.defaultSettings = {
            imgArr :[],
            speed:1000,
            buttonStyle:'square',//'cirle'
            selector:document.body
        }
    }
    Carousel.protype.init = function (settings) {
        $.extend(this.defaultStatus,settings);

    };
    // protype添加属性和方法
    return Carousel;
})
