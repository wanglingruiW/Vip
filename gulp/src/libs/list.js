$(function(){
    // console.log(1);
  new ShopCar("http://localhost:8888/libs/listbig.json");
})
function ShopCar(url){
    this.url = url;
    this.init();
    console.log(2);
};
ShopCar.prototype ={
    constructor:ShopCar,
    init(){
        console.log(1);
        this.loading()
        .then(function(){
            console.log(res);
        }.bind(this))
    },
    loading(){
        var opt = {
            url:this.url
        }
        return $ajax;

    }
}
// console.log(1);
