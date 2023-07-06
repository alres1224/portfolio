"use strict"

function ifNull(sub1,sub2){
	if(sub1.value===""){
		alert(sub2+"을(를) 입력해주세요.");
		sub1.focus();
		return true;
	}else{
		return false;
	}
}

// 이메일 확인용 정규식
function email(sub){
	const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z가-힣]([-_.]?[0-9a-zA-Z가-힣])*.[a-zA-Z]{2,3}$/i;
	if(pattern.test(sub.value)){
		return false;
	}else{
		alert("올바른 이메일을 입력해주세요");
		sub.value = "";
		sub.focus();
		return true;
	}
}

// 설정 저장 버튼 클릭 시 함수
const setOk = document.querySelector("#setOk");
setOk.addEventListener("click",()=>{
	
	if(ifNull(config.rpagename,"홈페이지 제목")){return;}
	else if(ifNull(config.remail,"관리자 메일 주소")){return;}
	else if(ifNull(config.rpoint,"회원가입 시 적립금")){return;}
	else if(ifNull(config.rlvl,"회원가입 시 권한레벨")){return;}
	else if(ifNull(config.bcorpname,"회사명")){return;}
	else if(ifNull(config.bcorpnum,"사업자등록번호")){return;}
	else if(ifNull(config.bchairname,"대표자명")){return;}
	else if(ifNull(config.bchairtel,"대표전화번호")){return;}
	else if(ifNull(config.bpostnum,"사업장 우편번호")){return;}
	else if(ifNull(config.baddr,"사업장 주소")){return;}
	else if(ifNull(config.bmgrname,"정보관리책임자명")){return;}
	else if(ifNull(config.bmgremail,"정보관리책임자 이메일")){return;}
	else if(ifNull(config.pbankname,"무통장 은행명")){return;}
	else if(ifNull(config.pbanknum,"은행 계좌번호")){return;}
	else if(ifNull(config.pminpoint,"결제 최소 포인트")){return;}
	else if(ifNull(config.pmaxpoint,"결제 최대 포인트")){return;}
	else if(ifNull(config.pdelname,"배송 업체명")){return;}
	else if(ifNull(config.pdelprice,"배송비")){return;}
	else{
		if(email(config.remail)){return;}
		else if(email(config.bmgremail)){return;}
		else if(config.rpoint.value < 0 || config.pminpoint.value <0 || config.pmaxpoint <0){
			alert("포인트는 0 이상의 숫자를 입력해주세요.");
		}
		else if(config.pminpoint.value > config.pmaxpoint.value){
			alert("최소 포인트는 최대 포인트보다 클 수 없습니다.");
			config.pminpoint.focus();
		}else if(config.pdelprice.value < 0){
			alert("배송비는 0 이상의 숫자를 입력해주세요.")
		}
		else{
			doPost("config","./doSet.do");
		}
	}
});

Object.keys(reg.reg).forEach((a)=>{
	config[a].value = reg.reg[a];
});
Object.keys(def.def).forEach((a)=>{
	config[a].value = def.def[a];
});
Object.keys(pay.pay).forEach((a)=>{
	config[a].value = pay.pay[a];
});