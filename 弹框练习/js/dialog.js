require.config({
    paths:{
        jquery:"jquery-3.3.1.js"
    }
});
define(["jquery"],function ($) {
    function Dialog() {
        this.$box = $('<div class="dialog-box">');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$container = $('<div class="dialog-container">');
        this.$header = $('<div class="dialog-header">');
        this.$tittle = $('<div class="dialog-tittle">注册</div>');
        this.$btn = $('<div class="dialog-btn">[x]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open = function () {
        this.$box.append(this.$mask).append(this.$container);
        this.$container.append(this.$header).append(this.$content);
        this.$header.append(this.$box);
        $("#box").append(this.$box);
        var This = this;


    }

    // $("body").html();
    // var dialog = {
    //     open:function () {
    //         var dialogHtml =
    //             '<div class="dialog-box">'+
    //             '<div class="dialog-mask"></div>'+
    //             '<div class="dialog-container">'+
    //             '<div class="dialog-header">'+
    //             '<div class="dialog-tittle">注册</div>'+
    //             '<div class="dialog-btn" id="close">[x]</div>'+
    //             '</div>'+
    //             '<div class="dialog-content"></div>'+
    //             '</div>'+
    //             '</div>'
    //         // document.body.innerHTML+=dialogHtml;
    //         $("body").append(dialogHtml);
    //         $("#close").click(function () {
    //             $(".dialog-box").remove();
    //         })
    //         // jquery也有一个appand
    //         // var oClose = document.getElementById("close");
    //         // oClose.onclick = function () {
    //         //     document.getElementsByClassName("dialog-box")[0].remove();
    //         }
    //     };
    return dialog;
});
