window.onload=function(){
    slider();
    sktime();
}
function slider(){
    var box = document.querySelector(".bb_banner");
    var imgUl = box.children[0];
    var dotUl = box.children[1];
    var imgLis = imgUl.children;
    var dotLis = dotUl.children;
    var width = box.offsetWidth;
    var num = 1;
    //1、自动轮播 
    clearInterval(box.timer);
    box.timer = setInterval(function(){
        num++;
        chinasofti.addTransition(imgUl);
        chinasofti.setTransform(imgUl,-num*width);

    }, 5000)
    
    chinasofti.addTransitionEnd(imgUl, function(){
        if(num>imgLis.length-2){
            num = 1;
            chinasofti.removeTransition(imgUl);
            chinasofti.setTransform(imgUl,-num*width);
        }else if(num==0){
            num = imgLis.length-2;
            chinasofti.removeTransition(imgUl);
            chinasofti.setTransform(imgUl,-num*width);
        }
        light();
    })
    //2、小圆点随着图片滚动
    function light(){
        for(var i =0;i<dotLis.length;i++){
            dotLis[i].className = "";
        }
        dotLis[num-1].className = "now";
    }
    
    //4、滑动不超过一定距离 吸附回去 
    //5、滑动超过一定距离 滚动到下一张
    var startX = 0 ;
    var moveX = 0 ;
    var endX = 0;
    var isMove = false;
    var distance = 0;
    imgUl.addEventListener("touchstart", function(e){
        clearInterval(box.timer);
        startX = e.touches[0].clientX;
    })
    imgUl.addEventListener("touchmove", function(e){
        moveX = e.touches[0].clientX;
        isMove = true;
        //3、图片能滑动(touch)
        distance = moveX - startX;
        chinasofti.removeTransition(imgUl);
        chinasofti.setTransform(imgUl,-num*width+distance);
        
    })
    imgUl.addEventListener("touchend", function(e){
        endX = moveX;
        if(isMove){
            if(Math.abs(distance)>width/3){
              if(distance>0){
                    num--;
              }else{
                    num++;
              }
                chinasofti.addTransition(imgUl);
                chinasofti.setTransform(imgUl,-num*width);

            }else{
                chinasofti.addTransition(imgUl);
                chinasofti.setTransform(imgUl,-num*width);
            }
        }
        clearInterval(box.timer);
        box.timer = setInterval(function(){
        num++;
        chinasofti.addTransition(imgUl);
        chinasofti.setTransform(imgUl,-num*width);

        }, 5000)
        startX = 0 ;
        moveX = 0 ;
        endX = 0;
        isMove = false;
        distance = 0;
    });
    
}
function sktime(){
    var sk = 2*54*59;
    var skDiv = document.querySelector(".sk_time");
    var spanS = skDiv.children;
    skDiv.timer=setInterval(function(){
        if(sk<0){
           clearInterval(skDiv.timer)
        }else{
            sk--;
            var hour = Math.floor(sk/3600);
            var minute = Math.floor(sk%3600/60);
            var second = sk%60;
            spanS[0].innerHTML=0;
            spanS[1].innerHTML=hour;
            if(minute<10){
                spanS[3].innerHTML=0;
                spanS[4].innerHTML=minute;
            }else{
                spanS[3].innerHTML=Math.floor(minute/10);
                spanS[4].innerHTML=minute%10;
            }
            if(second<10){
                spanS[6].innerHTML=0;
                spanS[7].innerHTML=second;
            }else{
                spanS[6].innerHTML=Math.floor(second/10);
                spanS[7].innerHTML=second%10;
            }
        }
    }, 1000)
};




