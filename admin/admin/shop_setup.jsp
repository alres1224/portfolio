<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
long time = System.currentTimeMillis();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>환경설정 페이지</title>
<link rel="stylesheet" type="text/css"
	href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css"
	href="./css/admin_header.css?v=<%=time%>">
<link rel="stylesheet" type="text/css"
	href="./css/admin_menu.css?v=<%=time%>">
<link rel="stylesheet" type="text/css"
	href="./css/shop_setup.css?v=<%=time%>">
<link rel="stylesheet" type="text/css"
	href="./css/admin_footer.css?v=<%=time%>">
</head>
<body>
	<header><%@ include file="./admin_header.jsp"%></header>
	<nav><%@ include file="./admin_menu.jsp"%></nav>
	<section>
		<form id="shop_setup">
			<input type="hidden" name="iimages" value=""> 
			<input type="hidden" name="iurls" value="">
			<input type="hidden" name="isort" value="">
			<div class="setupBase">
				<ul class="setupText">
					<li>■</li>
					<li>쇼핑몰 메인 배너 관리</li>
				</ul>
				<div class="setupMiddle">
					<span> 메인 배너 등록 </span>
					<ul id="main">
						<li><input type="text" id="mainImage0"> 배너1 <em>※ 배너 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text" id="mainUrl0"> 링크URL</li>
						<li><input type="text" id="mainImage1"> 배너2 <em>※ 배너 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text"id="mainUrl1"> 링크URL</li>
						<li><input type="text" id="mainImage2"> 배너3 <em>※ 배너 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text" id="mainUrl2"> 링크URL</li>
						<li><input type="text" id="mainImage3"> 배너4 <em>※ 배너 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text" id="mainUrl3"> 링크URL</li>
					</ul>
				</div>
				<div class="setupBtn" id="mbanner">배너 변경</div>

				<ul class="setupText">
					<li>■</li>
					<li>쇼핑몰 메인 팝업 관리</li>
				</ul>
				<div class="setupMiddle">
					<span> 메인 팝업 등록 </span>
					<ul id="popup">
						<li><input type="text" id="popupImage0"> 팝업 <em>※ 팝업 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text" id="popupUrl0"> 링크URL</li>
					</ul>
				</div>
				<div class="setupBtn" id="pop">팝업창 변경</div>

				<ul class="setupText">
					<li>■</li>
					<li>쇼핑몰 AD 배너 관리</li>
				</ul>
				<div class="setupMiddle">
					<span> AD 배너 등록 </span>
					<ul id="ad">
						<li><input type="text" id="adImage0"> AD 배너1 <em>※ 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text" id="adUrl0"> 링크URL</li>
						<li><input type="text" id="adImage1"> AD 배너2 <em>※ 이미지 URL을
								입력하세요.</em></li>
						<li><input type="text" id="adUrl1"> 링크URL</li>
					</ul>
				</div>
				<div class="setupBtn" id="adbanner">AD 배너 변경</div>
			</div>
		</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp"%></footer>
</body>
<script>
	const bannerArray = (${array});
	console.log(bannerArray);
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/shop_setup.js?v=<%=time%>"></script>
</html>