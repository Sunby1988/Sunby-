/**
 * Created by tydic on 16/7/14.
 */

window.onload = function(){

}


function saveStorage(){
    var data = new Object();
    data.name = document.getElementById("name").value;
    data.email = document.getElementById("email").value;
    data.tel = document.getElementById("tel").value;
    data.memo = document.getElementById("memo").value;
    var str = JSON.stringify(data);
    localStorage.setItem(data.name,str);
    alert("数据保存");

}

function findStorage(id){
    var find = document.getElementById('find').value;
    var str = localStorage.getItem(find);
    var data = JSON.parse(str);
    var result = "姓名:" + data.name +"<br/>";
    var result = "email:" + data.email +"<br/>";
    var result = "电话:" + data.tel +"<br/>";
    var result = "备注:" + data.memo +"<br/>";

    var target = document.getElementById(id);
    target.innerHTML = result;
}
