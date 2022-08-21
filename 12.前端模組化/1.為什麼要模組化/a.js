var moduleA = (function() {
    //導出的物件
    var obj = {};


    var name = 'aaa';
    var age = 18;

    function sum(sum1, sum2) {
        return sum1 + sum2;
    };

    var flag = true;

    if(flag) {
        console.log(sum(20, 30));
    };

    obj.flag = flag;
    obj.sum = sum;

    return obj;

})()