var xiangq = document.getElementsByClassName("xiangq")[0];
var img = xiangq.children[0].children[0];
var h4 = xiangq.children[1];
var p_span = xiangq.children[2].children[0];

function xiangQ() {
	var str = window.localStorage.getItem("xiangq");
	str = JSON.parse(str);
	h4.innerHTML = str[0].name;
	p_span.innerHTML = str[0].price;
	img.src = str[0].src
};
xiangQ();

var gwc = document.getElementsByClassName("btn_buy")[0];
var ligm = document.getElementsByClassName("btn_cart")[0];
gwc.onclick = function() {
	var str = window.localStorage.getItem("shuju") || "[]";
	var shuju = JSON.parse(str);
	var cun = {
		"name": h4.innerHTML,
		"price": p_span.innerHTML,
		"src": img.src
	};
	for(var i = 0; i < shuju.length; i++) {
		if(cun.name == shuju[i].name) {
			alert("购物车已有");
			return;
		}
	}
	shuju.push(cun);
	xstr = JSON.stringify(shuju);
	window.localStorage.setItem("shuju", xstr);
	alert("加入购物车成功！")
}

//判断有没登录，登录状态下显示头像
var logo = document.getElementsByClassName("login")[0];
var str = window.localStorage.getItem("touxiang") || "[]";
str = JSON.parse(str);
if(str.length == 0) {
	logo.innerHTML = "登录";
} else {
	logo.innerHTML = "<img src='img/touxiang.png'>";
	logo.href = "gerenzhongxin.html"
}