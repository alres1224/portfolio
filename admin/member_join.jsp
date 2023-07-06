<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	long time = System.currentTimeMillis();
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
    <meta property="og:url" content="http://casabarragan.cafe24.com/portfolio/" />
    <meta property="og:img" content="./bs_logo.png" />
    <meta property="og:ios:url" content="http://casabarragan.cafe24.com/portfolio/" />
    <meta property="og:android:url" content="http://casabarragan.cafe24.com/portfolio/" />
    <meta property="og:web:url" content="http://casabarragan.cafe24.com/portfolio/" />
    <link rel="icon" href="./bs_logo.png" size="256x256" />
    <link rel="icon" href="./bs_logo.png" size="128x128" />
    <link rel="icon" href="./bs_logo.png" size="64x64" />
    <link rel="icon" href="./bs_logo.png" size="32x32" />
    <link rel="icon" href="./bs_logo.png" size="16x16" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="apple-touch-icon" href="./logo192.png" />
    <link rel="manifest" href="./manifest.json" />
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/engine.css">
    <title></title>
    <script defer="defer" src="./static/js/main.2b9673c7.js"></script>
    <link href="./static/css/main.73a79b08.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./css/member_join.css?v=<%=time %>">
</head>
<body>
	<div class="termAll">
		<div>
			<label id="termAll"></label>
			<button type="button" onclick="closeTerms()">창닫기</button>
		</div>
	</div>
    <header class="headerCss">
        <div id="header" class="headerCss"></div>
    </header>
    <nav class="navCss">
        <div id="nav" class="navCss"></div>
    </nav>
    <main>
    	<%@include file="./member_join_page.jsp" %>
    </main>
    <footer class="footerCss">
        <div id="footer" class="footerCss"></div>
    </footer>
</body>
<script src="./js/member_join.js?v=<%=time %>"></script>
<script src="./js/header.js"></script>
<script src="./js/title.js"></script>
</html>