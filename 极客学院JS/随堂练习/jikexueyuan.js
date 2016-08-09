


function beginTime(){
    mytime = setInterval(function(){
        getTime();
    },1000);

}

function stopTime(){
    clearInterval(mytime);
}

function getTime(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timeId").innerHTML = t;
}

function locT(){
    location.assign("http://www.baidu.com");
}

function winT(){
    window.open("http://www.baidu.com");
}




























