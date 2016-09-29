/**
 * 测试关于函数内部this的作用
 */

var color = "window.color = red";

var obj = {
    color: "obj.color = blue"
};

var getColor = function() {
    alert(this.color);
}

/**
 * 当在全局作用域调用该函数时，函数所执行的环境是全局环境
 * 因此，函数内部的this指向了window，this.color的值为red
 */
getColor();

/**
 * 当把getColor函数赋值给obj对象时，函数所执行的环境编程了对象
 * 因此，函数内部的this指向了obj，this.color的值为blue
 */
obj.getColor = getColor;
obj.getColor();