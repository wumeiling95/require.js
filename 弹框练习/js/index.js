require.config({
    paths:{
        jquery:"jquery-3.3.1.js"
    }
});
require(["dialog","jquery"],function (dialog,$) {
    // var oBtn = document.getElementById("btn");
    // oBtn.onclick = function () {
    //     dialog.open();
    // }
    $("#btn").click(function () {
        dialog.open();
    })
});
// AMD：require.js 提前执行 和CMD：seaJS 延迟执行
