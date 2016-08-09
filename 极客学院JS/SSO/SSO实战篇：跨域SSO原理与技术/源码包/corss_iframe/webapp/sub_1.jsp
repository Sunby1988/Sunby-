<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>sub_1：这是第一个子页面的标题</title>
</head>
<body>
这是第一个子页面
<button onclick="callparent();">调用父页面方法</button>

<script type="text/javascript">
	function callparent(arg) {
		// 获取父页面window引用
		var pwin = window.parent; 
		// 如果有多层frame嵌套，window.top表示顶层窗口引用
		// var topwin = window.top;
		
		pwin.fun(12345);
		}
</script>
</body>
</html>