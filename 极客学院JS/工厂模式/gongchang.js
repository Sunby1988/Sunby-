/**
 * Created by tydic on 16/6/16.
 */



var gongchang = {};
gongchang.chanyifu = function (argument) {
    this.gongren = 50;
    alert("我们有" + this.gongren);
}

gongchang.chanxie = function(){
    alert("产鞋子");
}

gongchang.yunshu = function(){
    alert("运输");
}

gongchang.changzhang = function(para){
    return new gongchang[para]();
}

var me = gongchang.changzhang("chanyifu");
alert(me.gongren);





