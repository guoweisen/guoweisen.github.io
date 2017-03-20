var sjh = document.getElementsByClassName("name")[0];
var mima = document.getElementsByClassName("mima")[0];
var yanzheng = document.getElementsByClassName("yanzheng")[0];
var sjyanzheng = document.getElementsByClassName("yanzheng")[1];
var fs = document.getElementsByClassName("fs")[0];
var zhuce = document.getElementsByClassName("zhuce")[0];
var span = document.getElementsByTagName("span")[1];
sjh.focus(); //一加载让input获得光标

//判断手机号码输入是否符合要求
sjh.onchange = function() {
	if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sjh.value))) {
		alert("请输入正确的手机号");
		sjh.value = "";
		suiJi();
		sjh.focus();		
	};
};

//判断密码设置是否符合要求
mima.onchange = function() {
	if(!(/^[a-zA-Z0-9]{6,18}$/.test(mima.value))) {
		alert("设置字母、数字6-18位的密码");
		mima.value = "";
		suiJi();
		mima.focus();
	};
};

//判断验证码是否正确一致
yanzheng.onchange = function() {
	if(yanzheng.value != span.innerHTML) {
		alert("验证码不正确");
		yanzheng.value = "";
		suiJi();
		yanzheng.focus();
	};
};

//随机6位验证码
function suiJi() {
	var z = "";
	var col;
	var ar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	for(var i = 0; i < 6; i++) {
		var s = Math.floor(Math.random() * 35);
		col= 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
		z += ar[s];//把每一次的数从数组拿出来，再拼一起
	};
	span.innerHTML = z;
	span.style.color=col;
};
suiJi(); //一加载就随机一验证码

//点击判断手机号码是否符合，符合时生成随机验证码
function yanZ() {
	if(sjh.value != '' && (/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sjh.value))) {
		var z = "";
		var col;
		var ar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		for(var i = 0; i < 6; i++) {
			var s = Math.floor(Math.random() * 35);
			col = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
			z += ar[s];//把每一次的数从数组拿出来，再拼一起
		};
		fs.value = z;
		fs.style.color = col;
		fs.style.fontSize = "16px"
	} else {
		alert("请输入手机号");
		sjh.focus();
	};
};

//判断输入的手机验证码是否正确一致
sjyanzheng.onchange = function() {
	if(sjyanzheng.value != fs.value) {
		alert("验证码错误");
		yanZ();
		sjyanzheng.value = "";
		sjyanzheng.focus();
	};
};

zhuce.onclick = function() {
	if(sjh.value == '' || mima.value == '' || yanzheng.value == '' || sjyanzheng.value == '' || sjyanzheng.value != fs.value || yanzheng.value != span.innerHTML) {
		alert("有选项为空或不正确，请检查");
		return;
	} else {
		var str = window.localStorage.getItem("huiyuan") || "[]";
		var huiyuan = JSON.parse(str);
		var cun = {
			"name": sjh.value,
			"mima": mima.value
		};
		for(var i=0;i<huiyuan.length;i++){
			if(cun.name==huiyuan[i].name){
				alert("该手机号已注册");
				return;
			}
		};
		huiyuan.push(cun);
		str = JSON.stringify(huiyuan);
		window.localStorage.setItem("huiyuan", str);
		alert("注册成功");
		location.href="denglv.html";
	};
};