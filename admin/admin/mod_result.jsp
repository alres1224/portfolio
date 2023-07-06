<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 수정</title>
</head>
<body>
	<form id="mod_result"></form>
</body>
<script src="./js/post.js"></script>
<script>
	if("${result}" != "0"){
		alert("정상적으로 수정되었습니다.");
	}else{
		alert("오류가 발생했습니다.");
		doPost("mod_result","./member_modify.do");
	}
	window.opener.location.reload();
	window.close();
</script>
</html>