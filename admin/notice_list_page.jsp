<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<form id="notice_list">
	<input type="hidden" name="nidx" value="">
	<div class="noticeListBase">
		<ul class="noticeListTop">
			<li>HOME</li>
			<li>></li>
			<li>NOTICE</li>
		</ul>
		<div class="noticeListText">NOTICE</div>
		<ul class="noticeListUl noticeListHead">
			<li>NO</li>
			<li>제목</li>
			<li>글쓴이</li>
			<li>조회수</li>
			<li>작성일</li>
		</ul>
		<div id="noticeContainer">
		</div>
		<ul class="noticeListPage">
		</ul>
		<ul class="noticeListSearch">
			<li><input type="text" name="nsubject" placeholder="검색할 제목을 입력하세요."></li>
			<li id="noticeListSearch">검색</li>
		</ul>
	</div>
</form>