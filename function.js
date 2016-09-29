function sum(x, y) {
    // return x + y;
    return arguments[0] + arguments[1];
}

var sum2 = function(x, y) {
    return x - y;
}

alert("函数接收参数的个数：" + sum.length);