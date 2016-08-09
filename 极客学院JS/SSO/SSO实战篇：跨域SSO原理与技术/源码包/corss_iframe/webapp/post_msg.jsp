<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>test post msg</title>
<script type="text/javascript" src="js/post_msg.js"></script>
</head>
<body>
POST MESSAGE TEST PAGE
<script type="text/javascript">
	window.onload = function() {
		// postMessage API三个重要信息
		// 1、消息发送的目标，一个window对象，此处window.parent
		// 2、消息内容，即方法的第一个参数，此处document.title，
		//        传递object时因浏览器兼容问题，建议通过序列化操作将内容序列化成字符串
		// 3、目标窗口的域，如果明确指定，则仅目标窗口URL匹配指定域时可接收，设为*表示不限
		//        起到限制接收的作用
		window.parent.postMessage(document.title, "*");
		
		
		// post_msg.js调用示例(注：使用前必须在发消息和收消息页面都引入post_msg.js文件)
		
		// 通过以下一行代码，可直接调用main.jsp的setVal方法
		// sendFrmMsg(window.parent, "setVal", document.title);
		
		// 如果setVal方法有返回值，并在此要处理返回结果，可用下面代码
		// sendFrmMsg(window.parent, "setVal", document.title, function(ret) {alert(ret)});
		
		// 向main.jsp写入一个变量，如user='zhangsan';
		// setFrmVarValue(window.parent, "document.title", "new title");
		
		// 从main.jsp读取一个变量值，如title
		// getFramVarValue(window.parent, "document.title", function(ret){alert(ret);});
	};
</script>
</body>
</html>