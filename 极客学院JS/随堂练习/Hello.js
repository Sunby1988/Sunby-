/**
 * Created by tydic on 16/5/11.
 */




function changeWord()
{
    x=document.getElementById("demo");  // 找到元素
    x.innerHTML="Hello JavaScript!";    // 改变内容
}

function changeColor()
{
    x=document.getElementById("demo") // 找到元素
    x.style.color="#ff0000";          // 改变样式
}


function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("bulbon"))
    {
        element.src="i/eg_bulboff.gif";
    }
    else
    {
        element.src="i/eg_bulbon.gif";
    }
}

function yanzhengshuzi()
{
    var x=document.getElementById("textDemo").value;
    if(x==""||isNaN(x))
    {
        alert("不是数字");
    }
    else
    {
        alert(x)
    }

}

function docWrite()
{
    document.write("<p>document.write覆盖所有了</p>");
}


function changeMyDIVtext()
{
    var myWord = "Hello world xxxxxxx",
    myMatch = 100+20;

    document.getElementById("myDIV").innerHTML = myWord;
    document.getElementById("myDIV1").innerHTML=myMatch +" 次 "+ myWord;
}


function alertView()
{
    alert("系统弹框");


    var answer = confirm("你准备好了吗？");

    if(answer) window.location = "https://www.baidu.com";

}

function xingqiji()
{
    var da = new Date().getDay();
    //confirm(da);

    console.log(da);

    var x;
    var d=new Date().getDay();
    switch (d)
    {
        case 0:
            x="Today it's Sunday";
            break;
        case 1:
            x="Today it's Monday";
            break;
        case 2:
            x="Today it's Tuesday";
            break;
        case 3:
            x="Today it's Wednesday";
            break;
        case 4:
            x="Today it's Thursday";
            break;
        case 5:
            x="Today it's Friday";
            break;
        case 6:
            x="Today it's Saturday";
            break;
    }
    document.getElementById("xingqiji").innerHTML=x;
}


function tryThrow()
{
    try
    {
        var x=document.getElementById("trythrow").value;
        if(x=="")    throw "值为空";
        if(isNaN(x)) throw "不是数字";
        if(x>10)     throw "太大";
        if(x<5)      throw "太小";
    }
    catch(err)
    {
        var y=document.getElementById("mess");
        y.innerHTML="错误：" + err + "。";
    }
}

function checkCookies()
{
    if (navigator.cookieEnabled==true)
    {
        alert("已启用 cookie")
    }
    else
    {
        alert("未启用 cookie")
    }
}





//方法调用，获取返回值。
function clickUpWord()
{
    var upW = upWord();

    console.log(upW);
    alert(upW);
}
//离开输入框时将所有字符转换成大写
function upWord()
{
    var x=document.getElementById("fname");
    x.value=x.value.toUpperCase();

    return x.value;
}


//鼠标移动到上面
function mOver(obj)
{
    obj.innerHTML="谢谢"
}
//鼠标离开
function mOut(obj)
{
    obj.innerHTML="把鼠标移到上面"
}
//按下鼠标
function mDown(obj)
{
    obj.style.backgroundColor="#1ec5e5";
    obj.innerHTML="请释放鼠标按钮"
}
//抬起鼠标
function mUp(obj)
{
    obj.style.backgroundColor="green";
    obj.innerHTML="请按下鼠标按钮"
}

//删除标签
function delP(){
    var parent=document.getElementById("div1");
    var child=document.getElementById("p1");
    parent.removeChild(child);

    //通过子元素找到父元素删除子元素
    //var child=document.getElementById("p1");
    //child.parentNode.removeChild(child);
}


//验证邮箱
function validate_email(field,alerttxt)
{
with (field){
apos=value.indexOf("@")
dotpos=value.lastIndexOf(".")
if (apos<1||dotpos-apos<2)
{
  alert(alerttxt);return false;
}
else {return true}
}
}

function validate_form(thisform)
{
with (thisform)
{
if (validate_email(email,"Not a valid e-mail address!")==false)
  {email.focus();return false}
}
}
