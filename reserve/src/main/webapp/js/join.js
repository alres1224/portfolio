"use strict"

// 이용약관 불러오는 ajax
function ajax(spanId){
	const span = document.querySelector("#"+spanId);
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				span.innerText = this.responseText;
			}
		}
	}
	xhr.open("GET","./agree/agree_"+spanId+".txt",true);
	xhr.send();
	
}
ajax("info1");
ajax("info2");

// 아이디 중복 체크 검증 부분
const idOk = document.querySelector("#idOk");
const koCk = /[ㄱ-ㅎ가-힣ㅏ-ㅣ]/g;
idOk.addEventListener("click",()=>{
	if(join.mid.value===""){
		alert("아이디를 입력하세요");
		join.mid.focus();
	}else if(koCk.test(join.mid.value)){
		alert("영어 대소문자와 숫자, _만 사용하실 수 있습니다.");
	}else{
		let param = "mid="+join.mid.value;
		postAjax("./idCheck.do",param);
	}
});

// 아이디 중복 체크 ajax
function postAjax(url,param){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				idResult(xhr.responseText);
			}
		}
	}
	xhr.open("POST",url,true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xhr.send(param);
}

// 아이디 중복 체크 결과 출력
let resultCk = false;
function idResult(rst){
	if(rst === "yes"){
		alert("사용하실 수 있는 아이디입니다.");
		join.mid.readOnly = "true";
		resultCk = true;
	}else{
		alert("사용하실 수 없는 아이디입니다.");
		join.mid.value = "";
	}
}

// 회원가입완료 버튼 함수
const btn = document.querySelector(".joinOk");
btn.addEventListener("click",()=>{
	if(!resultCk){
		alert("아이디 중복체크를 해주세요.");
	}else if(join.mpass[0].value === ""){
		ifVoid("비밀번호");
	}else if(join.mname.value === ""){
		ifVoid("고객명");
	}else if(join.mtel.value === ""){
		ifVoid("전화번호");
	}else if(join.memail.value === ""){
		ifVoid("이메일");
	}else{
		if(!join.terms[0].checked || !join.terms[1].checked){
			alert("모든 이용 약관에 동의해주세요.");
		}else if(join.mpass.value != join.mpass2.value){
			alert("패스워드 확인을 동일하게 입력해주세요.");
		}else{
			if(join.msms[0].checked){
				join.msms[1].checked = false;
			}
			if(join.mad[0].checked){
				join.mad[1].checked = false;
			}
			join.method = "post";
			join.action = "./joinCamp.do";
			join.submit();
		}
	}
});

// 입력해주세요 함수
function ifVoid(nm){
	alert(nm+"을(를) 입력해주세요.");
}