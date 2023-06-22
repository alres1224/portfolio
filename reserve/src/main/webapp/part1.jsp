<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long today = System.currentTimeMillis();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/index.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/header.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/part1.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/footer.css?v=<%=today%>">
<title>야영장 예약하기</title>
</head>
<body>
	<header>
		<%@include file="./header.jsp" %>
	</header>
	<section>
		<form id="p1">
			<input type="hidden" name="ccampname" value="">
			<input type="hidden" name="ccamppart" value="">
			<input type="hidden" name="cperson" value="">
			<div class="p1Base">
				<label class="p1Text">야영장 예약하기</label>
				<div id="p1List">
				</div>
				<span class="p1Ico"></span>
				<label class="p1Line">야영장을 선택해주세요.</label>
				<div class="p1Date">
					<ul>
						<li>입실일자</li>
						<li><input type="date" name="rindate">
						<li>퇴실일자</li>
						<li><input type="date" name="routdate">
					</ul>
					<div id="p1Btn">야영장 선택</div>
				</div>
			</div>
		</form>
	</section>
	<footer>
		<%@include file="./footer.jsp" %>
	</footer>
</body>
<script src="./js/location.js?v=<%=today %>"></script>
<script src="./js/part1.js?v=<%=today %>"></script>
</html>