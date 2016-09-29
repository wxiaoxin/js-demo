
/**
 * 页面跳转
 */
function a() {
    location.assign("http://www.baidu.com");
}


function b() {
    window.location = "http://www.jd.com";
}

function c() {
    location.href = "http://www.tmall.com";
}



/**
 * 不会产生一条浏览历史记录，但是也不可以通过回退按钮回退页面
 */
function d() {
    location.replace("http://www.baidu.com");
}


/**
 * 刷新页面
 */
function e() {
    location.reload();
}

/**
 * 强制从服务器重新加载数据到页面
 */
function f() {
    location.reload(true);
}