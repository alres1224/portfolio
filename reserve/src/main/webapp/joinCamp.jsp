<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long today = System.currentTimeMillis();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/index.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/header.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/join.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/footer.css?v=<%=today%>">
<title>회원가입</title>
</head>
<body>
	<header>
		<%@include file="./header.jsp" %>
	</header>

	<footer>
		<%@include file="./footer.jsp" %>
	</footer>
</body>
<script src="./js/location.js?v=<%=today %>"></script>
<script src="./js/join.js?v=<%=today %>"></script>
<script>
	if("${msg}" === "yes"){
		alert("회원가입을 완료했습니다.");
		loca("./index.jsp");
	}else{
		alert("회원 가입 오류 발생");
		history.go(-1);
	}
</script>
</html>