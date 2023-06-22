<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	long today = System.currentTimeMillis();
	String campname = request.getParameter("ccampname");
	String camppart = request.getParameter("ccamppart");
	String indate = request.getParameter("rindate");
	String outdate = request.getParameter("routdate");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/index.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/header.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/part2.css?v=<%=today%>">
<link rel="stylesheet" type="text/css" href="./css/footer.css?v=<%=today%>">
<title>야영장 예약하기</title>
</head>
<body>
	<header>
		<%@include file="./header.jsp" %>
	</header>
	<section>
		<form id="p2">
			<input type="hidden" name="ccampname" value="<%=campname %>">
			<input type="hidden" name="ccamppart" value="<%=camppart %>">
			<input type="hidden" name="ccampcode" value="">
			<input type="hidden" name="cindate" value="<%=indate %>">
			<input type="hidden" name="coutdate" value="<%=outdate %>">
			<input type="hidden" name="rmoney" value="">
			<div class="p2Base">
				<label class="p2Text">야영장 예약하기</label>
				<span id="p2photo"></span>
				<div>
					<ul class="p2Top">
						<li><img src="./ico/camping.svg"> <%=campname %> <%=camppart %> 야영장</li>
						<li><%=indate %> ~ <%=outdate %></li>
					</ul>
					<ul class="p2Middle">
						<li><label><input type="radio" name="ccamproom" value="가" onclick="code('가')"><%=camppart %> - 가동</label></li>
						<li><label><input type="radio" name="ccamproom" value="나" onclick="code('나')"><%=camppart %> - 나동</label></li>
						<li><label><input type="radio" name="ccamproom" value="다" onclick="code('다')"><%=camppart %> - 다동</label></li>
						<li><label><input type="radio" name="ccamproom" value="라" onclick="code('라')"><%=camppart %> - 라동</label></li>
						<li>총 금액 : <div id="totalPrice"></div></li>
					</ul>
					<ul class="p2Top">
						<li><img src="./ico/report.svg"> 예약자 정보</li>
					</ul>
					<ul class="p2Bottom">
						<li>고객명</li>
						<li><input type="text" name="rname" readonly></li>
						<li>연락처</li>
						<li>
							<input type="text" name="rtel" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" maxlength="11">
							<em>연락 받을 수 있는 연락처 기입</em>
						</li>
						<li>인원수</li>
						<li>
							<select name="rperson">
								<option value="0">인원 선택</option>
							</select>
							<em>방문 인원 선택 야영 기준 최대 인원수 범위</em>
						</li>
					</ul>
					<div class="p2Btn">예약 확인</div>
				</div>
			</div>
		</form>
	</section>
	<footer>
		<%@include file="./footer.jsp" %>
	</footer>
</body>
<script src="./js/location.js?v=<%=today %>"></script>
<script src="./js/part2.js?v=<%=today %>"></script>
<script>
	check(JSON.parse('${array}'));
</script>
</html>