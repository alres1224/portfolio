<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta charset="UTF-8">
<form id="aMenu">
	<ul class="menu">
		<li onclick="doPost('aMenu','./shop_form.do')">쇼핑몰 기본설정</li>
		<li onclick="doPost('aMenu','./member_list.do')">회원관리</li>
		<li onclick="doPost('aMenu','./notice_list.do')">공지사항</li>
		<li onclick="doPost('aMenu','./shop_setup.do')">쇼핑몰 관리</li>
		<li onclick="doPost('aMenu','./shop_product_list.do')">상품 리스트</li>
		<li>주문내역</li>
		<li>매출내역</li>
	</ul>
</form>