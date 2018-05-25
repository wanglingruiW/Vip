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

var userEle = necessaryItemObject.userId.el;
var userReg = necessaryItemObject.userId.reg;
var ifRight = document.getElementsByClassName("if-success");
var ifWrong = document.getElementsByClassName("if-wrong");
var warnText = document.getElementsByClassName("text");
console.log(userEle,userReg,ifRight,ifWrong,warnText);
console.log(1);
var passWord = necessaryItemObject.password.el;
var pswReg = necessaryItemObject.password.reg;
console.log(passWord,pswReg);

userEle.onblur = function(){
    var string = this.value;
    addOnlyState(this,userReg.test(string));
}
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
var passWord = necessaryItemObject.password.el;
var pswReg = necessaryItemObject.password.reg;
console.log(passWord,pswReg);

passWord.onblur = function(){
    var string = this.value;
    console.log(string);
    addpsdState(this,pswReg.test(string));
    addpsdState(this,string);
}
function addpsdState(el,bool){
    //确保元素上的 成功或失败状态唯一;
    //先清空;
    ifRight[1].style.display = "none";
    ifWrong[1].style.display = "none";
    warnText[1].style.display = "none";
    passWord.style.border = "1px solid #b2b2b2";
    // el.className = el.className.replace(/\ssuccess|\serror/,"");
    if(bool){
        // el.nextElementSibling.style.display = "none";
        // el.className += " success";
        ifRight[1].style.display = "block";
        ifWrong[1].style.display = "none";
        warnText[1].style.display = "none";
        passWord.style.border = "1px solid #666";
        console.log(1);
    }else{
        console.log(2);
        ifRight[1].style.display = "none";
        ifWrong[1].style.display = "block";
        warnText[1].style.display = "block";
        passWord.style.border = "1px solid red";
        // el.nextElementSibling.style.display = "block";
        // el.className += " error";
        // throw "验证错误";
    }
}
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