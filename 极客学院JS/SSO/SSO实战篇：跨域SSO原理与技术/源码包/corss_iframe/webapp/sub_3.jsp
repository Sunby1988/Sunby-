<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>sub_3: page of sub_3</title>
</head>
<body>
这是第三个子页面

<script type="text/javascript">
	// 这个页面执行完成后，携带参数跳转回父页面同域页面	
	setTimeout(function() {
		alert("定时自动跳转")
		location.href = "http://www.a.com/sub_3_2.jsp?arg=" + document.title;
	}, 1000);
</script>
</body>
</html>