<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<meta charset="UTF-8">
<form id="login">
	<div class="loginBase">
		<ul class="loginBody loginUl">
			<li>로그인</li>
			<li>간편로그인은 회원가입 후 최초 1회 연동이 필요합니다.</li>
			<li><input type="text" placeholder="아이디 입력" name="mid"></li>
			<li><input type="password" placeholder="비밀번호 대,소문자 구분 9~15자로 입력" maxlength="15" name="mpass"></li>
			<li><div class="loginBtn wh" id="loginBtn">로그인</div></li>
		</ul>
		<ul class="loginUl loginFind">
			<li>휴면계정복구</li>
			<li>아이디 찾기</li>
			<li>비밀번호 찾기</li>
		</ul>
		<ul class="loginUl loginText">
			<li></li>
			<li>간편 로그인</li>
			<li></li>
		</ul>
		<div class="loginIcons">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="loginBtn loginJoinBtn" onclick="loca('./join.jsp')">회원가입</div>
	</div>
</form>