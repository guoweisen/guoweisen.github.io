var app = angular.module('myApp', []);
app.controller('myController', ['$scope', '$http', function($scope, $http) {
	$http({
		url: 'chanp.json'
	}).then(function(data) {

		$scope.data = data.data;

	});

	var px = true;
	$scope.order = function(type, px) {
		$scope.type = type;
		if(px) {
			px = false;
		} else {
			px = true;
		}
		$scope.px = px;
	};

	$scope.xiangQ = function(src, name, price) {
		//详情点击
		var str = "[]";
		var xiangq = JSON.parse(str);
		console.log(xiangq);
		var cun = {
			"name": name,
			"price": price,
			"src": src
		};
		xiangq.push(cun);
		xstr = JSON.stringify(xiangq);
		window.localStorage.setItem("xiangq", xstr);

	}

	$scope.jrGwc = function(src, name, price) {
		//购物车点击
		var str = window.localStorage.getItem("shuju") || "[]";
		var shuju = JSON.parse(str);
		var cun = {
			"name": name,
			"price": price,
			"src": src
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

}])

var ul = document.getElementsByClassName("head_ul")[0];
var liS = ul.children;
for(var i = 0; i < 2; i++) {
	liS[i].onclick = function() {
		for(var j = 0; j < liS.length; j++) {
			liS[j].children[0].className = "";
		}
		this.children[0].className = "now";
	};

}

var sx = document.querySelector(".sx");
var div = document.querySelector(".header_div")

sx.onclick = function() {
	if(div.style.display == "block") {
		div.style.display = "none";
	} else {
		div.style.display = "block";

		for(var i = 1; i < 5; i++) {
			leftSwipe(".clearfix" + i);
		}
	}
}

function leftSwipe(cla) {
	var parentBox = document.querySelector(cla);
	var childBox = parentBox.querySelector(".header_div_p");
	var h = parentBox.offsetWidth;
	var H = childBox.offsetWidth;
	var distance = 100;
	var maxPositon = 0;
	var minPosition = h - H;
	var maxSwipe = maxPositon + distance;
	var minSwipe = minPosition - distance;
	var start = 0;
	var move = 0;
	var isMove = false;
	var moveX = 0;
	var currX = 0;

	childBox.addEventListener("touchstart", function() {
		start = event.touches[0].pageX;
	});
	childBox.addEventListener("touchmove", function() {
		isMove = true;
		move = event.touches[0].pageX;
		moveX = move - start;
		if(moveX + currX < maxSwipe && moveX + currX > minSwipe) {
			chinasofti.removeTransition(childBox);
			chinasofti.setTransform(childBox, currX + moveX, "X")
		}

	});
	childBox.addEventListener("touchend", function() {
		if(isMove) {
			if(moveX + currX > maxPositon) {
				currX = maxPositon;
			} else if(moveX + currX < minPosition) {
				currX = minPosition;
			} else {
				currX = moveX + currX;
			}
		}
		chinasofti.addTransition(childBox);
		chinasofti.setTransform(childBox, currX, "X");
		start = 0;
		move = 0;
		isMove = false;
		moveX = 0;
	})

	chinasofti.tap(childBox, function() {
		var liArr = childBox.children;
		for(var i = 1; i < liArr.length; i++) {
			liArr[i].index = i;
			liArr[i].className = "";
			liArr[i].onclick = function() {
				this.className = "ys";
				//          	if(div.style.display == "block") {
				//					div.style.display = "none";
				//				} else {
				//					div.style.display = "block";
				//				}
			}
		}
	})

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



function scroll() {
	return {
		"top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		"left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
	}
}
var backTop = document.getElementById("backTop")
window.onscroll = function() {
		if(scroll().top>200){
			backTop.style.display = "block";
		} else {
			backTop.style.display = "none";
		}
		//页面滑动，会触动这个事件，然后检测被卷去的头部，作为屏幕跳转的Y坐标
		leader = scroll().top;
	}
	//定义相关元素（定时器，目标位置，屏幕自身位置Y）
	// (被卷去的头部，就是屏幕的Y坐标)（变相计数器）
var timer = null,
	target = 0,
	leader = 0;
backTop.onclick = function() {
	//要用定时器，先清定时器
	clearInterval(timer);
	timer = setInterval(function() {
		//步长
		var step = (target - leader) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		//屏幕应该跳转到的Y坐标
		leader = leader + step;
		//屏幕跳转
		window.scrollTo(0, leader);
		if(target == leader) {
			clearInterval(timer);
		}
	}, 50)
}