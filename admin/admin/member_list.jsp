<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long time = System.currentTimeMillis(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>환경설정 페이지</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/member_list.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
</head>
<body>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<section>
	<form id="list" onsubmit="return false">
		<input type="hidden" name="delId" value="">
		<div class="memberBase">
			<ul class="memberTop flex"><li>■</li><li>회원관리</li></ul>
			<ul class="memberSearch flex gulim">
				<li>
					<select class="gulim" onchange="changeName(this.value)" id="column">
						<option value="cid">아이디</option>
						<option value="cname">고객명</option>
						<option value="cmobile">휴대폰</option>
					</select>
				</li>
				<li><input type="text" name="cid" id="msearch"></li>
				<li id="searchBtn">검색</li>
			</ul>
			
			<ul class="memberIndex flex">
				<li><input type="checkbox" onclick="checkAll(this.checked)" id="checkall"></li>
				<li>아이디</li>
				<li>고객명</li>
				<li>휴대폰</li>
				<li>전화번호</li>
				<li>레벨</li>
				<li>포인트</li>
				<li>최종접속</li>
				<li>가입일</li>
				<li>메일수신</li>
				<li>SMS수신</li>
				<li>관리</li>
			</ul>
			<div class="noMember gulim">등록된 회원이 없습니다</div>
			<div id="print"></div>
			<ul class="memberNo gulim flex">
			</ul>
			<div class="memberDel" id="deleteBtn">선택삭제</div>
		</div>
	</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script> 
	const totalNum = ${result};
	const pageSize = ${pageSize};
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/member_list.js?v=<%=time%>"></script>
</html>