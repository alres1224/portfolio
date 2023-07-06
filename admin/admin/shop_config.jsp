<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta charset="UTF-8">
<form id="config">
	<div class="configBase">
		<div class="adminText"><a>■</a>홈페이지 가입 환경 설정</div>
		<ul class="regSet">
			<li>홈페이지 제목</li>
			<li><input type="text" name="rpagename"></li>
			<li>관리자 메일 주소</li>
			<li><input type="text" name="remail"></li>
			<li>포인트 사용 유/무</li>
			<li><label><input type="radio" name="rpointuse" value="Y">포인트 사용</label><label><input type="radio" name="rpointuse" value="N" checked="checked">포인트 미사용</label></li>
			<li>회원가입 시 적립금</li>
			<li><input type="text" name="rpoint" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');">점</li>
			<li>회원가입 시 권한 레벨</li>
			<li><input type="text" name="rlvl" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');">레벨</li>
		</ul>
		
		<div class="adminText"><a>■</a>홈페이지 기본 환경 설정 </div>
		<ul class="basicSet">
			<li>회사명</li>
			<li><input type="text" name="bcorpname"></li>
			<li>사업자등록번호</li>
			<li><input type="text" name="bcorpnum" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');"></li>
			<li>대표자명</li>
			<li><input type="text" name="bchairname"></li>
			<li>대표전화번호</li>
			<li><input type="text" name="bchairtel" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');" maxlength="11"></li>
			<li>통신판매업 신고번호</li>
			<li><input type="text" name="btelbiznum"></li>
			<li>부가통신 사업자번호</li>
			<li><input type="text" name="baddbiznum"></li>
			<li>사업장 우편번호</li>
			<li><input type="text" name="bpostnum" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');" maxlength="5"></li>
			<li>사업장 주소</li>
			<li><input type="text" name="baddr"></li>
			<li>정보관리책임자명</li>
			<li><input type="text" name="bmgrname"></li>
			<li>정보관리책임자 E-mail</li>
			<li><input type="text" name="bmgremail"></li>
		</ul>
		
		<div class="adminText"><a>■</a>결제 기본 환경 설정</div>
		<ul class="paySet">
			<li>무통장 은행</li>
			<li><input type="text" name="pbankname"></li>
			<li>은행 계좌번호</li>
			<li><input type="text" name="pbanknum" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');"></li>
			<li>신용카드 결제 사용</li>
			<li><label><input type="radio" name="pcredituse" value="Y">사용</label><label><input type="radio" name="pcredituse" value="N" checked="checked">미사용</label>※해당 PG사가 있을 경우 사용으로 변경합니다.</li>
			<li>휴대폰 결제 사용</li>
			<li><label><input type="radio" name="pmobileuse" value="Y">사용</label><label><input type="radio" name="pmobileuse" value="N" checked="checked">미사용</label>※주문 시 휴대폰 결제 가능 여부를 설정합니다.</li>
			<li>도서상품권 결제 사용</li>
			<li><label><input type="radio" name="pgiftuse" value="Y">사용</label><label><input type="radio" name="pgiftuse" value="N" checked="checked">미사용</label>※도서상품권 결제만 적용 되며, 그 외의 상품권은 불가능합니다.</li>
			<li>결제 최소 포인트</li>
			<li><input type="text" name="pminpoint" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');"></li>
			<li>결제 최대 포인트</li>
			<li><input type="text" name="pmaxpoint" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');"></li>
			<li>현금 영수증 발급 사용</li>
			<li><label><input type="radio" name="pcashcheck" value="Y">사용</label><label><input type="radio" name="pcashcheck" value="N" checked="checked">미사용</label>※현금영수증 관련 사항은 PG사에 가입 된 경우에만 사용할 수 있습니다.</li>
			<li>배송업체명</li>
			<li><input type="text" name="pdelname"></li>
			<li>배송비 가격</li>
			<li><input type="text" name="pdelprice" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');"></li>
			<li>희망 배송일</li>
			<li><label><input type="radio" name="pdeldate" value="Y">사용</label><label><input type="radio" name="pdeldate" value="N" checked="checked">미사용</label>※희망배송일 사용 시 사용자가 배송일을 직접 선택할 수 있습니다.</li>
		</ul>
		<div class="configBtns">
			<span id="setOk">설정 저장</span>
			<span id="setNo">저장 취소</span>
		</div>
	</div>
</form>