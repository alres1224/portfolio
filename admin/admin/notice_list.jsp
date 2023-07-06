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
		<form id="notice_list">
			<input type="hidden" name="nidx" value="">
			<div class="noticeBase">
				<ul class="noticeTop wrap">
					<li>■</li><li>공지사항 관리페이지</li>
				</ul>
				<ul class="noticeMiddle noticeIndex wrap">
					<li><input type="checkbox" id="selectAll"></li>
					<li>NO</li>
					<li>제목</li>
					<li>글쓴이</li>
					<li>날짜</li>
					<li>조회</li>
				</ul>
				<div id="listSpot"></div>
				<ul class="noNotice">
					<li>등록된 공지 내용이 없습니다.</li>
				</ul>
				<ul class="noticeBtn wrap">
					<li onclick="isChecked()">공지삭제</li>
					<li onclick="doPost('notice_list','./notice_write.do')">공지등록</li>
				</ul>
				<div class="noticeArrows wrap">
					<ul class="arrow wrap">
						<li>《 </li>
						<li onclick="pageDec()">〈 </li>
					</ul>
					<ul class="arrow wrap"id="noticeNumbers">
					</ul>
					<ul class="arrow wrap right">
						<li onclick="pageInc()">〉</li>
						<li>》</li>
					</ul>
				</div>
			</div>
		</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script>
	const pageEA = ${page};
	if(pageEA > 0){
		document.querySelector(".noNotice").style.display = "none";
	}else{
		document.querySelector(".noNotice").style.display = "block";
	}
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/notice_list.js?v=<%=time%>"></script>
<script>
	doPrint(${array});
</script>
</html>