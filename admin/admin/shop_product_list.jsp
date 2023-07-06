<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long time = System.currentTimeMillis(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 관리 페이지</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/shop_product_list.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
</head>
<body>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<section>
		<form id="shop_product_list" onsubmit="return false;">
			<div class="pListBase">
				<ul class="pListTop wrap">
					<li>■</li><li>상품 관리 페이지</li>
				</ul>
				<ul class="pListSearch wrap gulim">
					<li>
						<select id="select" onchange="selectName(this.value)">
							<option value="pname">상품명</option>
							<option value="pcode">상품코드</option>
						</select>
					</li>
					<li>
						<input type="text" id="searchName" name="pname">
					</li>
					<li onclick="doSearch()">검색</li>
				</ul>
				<ul class="pList wrap gulim">
					<li><input type="checkbox" id="ckAll"></li>
					<li>상품코드</li>
					<li>이미지</li>
					<li>상품명</li>
					<li>대 카테고리</li>
					<li>판매가격</li>
					<li>할인가격</li>
					<li>할인율</li>
					<li>재고현황</li>
					<li>판매 유/무</li>
					<li>관리</li>
				</ul>
				<div id="printList"></div>
				<label class="pListVoid">등록된 상품이 없습니다.</label>
				<ul id="pListPage" class="wrap gulim">
				</ul>
				<ul class="pListBtns wrap">
					<li onclick="doDelete()">선택삭제</li>
					<li onclick="doPost('shop_product_list','./shop_product_write.do')">상품등록</li>
				</ul>
			</div>
		</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script>
	const pageEA = ${pageEA};
	const noList = document.querySelector(".pListVoid");
	if(${data.size()} === 0){
		noList.style.display = "block"
	}else{
		noList.style.display = "none"
	}
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/shop_product_list.js?v=<%=time%>"></script>
<script>
	doPrint(${data});
</script>
</html>