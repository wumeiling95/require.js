define(function () {
    function slider() {
        this.$box = $('<div class="slider-box"></div>');
        this.$img = $('<div class="slider-img"></div>');
        this.$nav =$('<div class="slider-nav"></div>');
        this.$btn = $('<div class="slider-btn"></div>');
        this.$ul = $('<ul></ul>');
        this.$prv = $('<li>&lt;</li>');
        this.$next = $('<li>&lt;</li>');
        //另一种写法
        this.defaultSettings = {
            arr:['image/1','image/2','image/3','image/4'],
            time:1000,
            content:'#div1'
        }
    }
    slider.prototype.init = function (settings) {
        console.log(settings);
        $.extend(this.defaultSettings,settings);
        this.$box.append(this.$img).append(this.$nav).append(this.$btn);
        this.$ul.append(this.$prv).append(this.$next);
        this.$btn.append(this.$ul);
        var imgHtml = '<ul>';
        var navHtml = '<ul>';
        console.log(this.defaultSettings);
        for(var i=0;i<this.defaultSettings.arr.length;i++){
            imgHtml+='<li><img src="'+this.defaultSettings.arr[i]+'.jpg"></li>';
            navHtml+='<li>'+(i+1)+'</li>';
        }
        imgHtml+="</ul>";
        navHtml+="</ul>";
        this.$img.append(imgHtml);
        this.$nav.append(navHtml);
        $(this.defaultSettings.content).append(this.$box);
        $(this.$img).children("ul").children("li").eq(0).addClass("active");
        var gloabolIndex = 0;
        var This = this;
        // var timer = setInterval(function () {
        //     if(gloabolIndex>3){
        //          gloabol=0;
        //     }
        //     changeImg(gloabolIndex);
        //     gloabolIndex++;
        // },1000);
        this.changeImg=function(index) {
            $(This.$img).children("ul").children("li").removeClass("active").eq(gloabolIndex).addClass("active");
            $(This.$nav).children("ul").children("li").removeClass("active").eq(gloabolIndex).addClass("active");
        };
        $(this.$nav).children("ul").children("li").hover(function () {
            console.log($(this).index());
            // clearInterval(timer);
            gloabolIndex = $(this).index();
            This.changeImg();
            changeImg($(this).index());
        },function () {
            console.log("out");
        })
    };
    return slider;
})/**
//  * Created by Administrator on 2018/3/18.
//  */


