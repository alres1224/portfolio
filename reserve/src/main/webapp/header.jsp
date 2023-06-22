<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
HttpSession ss = request.getSession();
String mname = (String)ss.getAttribute("mname");
String mid = (String)ss.getAttribute("mid");
%>
<!DOCTYPE html>
<meta charset="UTF-8">
<div class="headerBase">
	<span class="headerLogo" onclick="loca('./part1.jsp')"></span>
	<ul class="headerMenu flexWrap">
		<li>이용안내</li>
		<li onclick="loca('./part1.jsp')">예약하기</li>
		<li onclick="loca('./part4.jsp')">예약확인</li>
		<li onclick="alert('서비스 준비중입니다.')">마이페이지</li>
		<li onclick="alert('서비스 준비중입니다.')">그린포인트</li>
	</ul>
	<ul class="headerInfo flexWrap">
		<li class="login flexWrap"><img src="./ico/personw.svg"><div onclick="loca('./index.jsp')">로그인</div></li>
		<li class="login flexWrap"><img src="./ico/groupw.svg"><div onclick="loca('./join.jsp')">회원가입</div></li>
		<li class="logout flexWrap"><img src="./ico/personw.svg"> <%=mname %> 님 환영합니다.<div onclick="loca('./logout.do')">로그아웃</div></li>
	</ul>
</div>
<script>
	const hlogin = document.querySelectorAll(".login");
	const mid = "<%=mid%>";
	const mname = "<%=mname%>";
	if(mname != "null"){
		hlogin[0].style.display = "none";
		hlogin[1].style.display = "none";
		document.querySelector(".logout").style.display = "flex";
	}else{
		hlogin[0].style.display = "flex";
		hlogin[1].style.display = "flex";
		document.querySelector(".logout").style.display = "none";
	}
</script>