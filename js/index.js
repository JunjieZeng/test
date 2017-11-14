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
    	window.addEventListener('devicemotion', function(){
    		$('.bg-shake_btn_img').addClass("swing")

    	}, false);
    }
};

index.init();