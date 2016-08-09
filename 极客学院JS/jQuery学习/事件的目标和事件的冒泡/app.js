/**
 * Created by tydic on 16/7/6.
 */


$(document).ready(function(){
   $("body").bind("click",bodyHandler);
   $("div").bind("click",divHandler1);
   $("div").bind("click",divHandler2);
});

function bodyHandler(event){
    conlog(event);
}

function divHandler1(event){
    conlog(event);
    //event.stopPropagation();//阻止父级事件冒泡
    event.stopImmediatePropagation();//阻止所有的事件
}

function divHandler2(event){
    conlog(event);
}

function conlog(event){
    console.log(event);
}