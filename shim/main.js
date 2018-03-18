require.config({
    shim:({  //引入非AMD标准的文件
        aa:{
            deps:['bb'],
            exports:'aa'
        }
    })//非标准模块化
});
// 立即执行函数：传一个window，相当于全局变量
require(['aa'],function (aa){
    aa.con();
});

/**
 * Created by Administrator on 2018/3/18.
 */
