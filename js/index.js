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
    	window.addEventListener('devicemotion', deviceMotionHandler, false);
    }
};
function deviceMotionHandler(eventData) {
var acceleration = eventData.accelerationIncludingGravity;
x = acceleration.x;
y = acceleration.y;
z = acceleration.z;
if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
    		$('.bg-shake_btn_img').addClass("swing")
 
 
window.removeEventListener('devicemotion', deviceMotionHandler, false);
}
lastX = x;
lastY = y;
lastZ = z;
}
index.init();