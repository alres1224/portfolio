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
<link rel="stylesheet" type="text/css" href="./css/part3.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/part4.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/footer.css?v=<%=today%>">
<title>야영장 예약 확인</title>
</head>
<body>
	<header>
		<%@include file="./header.jsp" %>
	</header>
	<section>
	<form id="part4">
		<input type="hidden" name="rcode" value="">
		<div class="p4Base">
			<label class="p4Top">야영장 예약 확인</label>
			<ul class="p3Top control">
				<li><img src="./ico/camping.svg"><label id="la0"></label> <label id="la1"></label> 야영장</li>
				<li><label id="la2"></label> ~ <label id="la3"></label></li>
			</ul>
			<ul class="p3Top2 control">
				<li>야영장 위치</li>
				<li><label id="la4"></label></li>
				<li>총 금액 : <label id="la5"></label> 원</li>
			</ul>
			<ul class="p3Ico">
				<li><img src="./ico/report.svg"></li>
				<li>예약자 정보</li>
			</ul>
			<ul class="p4Code">
				<li>예약번호</li>
				<li><input type="text" name="code" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" maxlength="8">예약번호 8자리 입력</li>
				<li><div id="p4Btn">예약 확인</div></li>
			</ul>
			<ul class="p3Info control">
				<li>고객명</li><li><label id="la6"></label></li>
				<li>연락처</li><li><label id="la7"></label></li>
				<li>인원수</li><li><label id="la8"></label> 명</li>
				<li>예약번호</li><li><label id="la9"></label></li>
			</ul>
			<ul class="p3Ico control">
				<li><img src="./ico/pay.svg"></li>
				<li>결제 수단</li>
			</ul>
			<ul class="p3Confirm control">
				<li><label id="la10"></label></li>
				<li><label id="la11"></label></li>
			</ul>
			<div class="cancelBtn control">예약 취소</div>
		</div>
	</form>
	</section>
	<footer>
		<%@include file="./footer.jsp" %>
	</footer>
</body>
<script src="./js/location.js?v=<%=today %>"></script>
<script src="./js/part4.js?v=<%=today %>"></script>
</html>