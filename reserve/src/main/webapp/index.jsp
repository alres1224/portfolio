<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long today = System.currentTimeMillis();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ko">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/index.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/header.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/login.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/footer.css?v=<%=today%>">
<title>로그인</title>
</head>
<body>
	<header>
		<%@include file="./header.jsp" %>
	</header>
	<section>
		<%@include file="./login.jsp" %>
	</section>
	<footer>
		<%@include file="./footer.jsp" %>
	</footer>
</body>
<script src="./js/location.js?v=<%=today %>"></script>
<script src="./js/login.js?v=<%=today %>"></script>
</html>