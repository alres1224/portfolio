<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<meta charset="UTF-8">
<form id="join">
<div class="joinBase">
	<ul class="joinTop">
		<li>회원가입</li>
		<li>이용약관에 동의 및 가입정보를 입력해주시기 바랍니다.</li>
		<li class="join45">약관동의<em>이용약관·개인정보취급방침에 대한 안내를 읽고 동의해주세요.</em></li>
		<li class="join45">이용약관</li>
		<li><span id="info1"></span></li>
		<li><label><input type="checkbox" name="terms" value="Y"> 동의함</label></li>
		<li class="join45">개인정보 수집 및 이용동의</li>
		<li><span id="info2"></span></li>
		<li><label><input type="checkbox" name="terms" value="Y"> 동의함</label></li>
	</ul>
	<div>개인정보입력</div>
	<ul class="joinBtm">
		<li>아이디</li>
		<li><input type="text" maxlength="50" name="mid"><div id="idOk">중복체크</div></li>
		<li>패스워드</li>
		<li><input type="password" maxlength="15" name="mpass"><em>비밀번호 대,소문자 구분. 9~15자로 입력</em></li>
		<li>패스워드 확인</li>
		<li><input type="password" maxlength="15" name="mpass2"><em>동일한 패스워드를 입력</em></li>
		<li>고객명</li>
		<li><input type="text" maxlength="50" name="mname"><em>고객명 입력</em></li>
		<li>연락처</li>
		<li><input type="text" maxlength="11" name="mtel" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"><em>"-" 미입력 숫자만 입력</em></li>
		<li>이메일</li>
		<li><input type="text" name="memail"><em>수신 받을 이메일 입력</em></li>
		<li>SMS 수신여부</li>
		<li><label><input type="checkbox" name="msms" value="Y">수신동의</label><input type="checkbox" name="msms" value="N" style="display:none;" checked></li>
		<li>광고/이벤트 수신여부</li>
		<li><label><input type="checkbox" name="mad" value="Y">수신동의</label><input type="checkbox" name="mad" value="N" style="display:none;" checked></li>
	</ul>
	<div class="joinOk">회원가입완료</div>
</div>
</form>