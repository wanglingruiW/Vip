$(function(){
    function setTimecount(date){
        // if(!J_countDown_D||!J_countDown_H||!J_countDown_M||!J_countDown_S) return;
        this.countDay = $("#J_countDown_D");
        this.countHour = $("#J_countDown_H");
        this.countMin = $("#J_countDown_M");
        this.countSec = $("#J_countDown_S");
        
        this.date = date;
        this.init();        
    };
    setTimecount.prototype={
        constructor:setTimecount,
        init(){
            this.caldata()
        },
            caldata(){
            var terminalTime = new Date(this.date);
            // 现在的时间设置
            var curTime = new Date();
            var daTe = new Date(this.date);
            // 两时间之差
            var dif = daTe.valueOf() - curTime.valueOf();
            // console.log(dif);
            // 如果设置的未来时间在当前时间之前
            // 则不执行倒计时
            if (dif < 0) {
                return false;
            }

             var daysLeft = Math.floor(dif / 1000 / 3600 / 24);
             var hoursLeft = Math.floor(dif / 1000 / 3600 - daysLeft *   24);
             var minutesLeft = Math.floor(dif / 1000 / 60 - daysLeft *   24 * 60 - hoursLeft * 60);
             var secondsLeft = Math.floor(dif / 1000 - daysLeft * 24 *   3600 - hoursLeft * 3600 - minutesLeft * 60);
            this.countDay.html(daysLeft);
            this.countHour[0].innerHTML = hoursLeft;
            this.countMin[0].innerHTML = minutesLeft;
            this.countSec[0].innerHTML = secondsLeft;

            },
  
    }
   setInterval(function(){
        new setTimecount("2018/5/30 0:0:0");
   },1000)

})

/* <li class="mst-nav-522-item mst-nav-522-item-4  mst-nav-522-item-top">
<a class="mst-nav-522-item-inner">回顶部</a>
</li>    */
// 点击回到顶部时触发事件
// 设置scrollTop值为0
var hiderSide = document.getElementsByClassName("mst-nav-522");
document.onscroll=function(){
    // alert(1)

    // console.log(document.documentElement.scrollTop,hiderSide);
    
    if (document.documentElement.scrollTop <= 10770){
        hiderSide[0].style.display = "none";
        // alert(false)
    }else{
        hiderSide[0].style.display = "block";
        // alert(true)
    }
}
var timer;
btn.onclick = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(timer);
        } else {
            document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
        }
    }, 1);
}

