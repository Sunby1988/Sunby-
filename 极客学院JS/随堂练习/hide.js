

function hide(e,reflow){
    if(reflow){
        e.style.display = "none";//block
    }
    else{
        e.style.visibility = "hidden";
    }
}

function highlight(e){
    if(!e.className) e.className = "hilite";
    else e.className += "hilite";
}