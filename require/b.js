define(function () {
    function sortArr(arr) {
           return arr.sort(function (a,b) {
            return a-b;
        });
    }
    return sortArr;
});
