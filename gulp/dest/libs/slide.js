/*
 * 轮播图
 */

function Slide(obj){
	var that = this;
	
	this.elem = obj.el;
	this.w = obj.width;
	this.h = obj.height;
	this.data = obj.data;
	this.len = this.data.length;
	this.now = obj.now || 0;	
	this.timer = null;
	this.direction = 1;	// +1表示向左运动   	-1表示向右运动
	this.ms = obj.ms || 3000;
	
	var t=that.w * -that.now;// 目标值
	this.tab = function(){	
		//document.title = that.now;
		//当每次执行tab函数时，不管上一次的startMove是否执行完毕，先更新到目标值
		that.ol.style.left = t+"px";
		if( that.now==that.len ){
			that.now = 0;
			t = 0;
			startMove( that.ol, {"left":that.w * -that.len}, function(){
				that.ol.style.left = t+"px";				
			} );			
		}else if( that.now==-1 ){						
			that.now = that.len-1;
			t = that.w * -that.now;
			that.ol.style.left = that.w * -that.len+"px";
			startMove( that.ol, {"left":t});			
		}else{
			t = that.w * -that.now;
			startMove( that.ol, {"left":t} );
		}
		// 按钮样式切换		
		var spans = Array.from(that.ul.querySelectorAll("span"));
		spans.forEach(function(span){
			span.style.backgroundColor = "";
		});		
		spans[that.now%that.len].style.backgroundColor = "skyblue";		
	}
	
	this.next = function(){
		that.now+=that.direction;
		that.tab();
	}
	
	this.over = function(){
		startMove(that.p1, {"opacity":100});
		startMove(that.p2, {"opacity":100});
		clearInterval( that.timer );
	}
	
	this.out = function(){
		startMove(that.p1, {"opacity":0});
		startMove(that.p2, {"opacity":0});
		that.timer = setInterval(that.next, that.ms);
	}
	
	this.dom = function(){
		// 用于承载轮播图的舞台里面的html结构写出来
		that.elem.style.width = that.w+"px";
		that.elem.style.height = that.h+"px";
		// 图片
		var tmp = document.createDocumentFragment();
		var ol = document.createElement("ol");
		that.ol = ol;
		tmp.appendChild(ol);
		ol.style.width = that.w*(that.len+1)+"px";
		
		function createli(ad){
			var li = document.createElement("li");
			ol.appendChild(li);
			li.style.width = that.w+"px";
			var a = document.createElement("a");
			li.appendChild(a);
			a.href = ad.link;
			a.target = "_blank";
			a.title = ad.title;
			var img = document.createElement("img");
			a.appendChild(img);
			img.style.width = that.w+"px";
			img.style.height = that.h+"px";
			img.src = ad.img;
		}
		
		that.data.forEach(createli);
		// 因为是无缝轮播，所以需要在最后补充一张图片
		createli(that.data[0]);
		// 按钮
		var ul = document.createElement("ul");
		that.ul = ul;
		tmp.appendChild(ul);
		for( let i=0; i<that.len; i++ ){
			var li = document.createElement("li");
			ul.appendChild(li);
			var span = document.createElement("span");
			li.appendChild(span);
			span.innerHTML = i+1;
			span.onclick = function(){
				that.now = i;
				that.tab();
			}
		}		
		// 左右两个按钮
		var pLeft = document.createElement("p");
		that.p1 = pLeft;
		tmp.appendChild(pLeft);
		pLeft.onclick = function(){
			that.direction = +1;
			that.next();
		}
		
		var pRight = document.createElement("p");
		that.p2 = pRight;
		tmp.appendChild(pRight);
		pRight.onclick = function(){
			that.direction = -1;
			that.next();
		}
		// 让左右两个按钮居中显示
		pLeft.style.top = pRight.style.top = (that.h-60)/2+"px";		
		that.elem.appendChild(tmp);		
		this.tab();// 初始化按钮样式
	}
	
	this.init = function(){	
		that.dom();		
		// 定时器
		that.timer = setInterval(that.next, that.ms);		
		that.elem.onmouseover = that.over;
		that.elem.onmouseout = that.out;
	}
	
	this.init();
	
}
