
/**
 * 延迟执行一个任务
 */

// 保存该延迟任务的唯一标识符，可用于取消该任务
var id;

function openBaidu() {
    id = setTimeout(function(){
        window.open("http://www.baidu.com");
    },5000);
}

/**
 * 根据id取消延迟加载的一个任务
 */
function cancelOpenBd() {
    clearTimeout(id);
}





/**
 * 定时任务
 */

var iid;

/**
 * 开启一个定时任务
 */
function sayHello() {
    iid = setInterval(function(){
        alert("你好");
    }, 2000);
}

/**
 * 取消一个定时任务
 */
function cancelSayHello() {
    clearInterval(iid);
}