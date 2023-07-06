<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long time = System.currentTimeMillis(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>환경설정페이지</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
</head>
<body>
	<form id="set"></form>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script src="./js/post.js?v=<%=time%>"></script>
<script>
	if("${msg}" === ""){
		alert("정보 업데이트에 성공했습니다.");
		doPost("set","./shop_form.do");
	}else{
		alert("${msg}");
	}
</script>
</html>