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
<link rel="stylesheet" type="text/css" href="./css/notice_write.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
<script src="../ckeditor/ckeditor.js"></script>
</head>
<body>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<section>
		<form id="notice_modify" enctype="multipart/form-data">
			<input type="hidden" name="nidx" value="${array[0]}">
			<div class="writeBase">
			<ul class="writeTop wrap">
				<li>■</li><li>공지사항 등록 페이지</li>
			</ul>
			<ul class="writeMiddle wrap">
				<li>공지사항 여부</li>
				<li><label><input type="checkbox" name="ntop" value="Y" id="nck">공지출력</label> ※ 공지 출력을 체크할 시 해당 글은 최상단에 노출됩니다.<input type="checkbox" name="ntop" value="N" style="display:none" checked="checked" id="nck2"></li>
				<li>공지사항 제목</li>
				<li><input type="text" name="nsubject" maxlength="150" value="${array[2] }"> ※ 최대 150자까지 입력 가능</li>
				<li>글쓴이</li>
				<li><input type="text" name="nwriter" value="${array[3] }"> ※ 관리자 이름이 노출됩니다.</li>
				<li>첨부파일</li>
				<li><input type="file" name="file"> ※ 첨부파일 최대 용량은 2MB입니다.</li>
				<li>공지내용</li>
				<li><textarea id="ckeditor" name="ntext"></textarea></li>
			</ul>
			<ul class="writerBottom wrap">
				<li onclick="doPost('notice_write','./notice_list.do')">공지목록</li>
				<li onclick="doMod()">공지수정</li>
			</ul>
		</div>
		</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script>
	CKEDITOR.replace( 'ckeditor',
			{
				width: '700px',
				height: '400px'
	});
	CKEDITOR.instances['ckeditor'].config.resize_enabled = false;
	const text = '${array[4]}';
	CKEDITOR.instances['ckeditor'].setData(text);
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/notice_modify.js?v=<%=time%>"></script>
</html>