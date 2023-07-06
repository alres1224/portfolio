<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

	<div class="container">
		<div class="contents">
			<span> HOME ▶ 로그인 </span>
			<div class="sub_cotents">
				<span>로그인</span>
				<div class="member_info">
					<h3>회원 로그인</h3>
					<form id="login" onsubmit="doSubmit(event)" method="post">
					<ul>
						<li>
							<div class="member_login_box">
								<span> <input type="text" class="login_input"
									name="cid" placeholder="아이디를 입력하세요">
								</span> <span> <input type="password" class="login_input"
									name="cpass" placeholder="패스워드를 입력하세요">
								</span>
								<button type="submit" class="login_btn" name="member" title="회원 로그인">로그인</button>
							</div>
						</li>
						<li><label class="id_save"><input type="checkbox" name="saveId">
								아이디 저장</label></li>
					</ul>
					</form>
					<h3 class="none"></h3>
					<ol class="btn_login_box">
						<li><input type="button" value="회원가입" class="btn_box1"
							title="회원가입" id="register"></li>
						<li><input type="button" value="아이디 찾기"
							class="btn_box1 reserve1" title="아이디 찾기" onclick="alert('서비스 준비중입니다.')"></li>
						<li><input type="button" value="비밀번호 찾기"
							class="btn_box1 reserve1" title="비밀번호 찾기" onclick="alert('서비스 준비중입니다.')"></li>
					</ol>
					<h3>비회원 로그인</h3>
					<form id="search" onsubmit="doSubmit(event)" method="post">
					<ul>
						<li>
							<div class="member_login_box">
								<span> <input type="text" class="login_input"
									name="oname" placeholder="주문자명">
								</span> <span> <input type="text" class="login_input"
									name="ocode" placeholder="주문번호" onkeyup="this.value = this.value.replace(/[^0-9]/g,'')">
								</span>
								<button type="submit" class="login_btn reserve1" name="notMember" title="비회원 주문 조회">확인</button>
							</div>
						</li>
						<li style="font-size: 12px; height: 40px; line-height: 40px;">
							※ 주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</li>
					</ul>
					</form>
				</div>
			</div>
		</div>
	</div>
