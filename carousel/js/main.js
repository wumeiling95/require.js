require(['slider'],function (Slider) {
    var slider1 = new Slider();
    slider1.init();
    var settings = {
        arr:['image/1','image/2','image/3'],
        time:1000,
        content:'#div2'
    };
    var slider2 = new Slider();
    slider2.init(settings);
});/**
 * Created by Administrator on 2018/3/18.
 */
