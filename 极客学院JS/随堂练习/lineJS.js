
document.write("<br />-------------------<br />");
document.write();


function line(){

    function person(){





        this.changeName=changeName;

        function changeName(newName){
            this.name = newName;
        }

    }


    mySelf = new  person();
    mySelf.age = "18";
    mySelf.high = "172";




    mySelf.changeName("Sunby");

    console.log(mySelf.name + "岁数:" + mySelf.age +"   身高:"+ mySelf.high)



}


document.write(Math.round(4.7));
document.write("<br />");
document.write(Math.random());

document.write("<br />");
var patt1=new RegExp("e");

document.write(patt1.test("The best things in life are free"));
document.write("<br />");
document.write(patt1.exec("The best things in life are free"));

patt1.compile("d");
document.write("<br />");
document.write(patt1.test("The best things in life are free"));


document.write("<br />");
document.write("可用宽度：" + screen.availWidth);
document.write("<br />");
document.write("可用高度：" + screen.availHeight);
document.write("<br />");
document.write("URL 的路径名：" + location.pathname);

document.write("<br />");
var listArr = {uper:{a:"32",b:"ww"},downer:{a:"cc",b:"ll"}};
document.write(listArr.uper.a);


document.write("<br />");

var aa = 12;
var bb;
bb = (typeof aa == "boolean");
document.write(bb);

document.write("<br />");


var  o = {x:1,y:2};
delete o.x;
document.write(o.x);

document.write("<br />-------------------<br />");

var x = "Sunby";
document.write(typeof x);

var tf = typeof x == "string" ? "'"+x+"'":x;
document.write("<br/>");
document.write(tf);

document.write("<br />-------------------<br />");
document.write();
































