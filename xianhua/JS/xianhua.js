var app = angular.module('myApp', []);
app.controller('myController', ['$scope', '$http', function($scope, $http) {
	$http({
		url: 'xianhua.json'
	}).then(function(data) {
		
		$scope.data=data.data;
//		console.log(data.data[0].jg);
//		$scope.page = 0;
//		var data = data.data;
//		$scope.data = data.slice(0, (++$scope.page) * 5 - 1);
//		var tishi = document.getElementsByClassName("jiazai")[0];
//		$scope.anniu = function() {
//			$scope.data = data.slice(0, (++$scope.page) * 5 - 1);
//		}
//		var pageY = 0;
//		var gray = document.getElementsByClassName("gray")[0];
//		gray.addEventListener("touchstart", function() {
//			pageY = event.touches[0].pageY;
//			if($scope.page >= 9) {
//				tishi.innerHTML = "加载完毕"
//			}
//		})
	});
	$scope.mth = function(val) {
		return Math.round(val);
	}

	$scope.order=function(type){
		$scope.type=type;
	}
}])


var ul=document.getElementsByClassName("head_ul")[0];
var liS=ul.children;
for(var i=0;i<liS.length;i++){
	liS[i].onclick=function(){
		for(var j=0;j<liS.length;j++){
			liS[j].children[0].className="";
		}
		this.children[0].className="now";
	};
	
}

var cd=document.querySelector(".icon-cd");
var div=document.querySelector(".header-div")

cd.onclick=function(){
	if(div.style.display=="block"){
		div.style.display="none";
	}else{
		div.style.display="block";
	}
}
