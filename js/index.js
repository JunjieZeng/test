var index = {
    init: function () {
    	$(".bg-dia_close_icon").on("click",function(){
    		$(this).parent().hide();
    		$(".dia").hide();
    	})
    	$(".bg-shake_btn_img").one("webkitAnimationEnd",function(){
    		$(this).removeClass("swing");
	    	$(".bg-shake_btn_img").on("webkitAnimationEnd",function(){
	    		$(this).removeClass("swing");
	    		$('.dia-thanks').show();$('.dia').show();
	    	})
    	})
    	$(".bg-shake_btn_img").on("click",function(){
    		$(this).addClass("swing")
    	})
		if (window.DeviceMotionEvent) { 
                 window.addEventListener('devicemotion',deviceMotionHandler, false);  
        }
    }
};



var speed = 30;//speed
var x = y = z = lastX = lastY = lastZ = 0;
function deviceMotionHandler(eventData) {  
  var acceleration =eventData.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
			$(".bg-shake_btn_img").addClass("swing")
        }
        lastX = x;
        lastY = y;
        lastZ = z;
}


    var speed2=30;
    window.onload=function(){
        var demo=document.getElementById("l");
        var demo2=document.getElementById("l2");
        var demo1=document.getElementById("broadcastContent_409134");
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