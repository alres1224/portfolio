<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	long time = System.currentTimeMillis(); 
	String cid = request.getParameter("cid");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 수정</title>
<link rel="stylesheet" type="text/css" href="./css/default.css">
<link rel="stylesheet" type="text/css" href="./css/member_modify.css?v=<%=time%>">
</head>
<body>
	<form id="popup">
	<input type="hidden" name="cid" value="">
	<div class="modBase">
		<div class="modTop">[고객정보 수정]</div>
		<ul class="modMiddle">
			<li>아이디</li><li><label id="cid"></label></li>
			<li>고객명</li><li><label id="cname"></label></li>
			<li>레벨</li><li><input type="text" name="clvl" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')"></li>
			<li>포인트</li><li><input type="text" name="cpoint" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')"></li>
			<li>휴면상태</li><li><label><input type="radio" name="csleep" value="Y" checked>적용</label><label><input type="radio" name="csleep" value="N">미적용</label></li>
			<li>탈퇴일자</li><li><label id="coutdate"></label></li>
		</ul>
		<ul class="modBottom">
			<li onclick="doConfig()">정보수정</li>
			<li onclick="window.close()">창닫기</li>
		</ul>
	</div>
	</form>
</body>
<script>
	const id = "<%=cid %>";
	const array = ${array};
</script>
<script src="./js/post.js"></script>
<script src="./js/member_modify.js?v=<%=time%>"></script>
</html>