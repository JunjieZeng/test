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
index.init();