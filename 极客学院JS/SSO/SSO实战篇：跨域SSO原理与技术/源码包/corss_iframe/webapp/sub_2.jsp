<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>sub_2：这是第二个子页面的标题</title>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript">
	function fun(text) {   // window.fun
		alert("sub_2的fun被调用");
		$("p").html(text);
	}
	
	// window.fun
</script>
</head>
<body>
这是第二个子页面
<p>fun函数调用后写入的内容</p>
</body>
</html>