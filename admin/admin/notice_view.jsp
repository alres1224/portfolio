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
<link rel="stylesheet" type="text/css" href="./css/notice_view.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
<script src="../ckeditor/ckeditor.js"></script>
</head>
<body>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<section>
		<form id="notice_view">
			<input type="hidden" name="nidx" value="${array[5]}">
			<div class="viewBase">
				<ul class="viewTop wrap">
					<li>■</li>
					<li>공지사항 VIEW 페이지</li>
				</ul>
				<ul class="viewMiddle wrap">
					<li>공지일자</li><li>${array[0]}</li>
					<li>공지사항 제목</li><li>${array[1]}</li>
					<li>글쓴이</li><li>${array[2]}</li>
					<li>첨부파일</li><li>${array[3]}</li>
					<li>공지내용</li><li><textarea id="ckeditor"></textarea></li>
				</ul>
				<ul class="viewBottom wrap">
					<li onclick="doPost('notice_view','./notice_list.do')">공지목록</li>
					<li onclick="doPost('notice_view','./notice_modify.do')">공지수정</li>
					<li id="delete">공지삭제</li>
				</ul>
			</div>
		</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script>
	const array = ${array};
	console.log(${array});
	if(${array}.length === 0){
		alert("오류가 발생했습니다.");
		history.go(-1);
	}
</script>
<script>
	CKEDITOR.replace( 'ckeditor',
			{
				width: '700px',
				height: '390px',
				readOnly: true
	});
	CKEDITOR.instances['ckeditor'].config.resize_enabled = false;
	const text = '${array[4]}';
	CKEDITOR.instances['ckeditor'].setData(text);
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/notice_view.js?v=<%=time%>"></script>
</html>