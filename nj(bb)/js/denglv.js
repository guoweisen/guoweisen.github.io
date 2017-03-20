var sjh = document.getElementsByClassName("name")[0];
var mima = document.getElementsByClassName("mima")[0];
var denglv = document.getElementsByClassName("zhuce")[0];
sjh.focus(); //一加载让input获得光标

denglv.onclick = function() {
	var str = window.localStorage.getItem("huiyuan") || "[]";
	str = JSON.parse(str);
	for(var i = 0; i < str.length; i++) {		
		if(sjh.value == '' || mima.value == '') {
			alert("手机号或密码为空");
			return;
		};
		if(sjh.value == str[i].name && mima.value == str[i].mima) {
			console.log("登录成功");
			var arr = "[]";
			var touxiang = JSON.parse(arr);
			var cun = {
				"name": sjh.value,
				"price": 1
			};
			touxiang.push(cun);
			xstr = JSON.stringify(touxiang);
			window.localStorage.setItem("touxiang", xstr);
			location.href = "index.html";
			return;
		} //else {			
//			console.log(str[i].name)
//			console.log("手机号或密码错误");
//			return;
//		}
	};
	
};