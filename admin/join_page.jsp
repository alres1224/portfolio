<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<form id="join_page">
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
			<ul class="joinInfoTop wrap">
				<li><h3>기본정보</h3></li>
				<li>※ 모든 정보는 필수항목이므로 반드시 입력하셔야 합니다.</li>
			</ul>
			<ul class="joinInfoBody wrap">
				<li>아이디</li>
				<li><input type="text" name="cid"></li>
				<li>비밀번호</li>
				<li><input type="password" name="cpass"></li>
				<li>비밀번호 확인</li>
				<li><input type="password" name="cpassok"></li>
				<li>이름</li>
				<li><input type="text" name="cname"></li>
				<li>이메일</li>
				<li>
					<ul class="wrap">
						<li><input type="text" name="cemail"></li>
						<li><select id="emailAddr">
								<option value="">직접 입력</option>
						</select></li>
						<li><label><input type="checkbox" name="cemailok" value="Y" onclick="unchecked(this.name)">정보/이벤트
								메일 수신에 동의합니다.</label><input type="checkbox" name="cemailok" value="N"
							checked style="display: none"></li>
					</ul>
				</li>
				<li>휴대폰번호</li>
				<li>
					<ul>
						<li><input type="text" name="cmobile"
							onkeyup="this.value = this.value.replace(/[^0-9]/g,'')"
							placeholder="- 없이 입력하세요" maxlength="11"></li>
						<li><label><input type="checkbox" name="csmsok"
								value="Y" onclick="unchecked(this.name)">정보/이벤트 SMS 수신에 동의합니다.</label><input type="checkbox"
							name="csmsok" value="N" checked style="display: none"></li>
					</ul>
				</li>
				<li>전화번호</li>
				<li><input type="text" name="ctel"
					onkeyup="this.value = this.value.replace(/[^0-9]/g,'')"
					placeholder="- 없이 입력하세요" maxlength="11"></li>
				<li>주소</li>
				<li>
					<ul>
						<li><input type="text" readonly placeholder="우편번호"
							id="member_post" name="addr1">
							<button type="button" onclick="findAddr()">우편번호검색</button></li>
						<li><input type="text" readonly placeholder="기본 주소"
							id="member_addr" name="addr2"></li>
						<li><input type="text" placeholder="상세 주소 입력"
						name="addr3"></li>
					</ul> <input type="hidden" name="caddr">
				</li>
			</ul>
			<ul class="joinBtns wrap">
				<li id="joinCancel">취소</li>
				<li id="joinOk">회원가입</li>
			</ul>
		</div>
	</div>
</form>