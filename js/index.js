var index = {
    init: function () {
    	$(".bg-dia_close_icon").on("click",function(){
    		$(this).parent().hide();
    		$(".dia").hide();
    	})
    	$(".bag").one("webkitAnimationEnd",function(){
			
    		$(".bag").removeClass("swing");
	    	$(".bag").on("webkitAnimationEnd",function(){
	    		$(".bag").removeClass("swing");
	    		$('.dia-thanks').show();$('.dia').show();
	    	})
    	})
    	$(".bg-shake_btn_img").on("click",function(){
    		$(".bag").addClass("swing");
    		index.audio.currentTime = 0;
			index.audio.play();
    	})
		if (window.DeviceMotionEvent) { 
                 window.addEventListener('devicemotion',deviceMotionHandler, false);  
        }
    },
	audio:document.getElementById("shakeMusic")
};



var speed = 30;//speed
var x = y = z = lastX = lastY = lastZ = 0;
function deviceMotionHandler(eventData) {  
  var acceleration =eventData.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
			$(".bag").addClass("swing")
    		index.audio.currentTime = 0;
			index.audio.play();
        }
        lastX = x;
        lastY = y;
        lastZ = z;
}


    var speed2=30;
    window.onload=function(){
        var demo=document.getElementById("l");
        var demo2=document.getElementById("l2");
        var demo1=document.getElementById("l1");
        demo2.innerHTML=demo1.innerHTML;
        function Marquee(){
            if(demo.scrollTop>=demo1.offsetHeight){
                demo.scrollTop=0;
            }
            else{
                demo.scrollTop=demo.scrollTop+1;
            }
        }
        var MyMar=setInterval(Marquee,speed2);
        demo.onmouseover=function(){clearInterval(MyMar)};
        demo.onmouseout=function(){MyMar=setInterval(Marquee,speed2)}
    }



index.init();

document.addEventListener("WeixinJSBridgeReady", function () {
    var audio = new Audio();
    audio.src = "shake.mp3"
    audio.play();
    setTimeout(function(){
    	audio.pause();
    })
}, false);