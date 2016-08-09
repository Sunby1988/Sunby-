<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>又一个与main页面同域的sub_3，辅助跳转作用</title>
</head>
<body>
又一个与main页面同域的sub_3，辅助跳转作用
<script type="text/javascript">
	var arg = "<%=request.getParameter("arg")%>";
	window.onload = function () {
		alert("在同域辅助页面上调用父页面方法，完成title设置")
		window.top.setVal(arg);
	}
</script>
</body>
</html>