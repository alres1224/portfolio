<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="joinBase">
	<ul class="joinPath wrap">
		<li>HOME</li>
		<li>회원가입</li>
		<li>약관동의</li>
	</ul>
	<div class="joinName wrap">
		<span>회원가입</span>
		<ul class="wrap">
			<li><b>01</b> 약관동의</li>
			<li><img src="./ico/step.png"></li>
			<li><b>02</b> 정보입력</li>
			<li><img src="./ico/step.png"></li>
			<li><b>03</b> 가입완료</li>
		</ul>
	</div>
	<div class="joinContainer">
		<h3>약관동의</h3>
		<ul class="joinCkAll wrap">
			<li><input type="checkbox" id="ckAll"></li>
			<li><label for="ckAll">베스트샵의 모든 약관을 확인하고 전체 동의합니다.</label></li>
			<li>(전체 동의는 선택 항목도 포함됩니다.)</li>
		</ul>
		<ul class="joinCk wrap">
			<li><input type="checkbox" id="ck1"></li>
			<li><label for="ck1">(필수)</label></li>
			<li><label for="ck1">이용약관</label></li>
			<li onclick="ajax(termAll,'./agreement/agree1.txt')">전체보기 ></li>
		</ul>
		<div class="termsBox" id="terms1"></div>
		<ul class="joinCk wrap">
			<li><input type="checkbox" id="ck2"></li>
			<li><label for="ck2">(필수)</label></li>
			<li><label for="ck2">이용약관</label></li>
			<li onclick="ajax(termAll,'./agreement/agree2.txt')">전체보기 ></li>
		</ul>
		<div class="termsBox" id="terms2"></div>
		<div class="nextBtn">다음 단계</div>
	</div>
</div>