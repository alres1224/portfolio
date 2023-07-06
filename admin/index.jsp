 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
HttpSession ss = request.getSession();
String id = (String)ss.getAttribute("id");
String name = (String)ss.getAttribute("name");
%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="title" content="합리적인 쇼핑 베스트샵 [BEST SHOP]" />
<meta name="description" content="합리적인 쇼핑 베스트샵 [BEST SHOP]" />
<meta name="publisher" content="YongRim Kim" />
<meta name="robots" content="index,follow" />
<meta name="keyword" content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:card" content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:description" content="합리적인 쇼핑 베스트샵 [BEST SHOP]" />
<meta name="twitter:title" content="합리적인 쇼핑 베스트샵 [BEST SHOP]" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:site_name" content="합리적인 쇼핑 베스트샵 [BEST SHOP]" />
<meta property="og:type" content="website" />
<meta property="og:author" content="YongRim Kim" />
<meta property="og:url"
	content="http://casabarragan.cafe24.com/portfolio/" />
<meta property="og:img" content="./bs_logo.png" />
<meta property="og:ios:url"
	content="http://casabarragan.cafe24.com/portfolio/" />
<meta property="og:android:url"
	content="http://casabarragan.cafe24.com/portfolio/" />
<meta property="og:web:url"
	content="http://casabarragan.cafe24.com/portfolio/" />
<link rel="icon" href="./bs_logo.png" size="256x256" />
<link rel="icon" href="./bs_logo.png" size="128x128" />
<link rel="icon" href="./bs_logo.png" size="64x64" />
<link rel="icon" href="./bs_logo.png" size="32x32" />
<link rel="icon" href="./bs_logo.png" size="16x16" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="apple-touch-icon" href="./logo192.png" />
<link rel="manifest" href="./manifest.json" />
<link rel="stylesheet" href="./css/main.css?v=4">
<link rel="stylesheet" href="./css/engine.css">
<script>
	const id = "<%=id %>";
	const nm = "<%=name %>";
</script>
<script defer="defer" src="./static/js/main.c9bef168.js"></script>
<link rel="stylesheet" type="text/css" href="./static/css/main.e98cd041.css" >
<link rel="stylesheet" href="./css/header.css?v=1">
<title></title>
</head>
<body>
	<!-- 상단 -->
	<header>
		<%@include file="./header.jsp"%>
	</header>
	<!-- 메뉴 -->
	<nav class="navCss">
		<%@include file="./nav.jsp" %>
	</nav>
	
	<main>
      <!-- 배너 -->
      <section class="bannerCss  margin30">
        <%@include file="./banner.jsp" %>
      </section>
      <!-- 신규상품 -->
      <section class="newCss margin30">
        <%@include file="./new.jsp" %>
      </section>
      <!-- ad광고 1번 -->
      <section class="adCss margin30">
		<%@include file="./ad1.jsp" %>
      </section>
      <!-- MD's PICK -->
      <section class="mdCss margin30">
        <%@include file="./md.jsp" %>
      </section>
      <!-- 공지사항 및 최신 트렌드 -->
      <section class="parentCss margin30">
        <div class="divCss">
          <%@include file="./notice.jsp" %>
          <%@include file="./trend.jsp" %>
        </div>
      </section>
      <!-- ad 광고 2번-->
      <section class="adCss margin30">
        <%@include file="./ad2.jsp" %>
      </section>
    </main>

    <!-- 카피라이터, 약관 및 회사 소개 -->
    <footer class="footerCss">
      <%@include file="./footer.jsp" %>
    </footer>
</body>
<script src="./js/header.js"></script>
<script src="./js/title.js"></script>
</html>