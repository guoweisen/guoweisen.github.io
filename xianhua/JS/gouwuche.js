//var jgS=document.getElementsByClassName("home-sp-span");
var spanS=document.getElementsByClassName("home-sp-tj");
var jdS=document.getElementsByClassName("gd");

for(var i=0;i<jdS.length;i++){
	jdS[i].onclick=function(){
		this.parentNode.parentNode.removeChild(this.parentNode);
	}	
}
var val;
for(var j=0;j<spanS.length;j++){
	spanS[j].children[0].onclick=function(){
		val=this.nextSibling.value;
		if(val>1){
			val--;
			this.nextSibling.value=val;
		}
	}
	
	spanS[j].children[2].onclick=function(){
		val=this.previousSibling.value;		
			val++;
			this.previousSibling.value=val;		
	}
}
