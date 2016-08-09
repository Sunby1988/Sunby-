/**
 * Created by tydic on 16/7/6.
 */


//$(document).ready(function(){
//   $("#btn1").click(function(){
//       alert("text:" + $("#text").text());
//   }) ;
//});
//
//$(document).ready(function(){
//    $("#btn1").click(function(){
//        alert("html:" + $("#text").html());
//    }) ;
//});




$(document).ready(function(){
    $("#btn1").click(function(){
        alert("获取到输入框的值:" + $("#it").val());
    }) ;


//修改链接地址
    $("#btn2").click(function(){
        alert("address:" + $("#aid").attr("href"));
    }) ;

    //修改p标签文本
   $("#btn3").click(function(){
       $("#p1").text("极客学院 ");
   }) ;
//修改p标签中文本 替换为链接<a>标签
    $("#btn4").click(function(){
        $("#p2").html("<a href='http://www.jikexueyuan.com' target='_blank'>极客学院</a>");
    });

    //替换输入文本框中的文字
    $("#btn5").click(function(){
        $("#i3").val("极客学院");
    });


    //修改a标签的链接地址 设置title
    $("#btn6").click(function(){

        //var atr = document.getElementById("aaid").title;
        //alert(atr);

        if($("#aaid").attr("title") == "baidu"){
            //$("#aaid").attr("href","http://www.jikexueyuan.com");
            $("#aaid").attr({
                "href":"http://www.jikexueyuan.com",
                "title":"jkxy",
            });
            $("#aaid").text("极客学院");
            $("#btn6").text("变成百度");

        }
        else{
            //$("#aaid").attr("href","http://www.jikexueyuan.com");
            $("#aaid").attr({
                "href":"https://www.baidu.com",
                "title":"baidu",
            });
            $("#aaid").text("百度链接");
            $("#btn6").text("变成极客学院");
        }

    });

    //获取标签的回调值
    $("#btn7").click(function(){
       $("#p5").text(function(ii,oot){
          return "old:"+oot + " 新内容替换 i:" +(ii);
           //return "新内容替换";
       });
    });



    //append
    $("#bad").click(function(){
        //$("#pad").append(" this is my webpage add content ");
        $("#pad").prepend(" this is my webpage add content ");

    });

    $("#bad1").click(function(){
        //$("#pad").append(" this is my webpage add content");
        $("#pad").before(" this is my webpage add content ");

    });


    $("#bdel").click(function(){
       //$("#divdel").remove();//全部删除
       $("#divdel").empty();//删除子元素
    });

    $("#bhid").click(function(){
        //if($("#phid").is(":hidden")){
        //    $("#phid").show(1000);
        //}else
        //{
        //    $("#phid").hide(1000);
        //}

        //等同于以上代码
        $("#phid").toggle(1000);

    });

    //点击div隐藏
    $(".fangkuaiDiv div").click(function(){
        $(this).hide(1000,function(){
           $(this).remove();
       }) ;
    });


});



function appendText(){
    var text1 = "<p>Sunby</p>";
    var text2 = $("<p></p>").text("Sun Changshi");
    var text3 = document.createElement("p");
    text3.innerHTML = "Sun Boyang";
    $("body").append(text1,text2,text3);
}