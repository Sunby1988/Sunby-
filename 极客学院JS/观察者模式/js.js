/**
 * Created by tydic on 16/7/5.
 */


~(function(){
    var o = $({});
    $.jianting = function(){
        o.on.apply(o,arguments);
    }
    $.fabu = function(){
        o.trigger.apply(o,arguments);
    }
    $.qingchu = function(){
        o.off.apply(o,arguments);
    }

})();

$.jianting('/test/ls',function(e,a,b,c){
    alert(a+'------'+b+'-------'+c+'--------'+ e);
});

$.jianting('/test/ls',function(e,a,b,c){
    alert('ok');
});

setTimeout(function(){

},1000);

$.fabu('/test/ls',['sdsdsd',2,3]);