requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
require(["jquery","dialog"],function ($,Dialog) {
    $("#open").on('click',function(){
        var settings = {
            width:300,
            height:200,
            tittle:'注册',
            content:'regist.html'
        };
        // dialog.open(settings);

        var d1 = new Dialog();
        d1.open(settings);
        var d2 = new Dialog();
    })
});/**
 * Created by Administrator on 2018/3/17.
 */
