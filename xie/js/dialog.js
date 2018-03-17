requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(['jquery'],function ($) {
    function Dialog() {//类
        this.defaultSettings = {
            width:500,
            height:400,
            tittle:'弹出层',
            content:''
        };
        this.$container = $('<div class="dialog-container">');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box=$('<div class="dialog-box">');
        this.$tittle=$('<div class="dialog-tittle">');
        this.$item=$('<div class="dialog-item"></div>');
        this.$close =$('<div class="dialog-close">[x]</div>');
        this.$content=$('<div class="dialog-content "></div>');

    }
    Dialog.prototype.open = function (settings) {
        $.extend(this.defaultSettings,settings);
        this.$tittle.append(this.$item).append(this.$close);
        this.$box.append(this.$tittle).append(this.$content).css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height
        });
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$item.text(this.defaultSettings.tittle);

        if(this.defaultSettings.content.indexOf('.html')!=-1){
           this.$content.load(this.defaultSettings.content);
        }else{
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on('click',function () {
            // this.$container.remove();
            this.close();
        }.bind(this)
        );
    }
    Dialog.prototype.close = function () {
        this.$container.remove();
    }
    return Dialog;
})
/**
 * Created by Administrator on 2018/3/17.
 */
