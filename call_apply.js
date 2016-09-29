/**
 * 测试apply和call函数的用法
 * 
 * 每个函数都有两个非继承而来的方法：apply()和call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等同于设置函数体内this对象的值
 * 
 */

/**
 * apply() 函数接收两个参数：第一个参数是运行函数的作用域，第二个参数数组，也可以是Array的实例
 *
 */

function sum(x, y) {
    return x + y;
}

function applySum(x, y) {
    // 传入函数作用域 和 参数数组
    return sum.apply(this, arguments);
}
alert(applySum(1,2));

function applySum2(x, y) {
    // 传入函数作用域 和 参数数组实例
    return sum.apply(this, [x, y]);
}
alert(applySum2(1,2));



/**
 * call() 方法接收多个参数：第一个参数是运行函数的作用域，其余参数都直接传递给call方法
 */

function callSum(x, y) {
    return sum.call(this, x, y);
}

alert(callSum(1,2));





/**
 * 事实上，传递参数并非apply()和call()真正的用武之地。它们真正强大的地方时能够扩充函数运行的作用域
 */

var color = "red";
var obj = {
    color: "blue"
}

function getColor() {
    alert(this.color);
}

// 传递不同的函数作用域
getColor.call(this);
getColor.call(window);
getColor.call(obj);