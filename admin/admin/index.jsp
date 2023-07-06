<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long time = System.currentTimeMillis(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BEST SHOP ADMINISTRATOR LOGIN PAGE</title>
<link rel="stylesheet" type="text/css" href="./css/index.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/head.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/section.css?v=<%=time%>">
</head>
<body>
	<header>
		<div class="logo"></div><div class="logoText">ADMINISTRATOR</div>
	</header>
	<section>
		<form id="login">
			<div class="base">
				<ul>
					<li><input type="text" name="aid" placeholder="관리자 아이디를 입력하세요."></li>
					<li><input type="password" name="apass" placeholder="관리자 패스워드를 입력하세요."></li>
				</ul>
				<span onclick="doLogin()">MASTER LOGIN</span>
				<label>※ 본 사이트는 관리자 외에는 접근을 금합니다. 페이지 접근에 대한 접속 정보는 모두 기록됩니다.</label>
				<ol>
					<li onclick="Lgo('./add_master.html')">신규 관리자 등록 요청</li>
					<li onclick="Lgo('./add_master_search.html')">아이디/패스워드 찾기</li>
				</ol>
			</div>
	</form>
	</section>
<script src="./js/section.js?v=<%=time%>"></script>
</body>
</html>