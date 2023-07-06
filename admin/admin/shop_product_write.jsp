<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% long time = System.currentTimeMillis(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 등록 페이지</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/shop_product_write.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css?v=<%=time%>">
<script src="../ckeditor/ckeditor.js?v=1"></script>
</head>
<body>
	<header><%@ include file="./admin_header.jsp" %></header>
	<nav><%@ include file="./admin_menu.jsp" %></nav>
	<section>
		<form id="shop_product" enctype="multipart/form-data">
			<div class="productBase">
				<ul class="productTop wrap"><li>■</li><li>상품 등록 페이지</li></ul>
				<ul class="productMiddle wrap">
					<li>대메뉴 카테고리</li>
					<li>
						<select name="pbmenu">
							<option value="">카테고리 선택</option>
						</select>
					</li>
					<li>소메뉴 카테고리</li>
					<li>
						<select name="psmenu">
							<option value="">카테고리 선택</option>
						</select>
					</li>
					<li>상품코드</li>
					<li>
						<input type="text" name="pcode" maxlength="6" readonly="readonly">
						<div onclick="ajax()">중복확인</div>
						※ 상품코드는 절대 중복되지 않도록 해주세요.
					</li>
					<li>상품명</li>
					<li>
						<input type="text" name="pname" maxlength="100">
						※ 상품명은 최대 100자까지만 적용할 수 있습니다.
					</li>
					<li>상품 부가설명</li>
					<li>
						<input type="text" name="ptext1" maxlength="200">
						※ 상품 부가설명은 최대 200자까지만 적용할 수 있습니다.
					</li>
					<li>판매가격</li>
					<li>
						<input type="text" name="pprice" id="price" maxlength="7" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')">
						※ , 없이 숫자만 입력해주세요. 최대 7자리.
					</li>
					<li>할인율</li>
					<li>
						<input type="text" name="pdiscount"  id="discount" maxlength="3" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')">
						 % ※ 숫자만 입력해주세요.
					</li>
					<li>할인가격</li>
					<li>
						<input type="text" name="pdisprice" maxlength="7" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')" readonly="readonly">
					</li>
					<li>상품재고</li>
					<li>
						<input type="text" name="pea" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')">
						 EA ※ 숫자만 입력해주세요. 재고가 0일 경우 sold out이됩니다.
					</li>
					<li>판매여부</li>
					<li>
						<label><input type="radio" name="psale" value="Y" checked="checked">판매시작</label><label><input type="radio" name="psale" value="N">판매종료</label>
					</li>
					<li>조기품절</li>
					<li>
						<label><input type="radio" name="psoldout" value="Y">사용</label><label><input type="radio" name="psoldout" value="N" checked="checked">미사용</label>
					</li>
					<li>상품 대표이미지</li>
					<li>
						<span><input type="file" name="image1" accept=".jpg, .jpeg, .png, .webp">※ 상품 대표 이미지이며, 이미지 용량은 2MB까지입니다.</span>
						<span><input type="file" name="image2" accept=".jpg, .jpeg, .png, .webp">※ 추가 이미지이며, 이미지 용량은 2MB까지입니다.</span>
						<span><input type="file" name="image3" accept=".jpg, .jpeg, .png, .webp">※ 추가 이미지이며, 이미지 용량은 2MB까지입니다.</span>
					</li>
					<li>상품 상세설명</li>
					<li>
						<textarea id="text" name="ptext2"></textarea>
					</li>
				</ul>
				<ul class="productBottom wrap">
					<li id="list">상품 리스트</li>
					<li id="update">상품 등록</li>
				</ul>
			</div>
	</form>
	</section>
	<footer><%@ include file="./admin_footer.jsp" %></footer>
</body>
<script>
	CKEDITOR.replace( 'text',
		{
			width: '830px',
			height: '260px',
			filebrowserUploadUrl : "./imageupload.do"
		});
	CKEDITOR.instances['text'].config.resize_enabled = false;
</script>
<script src="./js/post.js?v=<%=time%>"></script>
<script src="./js/admin_header.js?v=<%=time%>"></script>
<script src="./js/shop_product_write.js?v=<%=time%>"></script>
</html>