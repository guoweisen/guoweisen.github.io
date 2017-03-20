var cd=document.getElementsByClassName("icon-cd")[0];
var ul=document.getElementsByClassName("head_ul")[0];
cd.onclick=function(){
	if(ul.style.display=="block"){
		ul.style.display="none";
	}else{
		ul.style.display="block";
	}
};

function add(obj){	
	obj.style.transition="all 1s";
	obj.style.webkieTransition="all 1s";
};
function remove(obj){	
	obj.style.transition="none";
	obj.style.webkieTransition="none";
};
function banner(){
	var banner=document.querySelector(".banner");
	var width=banner.offsetWidth;
	var imageBox=banner.querySelector(".banner-ul");
	var pointBox=banner.querySelector("ul:last-child");
	var points=pointBox.querySelectorAll("li");
	var index=0;	
	clearInterval(timet);
	var timet=setInterval(function(){
		index++;
		add(imageBox);
		imageBox.style.transform="translateX("+(-index*width)+"px)";
		imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";

		imageBox.addEventListener("transitionend",function(){
			if(index>=6){
				index=0;
				remove(imageBox);
				imageBox.style.transform="translateX("+(-index*width)+"px)";
				imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";
			}else if(index<0){
				index=0;
				remove(imageBox);
				imageBox.style.transform="translateX("+(-index*width)+"px)";
				imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";
			};
			yuanDian();
		})
		
	},3000);
	function yuanDian(){
			for(var i=0;i<points.length;i++){
			points[i].className="";
		}
		points[index].className="now";
	};
	var startX=0;
	var moveX=0;
	var distanceX=0;
	var inMove=false;
	imageBox.addEventListener("touchstart",function(){
		remove(imageBox);
		clearInterval(timet);
		startX=event.touches[0].clientX;
	});
	imageBox.addEventListener("touchmove",function(){
		moveX=event.touches[0].clientX;
		distanceX=moveX-startX;
		imageBox.style.transform="translateX("+(-index*width+distanceX)+"px)";
		imageBox.style.webkieTransform="translateX("+(-index*width+distanceX)+"px)";
	});
	imageBox.addEventListener("touchend",function(){
		if(Math.abs(distanceX)>width/3){
			if(distanceX>0){
				index--;
			}else{
				index++;
			}
		}
		add(imageBox);
		imageBox.style.transform="translateX("+(-index*width)+"px)";
		imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";
		clearInterval(timet);
		timet=setInterval(function(){
		index++;
		add(imageBox);
		imageBox.style.transform="translateX("+(-index*width)+"px)";
		imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";
		imageBox.addEventListener("transitionend",function(){
			if(index>=6){
				index=0;
				remove(imageBox);
				imageBox.style.transform="translateX("+(-index*width)+"px)";
				imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";
			}else if(index<0){
				index=0;
				remove(imageBox);
				imageBox.style.transform="translateX("+(-index*width)+"px)";
				imageBox.style.webkieTransform="translateX("+(-index*width)+"px)";
			};			
			yuanDian();
		});		
	},3000);
	});
	
};

banner();
