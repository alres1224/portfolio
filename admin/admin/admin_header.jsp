<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	HttpSession ss = request.getSession();
	String name = (String)ss.getAttribute("username");
%>
<script>
	if("<%=name %>" === "null"){
		alert('만료된 세션입니다.');
		location.href='./index.jsp';
	}
</script>
<meta charset="UTF-8">
<form id="header">
<div class="base">
	<div class="logo" id="logo">
		<span></span>
		ADMINISTRATOR
	</div>
	<ul>
		<li><%=name %> 관리자</li>
		<li onclick="doPost('header','admin_modify.do')">[개인정보 수정]</li>
		<li onclick="doPost('header','admin_logout.do')">[로그아웃]</li>
	</ul>
</div>
</form>