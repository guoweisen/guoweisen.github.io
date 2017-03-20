
function render() {
	var str = window.localStorage.getItem("shuju");
	str = JSON.parse(str) || "";
	var temData = {
		json: str
	};
	var html = template("waterfall", temData);
	$(".main_cp").html("");
	$(".main_cp").append(html);
}
render();


//删除
function shanC(){
	var scs=document.getElementsByClassName("btn_t");
	for(var i=0;i<scs.length;i++){	
		scs[i].parentNode.onclick=function(){
			var fal=confirm("确定删除？");
			if(fal==true){	
				var that=this.parentNode.parentNode
				that.parentNode.removeChild(that);
				var str = window.localStorage.getItem("shuju");
				str = JSON.parse(str);
				str.splice(that.dataset['index'],1);
				str=JSON.stringify(str);
				window.localStorage.setItem("shuju",str);
//				location.href="gouwuche.html";
				render();
				shanC();
				jiaJian();
			}else{
				console.log(123);
			}
			shuLiang();
		}
	};
};
shanC();

//控制加减
var szs=document.getElementsByClassName("shuzhi");
function jiaJian(){

	for(var i=0;i<szs.length;i++){
		szs[i].nextElementSibling.onclick=function(){
			var inp=this.previousElementSibling;
			if(inp.value>=0&&inp.value<10){
	            inp.value++;            
			}
			if(inp.value>10){
	          	inp.value=10;
	        }
			shuLiang();		
		};
		szs[i].previousElementSibling.onclick=function(){
			var inp=this.nextElementSibling;
			if(inp.value>=0&&inp.value<11){
	            inp.value--;
	        }
			if(inp.value<1){
	          	inp.value=1;
	        }
			shuLiang();
		};
	};
}
jiaJian();

//数量、总额的计算输出
function shuLiang(){
	var shuliang=document.getElementsByClassName("shuliang")[0];
	var zonge=document.getElementsByClassName("zonge")[0];
	var jiage=document.getElementsByClassName("jiage");
	
	var sun=0;
	var ze=0;
	for(var i=0;i<szs.length;i++){
		sun+=parseInt(szs[i].value);
		ze+=parseInt(szs[i].value)*parseInt(jiage[i].innerHTML);
	}
	shuliang.innerHTML=sun;
	zonge.innerHTML=ze;
}
shuLiang();


//当input值改变时，数量、总额随之更改
function inP(){
	for(var i=0;i<szs.length;i++){
		szs[i].oninput=function(){
			if(isNaN(this.value)||this.value<0||this.value>10){
				alert("最大数量为10")
				this.value=1;
			}
			shuLiang();
		}
	}
}
inP();


var quanxuan=document.getElementsByClassName("quanxuan")[0];
var check=document.getElementsByClassName("check");
quanxuan.onclick=function(){
	if(this.checked==true){
		for(var i=0;i<check.length;i++){
			check[i].checked=true;
		}
	}else{
		for(var i=0;i<check.length;i++){
			check[i].checked=false;
		}
	}
}