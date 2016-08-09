/**
 * Created by tydic on 16/7/6.
 */


$(document).ready(function(){
   //$("#clickBtn").bind("click",clickHandler1);
   //$("#clickBtn").bind("click",clickHandler2);
   // $("#clickBtn").unbind("click",clickHandler1);

    //1.7以后 on 等于 bind
    $("#clickBtn").on("click",clickHandler1);
    $("#clickBtn").on("click",clickHandler2);
    $("#clickBtn").off("click",clickHandler1);

});


function clickHandler1(e){
    console.log("clickHandler1");
}


function clickHandler2(e){
    console.log("clickHandler2");
}