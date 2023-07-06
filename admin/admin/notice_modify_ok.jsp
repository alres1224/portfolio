<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 수정</title>
</head>
<body>
	<form id="notice_modify_ok"></form>
</body>
<script src="./js/post.js"></script>
<script>
	alert("${msg}");
	doPost('notice_modify_ok','./notice_list.do');
</script>
</html>