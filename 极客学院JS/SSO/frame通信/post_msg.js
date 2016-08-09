/**
 * Created by tydic on 16/6/28.
 */



function sendFrmMsg(targetWindow,cmd,args,callback){
    var fname;
    if(callback){
        fname = "uuid" + new Date().getTime();//生成唯一编码
        window[fname] = callback;
    }

    args = (args instanceof Array)?args:[args];

    var msg = {
        cmd:cmd,//"setVal"
        args:args,//[document.title]
        returnCmd:fname//option
    }

    targetWindow.postMessage(JSON.stringify(msg),"*");
}



window.onmessage = function(evt){
    evt = evt||event;

    var  source = evt.origin;

    try{
        var obj = JSON.parse(evt.data);
        console.log(obj);
    }catch(e){
        console.log(e);
    }

    if(obj.cmd){obj["arg0"]="title";
        var cmd = obj.cmd + "(";

        if(obj.args){
            for(var i=0;i<obj.args.length;++i){
                obj["arg"+i]=obj.args[i];
                if(i>0){
                    cmd += ",";
                }
                cmd += "obj.arg" + i;
            }
        }

        cmd += ")";
        //以上代码完成后，如obj.cmd="fun",则拼接字符串如下：fun(obj.arg1,obj.arg2);
        //在通过eval执行时，各参数即obj.arg1等已绑定到obj对象上，所以取的是传递过来的参数数组值

        try{
            var ret = eval(cmd);
            if(obj.returnCmd){//判断是否需要回调

                evt.source.postMessage(JSON.stringify({
                    cmd:obj.returnCmd,
                    args:[ret]
                }),evt.origin);

            }
        }catch(e){

            if(console)console.log(e);

        }

    }


}