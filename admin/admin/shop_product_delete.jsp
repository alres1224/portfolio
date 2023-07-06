<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 관리 페이지</title>
</head>
<body>
	<form id="shop_product_delete"></form>
</body>
<script src="./js/post.js"></script>
<script>
	alert("${msg}");
	doPost('shop_product_delete','./shop_product_list.do');
</script>
</html>