// 多属性运动需多开定时器
// 开 <==> 关
// 储存定时器的返回值，并且可以在定时器内部访问到这个变量
// 利用一步程序访问某个变量的数值
function move(dom, json, callback) {
    // 在开启时先关闭所有定时器,防止出现定时器抛空错误
    // 通过判断是否有isMoving属性来判断是否为第一次调用move方法
    console.log(move.isMoving);
    if(move.isMoving) {
        move.stop();
    }
    // 创建timer对象并添加进dom元素
    dom.timer = {};
    // 通过遍历json里每一项建立相应的定时器并加入dom元素的timer属性列表
    for(var attr in json) {
        (function(myAttr) {
            dom.timer[myAttr] = setInterval(function() {
                console.log(1);
                // 为了让事件能够存有循环时的attr
                // 我们采用了闭包对变量值进行保存
                // 获取dom[myAttr]的当前值
                var iNow; // dom当前相应的属性值
                // 判断是否为opacity，如果是opacity属性，则需要对其进行// 保留两位小数
                if(myAttr == "opacity") {
                    iNow = parseInt(getStyle(dom, myAttr) * 100);
                } else {
                    iNow = parseInt(getStyle(dom, myAttr));
                }
                // 创造一个速度
                var speed = (json[myAttr] - iNow) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                // 判断运动状态
                // 运动完成后需要清除定时器
                if(iNow == json[myAttr]) {
                    // 抵达终点，清除定时器，并在dom.timer中进行相应清除
                    clearInterval(dom.timer[myAttr]);
                    delete dom.timer[myAttr];
                    // console.log(dom.timer)
                    // 当前对象之中还有几项
                    // console.log(Object.keys(dom.timer).length)
                    // 通过判断dom.timer的keys值是否为0来得知所有动画是// 否执行完成，如果执行完成，则可以进行callback方法的// 调用
                    if(!Object.keys(dom.timer).length) {
                        if(callback) {
                            // 如果存在callback参数，则执行
                            callback();
                            // 如果执行callback，则表明当前json动画队// 列已全部执行完毕，此时可以设置isMoving属// 性值为false
                            move.isMoving = false;
                        }
                    }
                } else {
                    // 开始运动
                    if(myAttr == "opacity") {
                        dom.style[myAttr] = (iNow + speed) / 100;
                    } else {
                        dom.style[myAttr] = (iNow + speed) + "px";
                    }
                }
            }, 30);
        })(attr);
    }
    // 给move方法一个停止所有当前正在运行的定时器的函数
    // 如果传入bool值并且值为true，则表明需要在停止时将元素属性值
    // 设置为json列表中的终点值
    move.stop = function(bool) {
        for(var attr in dom.timer) {
            clearInterval(dom.timer[attr]);
            delete dom.timer[attr]
        }
        if(bool) {
            for(var attr in json) {
                if(attr == "opacity") {
                    dom.style[attr] = json[attr] / 100;
                } else {
                    dom.style[attr] = json[attr] + "px";
                }
            }
        }
    }
    // 表明当前方法被调用过
    move.isMoving = true;
}
// 获取元素当前属性值的方法
function getStyle(ele,attr){
	if(getComputedStyle){
		return getComputedStyle(ele)[attr];
	}else{
		return ele.currentStyle[attr];
	}
}
