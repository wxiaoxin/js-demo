
// 指向整个html文档节点
var html = document.documentElement;

// 指向html文档中body节点
var body = document.body;


// 获取登陆表单节点
var loginFormNode = document.getElementById("loginForm");
console.log("节点类型：" + loginFormNode.nodeType);
console.log("节点名称：" + loginFormNode.nodeName);
// console.log(loginFormNode.nodeValue);


// 获取文档根节点
var docNode = loginFormNode.ownerDocument;
console.log("根节点类型：" + docNode.nodeType);
console.log("根节点名称：" + docNode.nodeName);

// 获取父节点
var loginFormParentNode = loginFormNode.parentNode;
console.log("父节点：" + loginFormParentNode.nodeName);

// 获取同一级节点的上一个节点
var loginFormPreviousNode = loginFormNode.previousSibling;
console.log("同级上一个节点：" + loginFormPreviousNode.nodeName);

// 获取同一级节点上的下一个节点
var loginFormNextNode = loginFormNode.nextSibling;
console.log("同级下一个节点：" + loginFormNextNode.nodeName);


// 判断loginFormNode是否有子节点
console.log("是否有子节点：" + loginFormNode.hasChildNodes());

// 获取子节点列表
loginFormChildNodes = loginFormNode.childNodes;

// 子节点的长度
console.log("子节点的长度：" + loginFormChildNodes.length);

// 获取第一个子节点 是一个Node.TEXT_NODE类型的空节点
var firstChildNode = loginFormNode.firstChild;
var firstChildNode2 = loginFormChildNodes[0];
console.log("第一个子节点：" + firstChildNode.nodeType + " " + firstChildNode.nodeName);

// 获取第二个子节点 是Node.ELEMENT_NODE类型的div节点
var secondChildNode = loginFormChildNodes.item(1);
console.log("第二个子节点：" + secondChildNode.nodeType + " " + secondChildNode.nodeName);


// 获取最后一个节点
var lastChildNode = loginFormNode.lastChild;
var lastChildNode = loginFormChildNodes[loginFormChildNodes.length - 1];
console.log("最后一个子节点：" + lastChildNode.nodeType + " " + lastChildNode.nodeName);



/**
 * 追加子节点
 */
function a() {
    var appendChildNode = document.createTextNode("这是一个追加的子节点");
    loginFormNode.appendChild(appendChildNode);
}

/**
 * 插入子节点
 * insertBefore(新节点, 参考节点)
 */
function b() {
    var insertChildNode = document.createTextNode("这是一个新插入的子节点");
    loginFormNode.insertBefore(insertChildNode, loginFormNode.firstChild);
}

/**
 * 替换子节点
 */
function c() {
    var replaceChildNode = document.createTextNode("这是一个新替换的子节点");
    loginFormNode.replaceChild(replaceChildNode, loginFormNode.firstChild);
}

/**
 * 移除子节点
 */
function d() {
    loginFormNode.removeChild(loginFormNode.firstChild);
}


/**
 * 修改类
 */
function e() {
    var mainDiv = document.getElementById("main");
    mainDiv.className = "";
}



/**
 * 获取元素节点的属性
 * 1 e.attribute 直接通过[节点对象.属性名]的形式获取属性值
 * 2 e.getAttribute("属性名称");
 * 当属性不存在时，返回Null
 */
function f() {
    var nameInput = document.getElementById("nameInput");
    console.log(nameInput.getAttribute("type"));
    console.log(nameInput.getAttribute("id"));
    // 直接通过元素属性的形式获取属性值
    console.log(nameInput.placeholder);
    console.log(nameInput.value);
    console.log(nameInput.className);
    // 自定义属性不需要加上data-前缀
    console.log(nameInput.getAttribute("xin"));
    
    //..
}


/**
 * 设置元素节点的属性值
 * 1 e.attribute = "value";
 * 2 e.setAttribute("属性名", "属性值");
 * 如果属性已存在，则替换属性的值；如果属性不存在，则创建并设置该属性的值
 */
function g() {
    var nameInput = document.getElementById("nameInput");
    nameInput.className = "";
    nameInput.setAttribute("value", "通过js代码设置了属性值")
    //..
}


/**
 * 移除元素节点的属性
 * e.removeAttribute("属性名");
 */
function h() {
    var nameInput = document.getElementById("nameInput");
    nameInput.removeAttribute("class");    
}
