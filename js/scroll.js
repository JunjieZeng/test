//用$获取元素
function $(id){
			return document.getElementById(id);
}
//拖拽移动
function dragmove(){
			this.e=null;
			this.dx=null;
			this.dy=null;
			this.ox=null;
			this.oy=null;
			this.dox=null;
			this.doy=null;
			this.mx=null;
			this.my=null;
			this.pl=null;
			this.pt=null;
			this.pw=null;
			this.pcl=null;
			this.ccw=null;
			this.ccl=null;
			this.cow=null;
			this.ph=null;
			this.pct=null;
			this.cct=null;
			this.cch=null;
			this.coh=null;
			this.countx=null;
			this.county=null;
			this.drag=function(childobj,parentobj,time,moveobj){     
				childobj.addEventListener('mousedown',function(event){
				e=event||window.event;
				if(e.stopPropagation){//←←←阻止事件冒泡
 					e.stopPropagation();
     			}else{
 					e.cancelBubble = true;
 				}
					$('fix').style.opacity=1;
				dx=e.clientX+window.pageXOffset;//←←←获取鼠标位置
				dy=e.clientY+window.pageYOffset;//←←←获取鼠标位置
				ox=childobj.offsetLeft;//←←←获取要移动的元素位置
				oy=childobj.offsetTop;//←←←获取要移动的元素位置
				dox=dx-ox;//←←←获取移动距离
				doy=dy-oy;//←←←获取移动距离
				if(parentobj==null){//←←←如果没有给滚动条父级容器，则默认用body作为父级容器
					parentobj=document.body;
				}
				pw=parentobj.offsetWidth;//←←←获取滚动条父级容器的宽度（包含边框）
				pcl=parentobj.clientLeft;//←←←获取滚动条父级容器边框的长度
				ccl=childobj.clientLeft;//←←←获取子元素左边框的长度
				pt=parentobj.offsetTop;//←←←获取滚动条父级容器距离浏览器顶部的距离
				pl=parentobj.offsetLeft;//←←←获取滚动条父级容器距离浏览器左边的距离
				cow=childobj.offsetWidth;//←←←获取子元素宽度（包含边框）
				ccw=childobj.clientWidth;//←←←获取子元素的宽度（不包含边框）
				ph=parentobj.offsetHeight;//←←←获取滚动条父级容器的高度（包含边框）
				pct=parentobj.clientTop;//←←←获取滚动条父元素上边框的长度
				cct=childobj.clientTop;//←←←获取子元素上边框的长度
				cch=childobj.clientHeight;//←←←获取子元素的高度（不包含边框）
				coh=childobj.offsetHeight;//←←←获取子元素的高度（包含边框）
				
			document.onmousemove=function(event){
				e=event||window.event;
				if(e.stopPropagation){//←←←阻止时间冒泡
 					e.stopPropagation();
     			}else{
 					e.cancelBubble = true;
 				} 
				mx=e.clientX+window.pageXOffset;//←←←获取鼠标位置，window.pageXOffset是为了防止移动时动了滚动条，鼠标位置还能一样
				my=e.clientY+window.pageYOffset;
				countx=mx-dox;//←←←计算要移动的距离
				county=my-doy;//←←←计算要移动的距离

				//↓↓↓↓↓↓判断上下边界值↓↓↓↓↓↓time是传进来的参数
				if(county>0&&county<=(ph-(pct)*2-cch-(cct)*2)){
					childobj.style.top=county+'px';//移动滚动条
					scro(moveobj,county,time);//←调用立刻移动元素的函数，根据滚动条的位置，移动网页
				}
				else if((county+coh)>(pl+ph)){
					childobj.style.top=(ph-pct-pct-coh)+'px';
					var ccot=(ph-pct-pct-coh);//←←←移动滚动条
					scro(moveobj,ccot,time);//←调用立刻移动元素的函数，根据滚动条的位置，移动网页
				}
				else if(county<0){
					childobj.style.top=0+'px';//←←←移动滚动条
					scro(moveobj,0,time);//←调用立刻移动元素的函数，根据滚动条的位置，移动网页
				}
			}

			document.onmouseup=function(evnet){
				document.onmousemove=null;//←←←移除鼠标移动事件
				$('fix').style.opacity=0.3;
			}
		})
	}
}

// 有动画移动
function move(){
	var currentloc=null;
	var targetloc=null;
	var distance=null;
	var speed=null;
	var timer=null;
	var objtime=null;
	var timer=null;
	var i=0;
	this.moveTop=function (tar,le,time){
		
		clearInterval(timer)//←←←每次重新调用这个函数事，清除定时器
		objtime=time||20;//←←←次数
		currentloc=le.offsetTop;//←←←当前滚动条的位置
		targetloc=tar;//滚动条目标位置
		distance=targetloc-le.offsetTop;//←←←两者的距离
		speed = distance/time;//←←←速度
		timer=setInterval(function(){
			if(i>time){
				clearInterval(timer)//←←←执行完次数后清除定时器
			}
			else {

				le.style.top=(currentloc+speed*i)+'px';
		    
		    }
			i++;
		},20)
	}
}

//立刻移动元素
function scro(obj1,dis,time){
	obj1.style.top= (-(dis*time))+'px';
}
//滚动条
function scrollfnc(rangeElement,moveElement){
		var content=rangeElement;//父级容器
		var moveobj=moveElement;//要移动的元素
		content.style.overflow="hidden";
		content.style.position="relative";
		moveobj.style.position="relative";
		moveobj.style.margin="0px";
		//↓↓↓滚动条拖拽事件↓↓↓
		var contentHeight= content.clientHeight;//←←←获取框的高度
		var scrollHeight=moveobj.offsetHeight;//←←←获取被部分隐藏元素的高度
		var time=(scrollHeight/contentHeight);//←←←页面移动的倍数
		//↓↓↓创建滚动条↓↓↓
		var fix=document.createElement("div");
		fix.id='fix';
		fix.style='width:15px;height:'+contentHeight+'px'+';-moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; background-color:#373737;position: absolute;right: 0px;top: 0px;opacity: 0.3;transition: .3s linear;';


		var scrollout=document.createElement('div');
		scrollout.id='scrollout';
		scrollout.style='width: 10px;height:'+contentHeight+'px'+';-moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; position: absolute;top: 0px;left:3px;';

		var scrollobj=document.createElement('div');
		scrollobj.id='scrollobj';
		scrollobj.style='width: 10px;height:'+contentHeight+'px'+';-moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; background-color: red;position: absolute;border-radius: 5px 5px;';
		scrollout.appendChild(scrollobj);
		fix.appendChild(scrollout);
		content.appendChild(fix);//将滚动条插入父级容器
			$('fix').onmouseover=function(){//鼠标移入显示
				$('fix').style.opacity=1;
			};
			$('fix').onmouseleave=function(){//鼠标移出透明
				$('fix').style.opacity=0.3;
			};
		var scohei=(contentHeight/scrollHeight)<1?(contentHeight/scrollHeight):1;//如果倍数大于1，则滚动条高度等比例缩小，如果没有滚动条比例则等于1
		$('scrollobj').style.height=(content.clientHeight)*scohei+'px';//←←←设置滚动条高度

		var dr=new dragmove();
		dr.drag($('scrollobj'),$('scrollout'),time,moveobj);

//↓↓↓滚轮事件↓↓↓
		if(document.addEventListener){
		    content.addEventListener('DOMMouseScroll',function(event){
		    	document.onmousemove=null;
		    	var e=event||window.event;
		    	//↓↓↓上滚轮↓↓↓
		   		if(e.detail==(-3)){//火狐上滚轮返回3
		   			if(($("scrollobj").offsetTop-$("scrollobj").clientHeight)>=0){
					$("scrollobj").style.top=$("scrollobj").offsetTop-(($("scrollobj").clientHeight)/2)+'px';
					var ainimate =new move();//新建一个move()对象，方便下面调用
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)
					}
					else{
					if($("scrollobj").offsetTop!=0){
					$("scrollobj").style.top=0+'px';
					var ainimate =new move()
					ainimate.moveTop(0,moveobj,10)}
					}
				}
				//↓↓↓下滚轮↓↓↓
				if(e.detail==3){//火狐下滚轮返回3
					if(($("scrollobj").offsetTop+$("scrollobj").clientHeight+$("scrollobj").clientHeight)<=content.offsetHeight){
					$("scrollobj").style.top=$("scrollobj").offsetTop+(($("scrollobj").clientHeight)/2)+'px';
					var ainimate =new move();
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)
					}else 
					{
					if($("scrollobj").offsetTop!=contentHeight-$("scrollobj").offsetHeight){
					$("scrollobj").style.top=contentHeight-$("scrollobj").offsetHeight+'px';
					var ainimate =new move();
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)}
					}	
				}
		    },false);
		}

		//↓↓↓点击滚动条事件↓↓↓
		$('fix').onclick=function(event){
			e=event||window.event;
			if(e.stopPropagation){//←←←阻止事件冒泡
 					e.stopPropagation();
     			}else{
 					e.cancelBubble = true;
 				}
			
				var cmy=e.clientY;
				var scrollHeight=$('scrollobj').offsetTop;
				var a=content.offsetTop+content.clientTop;

				//↓↓↓向上移动↓↓↓
				if((cmy-a)<scrollHeight){
					if(($("scrollobj").offsetTop-$("scrollobj").clientHeight)>=0){
					$("scrollobj").style.top=$("scrollobj").offsetTop-$("scrollobj").clientHeight+'px';
					var ainimate =new move()
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)
					}else 
					{
					$("scrollobj").style.top=0+'px';
					var ainimate =new move()
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)
					}
				}
				//↓↓↓向下移动↓↓↓
				if((cmy-a)>(scrollHeight+$("scrollobj").clientHeight)){
					if(($("scrollobj").offsetTop+$("scrollobj").clientHeight+$("scrollobj").clientHeight)<=content.offsetHeight){
					$("scrollobj").style.top=$("scrollobj").offsetTop+$("scrollobj").clientHeight+'px';
					var ainimate =new move();
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)
					}
					else 
					{
					$("scrollobj").style.top=contentHeight-$("scrollobj").offsetHeight+'px';
					var ainimate =new move();
					ainimate.moveTop(-($("scrollobj").offsetTop)*time,moveobj,10)
					}
				}
		}


	}