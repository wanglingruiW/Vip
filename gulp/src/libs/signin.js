$(function(){
 
    $("input").blur(function(){
            $(this).css("border","1px solid #b2b2b2");
        })
    
    $("input").blur(function(){
            $(this).css("border","1px solid red");
        })
    
    })
    
        // function checkName(){
    
        //     //获取到了用户名的值
        
        //     var userPhone = document.getElementById("J_mobile_code");
        
        //     var ifRight = document.getElementsByClassName("if-success");
        //     var ifWrong = document.getElementsByClassName("if-wrong");
        //     // console.log(userPhone,ifRight,ifWrong);
        //     var reg = /^[1][3,4,5,7,8][0-9]{8}$/;
            
        //     document.onclick =function(){
        //         var tex =userPhone.innerText;
        //         console.log(tex);
        //     }
            // if(reg.test(userPhone.innerHTML)){
            //     //符合规则 
            //     ifRight[0].style.display="block";
            //     ifWrong[0].style.display ="none";
            //     return true;
            // }else{
            //     ifRight[0].style.display="none";
            //     ifWrong[0].style.display ="block";
            // }  
        
        //  }
    
         var necessaryItemObject = {
            userId:{
                el:$("J_mobile_name"),
                reg:/^[1][3,4,5,7,8][0-9]{9}$/,
                hasVaild:false
            },
            password:{
                el:$("J_mobile_pwd"),
                reg:/^[a-z0-9\u0021-\u002f]{6,20}$/i,
                hasVaild:false
            }
        }
    
    //----------------验证手机号码是否正确
        var userEle = necessaryItemObject.userId.el;
        var userReg = necessaryItemObject.userId.reg;
        var ifRight = document.getElementsByClassName("if-success");
        var ifWrong = document.getElementsByClassName("if-wrong");
        var warnText = document.getElementsByClassName("text");
        var redWarn = document.getElementsByClassName("indicator-item");
        var greyWarn = document.getElementsByClassName("indicator-item-bg");
        var getWeak = document.getElementsByClassName("indicator-text");
        console.log(warnText);
        userEle.onblur = function(){
            var string = this.value;
            addOnlyState(this,userReg.test(string));
        }
    //--------------------------------验证密码是否正确
        var passWord = necessaryItemObject.password.el;
        var pswReg = necessaryItemObject.password.reg;
        console.log(passWord,pswReg);
        
        passWord.onblur = function(){
            var string = this.value;
            console.log(string);
            addpsdState(this,pswReg.test(string));
            strengthValid(this,string);
        }
        var repassWord = document.getElementById("J_mobile_confirm_pwd");
        repassWord.onblur = function(){
            var string = this.value;
            var pawNmuber = passWord.value;
            doubleCheck(pawNmuber,string);
            console.log(string);
        }
    
    //-------------------功能部分
    
    function addOnlyState(el,bool){
        //确保元素上的 成功或失败状态唯一;
        //先清空;
        ifRight[0].style.display = "none";
        ifWrong[0].style.display = "none";
        warnText[0].style.display = "none";
        userEle.style.border = "1px solid #b2b2b2";
        // el.className = el.className.replace(/\ssuccess|\serror/,"");
        if(bool){
            // el.nextElementSibling.style.display = "none";
            // el.className += " success";
            ifRight[0].style.display = "block";
            ifWrong[0].style.display = "none";
            warnText[0].style.display = "none";
            userEle.style.border = "1px solid #666";
            console.log(1);
        }else{
            console.log(2);
            ifRight[0].style.display = "none";
            ifWrong[0].style.display = "block";
            warnText[0].style.display = "block";
            userEle.style.border = "1px solid red";
            // el.nextElementSibling.style.display = "block";
            // el.className += " error";
            // throw "验证错误";
        }
    }
    function addpsdState(el,bool){
        //确保元素上的 成功或失败状态唯一;
        //先清空;
        ifRight[2].style.display = "none";
        ifWrong[2].style.display = "none";
        warnText[2].style.display = "none";
        passWord.style.border = "1px solid #b2b2b2";
        // el.className = el.className.replace(/\ssuccess|\serror/,"");
        if(bool){
            // el.nextElementSibling.style.display = "none";
            // el.className += " success";
            ifRight[2].style.display = "block";
            ifWrong[2].style.display = "none";
            warnText[2].style.display = "none";
            passWord.style.border = "1px solid #666";
            console.log(1);
        }else{
            console.log(2);
            ifRight[2].style.display = "none";
            ifWrong[2].style.display = "block";
            warnText[2].style.display = "block";
            passWord.style.border = "1px solid red";
            // el.nextElementSibling.style.display = "block";
            // el.className += " error";
            // throw "验证错误";
        }
    }
    //判定密码强弱
    function strengthValid(el,str){
        var strength = 0;
        if(/\d/g.test(str)){
            strength++;
        }
        if(/[a-z]/g.test(str)){
            strength++;
        }
        if(/[\u0021-\u002f]/g.test(str)){
            strength++;
        }
        
        switch(strength){
            case 1:
                redWarn[0].style.width = "10px";
                getWeak[0].style.display="block";
                getWeak[1].style.display="none";
                getWeak[2].style.display="none";
                break;
            case 2:
                redWarn[0].style.width = "20px";
                getWeak[1].style.display="block";
                getWeak[0].style.display="none";
                getWeak[2].style.display="none";
                break;
            case 3:
                redWarn[0].style.width = "30px";
                getWeak[2].style.display="block";
                getWeak[1].style.display="none";
                getWeak[0].style.display="none";
                break;
            default:
                el.style.color = "#fff";
    
        }
    
    }
    //------------------------再次验证密码
    function doubleCheck(ele,str){
        console.log(1);
        // ifRight[3].style.display = "none";
        // ifWrong[3].style.display = "none";
        // warnText[3].style.display = "none";
        // repassWord.style.border = "1px solid #b2b2b2";
        if(ele == str){
        ifRight[3].style.display = "block";
        ifWrong[3].style.display = "none";
        warnText[3].style.display = "none";
        repassWord.style.border = "1px solid #666";
        }else{
        ifRight[3].style.display = "none";
        ifWrong[3].style.display = "block";
        warnText[3].style.display = "block";
        repassWord.style.border = "1px solid red";
        }
    
    }
    // var accecPt = document.getElementsByClassName("z-u-form-item-success");
    // var unaccecPt = document.getElementsByClassName("z-u-form-item-warning"); 
    var checkBox = document.getElementsByClassName("ui-checkbox-normal");
    var count = 0;
    // $(function(){
    // $(".ui-checkbox-normal").click(function(){
    //     $(".indicator-item").eq(4).css("hidden","true")
    //     })
    //     console.log($(".ui-checkbox-normal"),$(".indicator-item").eq(4))
    
    // })
    // checkBox[0].onmousedown = function Accept(){
    //     count ++;
    //         console.log(count);
    //         if (count/2 == 0){
    //             warnText[4].style.display = "block";
    //         }else if(count/2 !==0){
    //                warnText[4].style.display = "none";
    //         }
        
    // } 
    var oSub = $("J_mobile_reg_button");
    console.log(oSub);
    oSub.onclick = function(e){
        var evt = e || window.e;
        for(var attr in necessaryItemObject){
            if(!necessaryItemObject[attr].reg.test(necessaryItemObject[attr].el.value)){
                //不让提交;
                console.log(55555);
                evt.preventDefault();
                break;
            }
        }
    }
        function $(selector){
            return document.getElementById(selector)
        }
    