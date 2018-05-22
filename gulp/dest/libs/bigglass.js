$(function(){
    function Magnifier(options){
        必选参数和非必选参数
        // options = {
        //     small_ele: "string",
        //     focus_ele:"string",
        //     big_ele:"string"
        // }
       this.small_ele = $(options.small_ele);
       this.focus_ele = $(options.focus_ele);
       this.big_ele = $(options.big_ele);
       if(this.small_ele.length == 0 &&this.focus_ele.length == 0&&this.big_ele.length == 0) return;
       this.init();
       console.log(this.small_ele,this.big_ele);
    }
    Magnifier.prototype = {
    constructor:Magnifier,
    init(){
        // 绑定鼠标移入事件
        this.small_ele.on("mouseover",$.proxy(this.toggellFocus));
    },
    toggleFocus(){
        console.log(1);
    },
    smallMove(){

    },
    bigMove(){

    },
    scale(){

    }
    }
    new Magnifier({
            small_ele: ".small",
            focus_ele:".grayBox",
            big_ele:"big img"
    })
})