<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	long time = System.currentTimeMillis();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 관리 페이지</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/notice_list.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
</head>
<body>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<section>
		<form id="notice_delete"></form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script>
	alert("${msg}");
	doPost('notice_delete','./notice_list.do');
</script>
</html>
</html>