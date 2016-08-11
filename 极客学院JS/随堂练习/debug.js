


function debug(msg)
{
    var log = document.getElementById("debuglog");

    if(!log){
        log = document.createElement("div");
        log.id = "debuglog";
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }

    var per = document.createElement("pre");
    var text = document.createTextNode(msg);
    per.appendChild(text);
    log.appendChild(per);
}