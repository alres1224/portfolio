<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="noticeViewBase">
	<ul class="noticeViewTop">
		<li>■</li>
		<li>공지사항</li>
	</ul>
	<ul class="noticeViewMain">
		<li>제목</li><li>${array[1]}</li>
		<li>글쓴이</li><li>${array[2]}</li>
		<li>작성일</li><li>${array[3]}</li>
		<li>조회수</li><li>${array[5]}</li>
		<li>내용</li><li id="viewTextBox"></li>
	</ul>
	<div class="noticeViewBtn">목록으로 돌아가기</div>
</div>
<script>
	const viewText = "${array[4]}";
	document.querySelector("#viewTextBox").innerText = viewText.replaceAll('<br />','');
</script>