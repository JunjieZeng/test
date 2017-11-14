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
function init() {
    if (window.DeviceMotionEvent) {
        // 移动浏览器支持运动传感事件
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    }
}
var SHAKE_THRESHOLD = 30;
// 定义一个变量保存上次更新的时间
var last_update = 0;
// 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;
var count = 0;
var num = 0;
var lastSpeed = 0;
var timer;
function deviceMotionHandler(eventData) {
    // 获取含重力的加速度
    var acceleration = eventData.accelerationIncludingGravity;
    // 获取当前时间
    var curTime = new Date().getTime();
    var diffTime = curTime - last_update;
    // 固定时间段
    if (diffTime > 20) {
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
 
        //var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 30000;
        var speed = Math.sqrt(x * x + y * y + z * z);
        var ds = Math.abs(speed - lastSpeed);
 
 
        if (ds > SHAKE_THRESHOLD) {
            // TODO:在此处可以实现摇一摇之后所要进行的数据逻辑操作
            count++;
            clearTimeout(timer);
            timer = setTimeout(function () {
                window.removeEventListener('devicemotion', deviceMotionHandler, false);
                alert("2秒内没有增加摇动次数，摇动结束");
            }, 2000);
 
        }
        last_x = x;
        last_y = y;
        last_z = z;
        if (count / 2 > 10) {
            alert("亲,最高不超过11次哦!");
            $("#shaketext").html(Math.round(count / 2));
            count = 0;
        }
        lastSpeed = speed;
    }
} 
index.init();