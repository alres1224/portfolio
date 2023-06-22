<%@page import="java.text.DecimalFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	long today = System.currentTimeMillis();
	DecimalFormat df = new DecimalFormat("###,###");
	
	String campname = request.getParameter("ccampname");
	String camppart = request.getParameter("ccamppart");
	String campcode = request.getParameter("ccampcode");
	String indate = request.getParameter("cindate");
	String outdate = request.getParameter("coutdate");
	String rmoney = request.getParameter("rmoney");
	String money = df.format(Integer.parseInt(request.getParameter("rmoney")));
	String camproom = request.getParameter("ccamproom");
	String name = request.getParameter("rname");
	String tel = request.getParameter("rtel");
	String person = request.getParameter("rperson");
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/index.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/header.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/part3.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/footer.css?v=<%=today%>">
<title>야영장 예약하기</title>
</head>
<body>
	<header>
		<%@include file="./header.jsp" %>
	</header>
	<section>
	<form id="part3">
		<input type="hidden" name="rcode" value="">
		<input type="hidden" name="rname" value="<%=name%>">
		<input type="hidden" name="rtel" value="<%=tel%>">
		<input type="hidden" name="ccode" value="<%=campcode%>">
		<input type="hidden" name="rperson" value="<%=person%>">
		<input type="hidden" name="rindate" value="<%=indate %>">
		<input type="hidden" name="routdate" value="<%=outdate%>">
		<input type="hidden" name="rmoney" value="<%=rmoney %>">
		<input type="hidden" name="rpay" value="">
		<input type="hidden" name="rpayck" value="N">
		<div class="p3Base">
			<label class="p3Text">야영장 예약하기</label>
			<ul class="p3Top">
				<li><img src="./ico/camping.svg"> <%=campname %> <%=camppart %> 야영장</li>
				<li><%=indate %> ~ <%=outdate %></li>
			</ul>
			<ul class="p3Top2">
				<li>야영장 위치</li>
				<li><%=camppart %> - <%=camproom %>동</li>
				<li>총 금액 : <%=money %></li>
			</ul>
			<ul class="p3Ico">
				<li><img src="./ico/report.svg"></li>
				<li>예약자 정보</li>
			</ul>
			<ul class="p3Info">
				<li>고객명</li><li><%=name %></li>
				<li>연락처</li><li><%=tel %></li>
				<li>인원수</li><li><%=person %> 명</li>
				<li>예약번호</li><li id="rcode"></li>
			</ul>
			<ul class="p3Ico">
				<li><img src="./ico/pay.svg"></li>
				<li>결제 수단</li>
			</ul>
			<ul class="p3Pay">
				<li onclick="selectPay(this,'무통장입금')">무통장 입금</li>
				<li onclick="selectPay(this,'신용카드')">신용카드</li>
				<li onclick="selectPay(this,'계좌이체')">계좌이체</li>
			</ul>
			<ul class="p3Bank">
				<li>신한은행 : 102-202306-0606 (국립공원공단)</li>
				<li><input type="text" name="rpayname" placeholder="입금자명을 입력하세요."></li>
			</ul>
			<ul class="p3Confirm">
				<li></li>
				<li></li>
			</ul>
			<div class="p3Btn">결제 선택</div>
			<ul class="p3Reserve">
				<li onclick="rPost()">예약완료</li>
				<li onclick="rCancel()">예약취소</li>
			</ul>
		</div>
	</form>
	</section>
	<footer>
		<%@include file="./footer.jsp" %>
	</footer>
</body>
<script src="./js/location.js?v=<%=today %>"></script>
<script src="./js/part3.js?v=<%=today %>"></script>
</html>