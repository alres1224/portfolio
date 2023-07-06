"use strict"
let ck = false;

// id로 가져온 요소들
const join = document.getElementById("join");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


// select의 option 출력
const select = {
	"depart" :["임원","전산팀","디자인팀","CS팀","MD팀","영업팀"],
	"position" : ["대표","부장","팀장","과장","대리","주임","사원"]
};

let option;
Object.keys(select).forEach((a,i)=>{
	select[a].forEach((a2,i2,o2)=>{
		option = document.createElement("option")
		option.innerText = a2;
		option.value = (i2+1);
		if(a == "depart"){
			join.adepart.append(option);
		}else{
			join.aposition.append(option);
		}
	});
});


// 정규식 모음
const emailCK = /[0-9a-z]+@[a-z가-힣]+\.[a-z]/gi;


// 데이터 검증 함수
function reg(){
	if(join.aid.value == ""){
		alert("아이디를 입력하세요.");
		join.aid.focus();
	}else if(join.apass[0].value == ""){
		alert("비밀번호를 입력하세요.");
		join.apass[0].focus();
	}else if(join.apass[1].value ==""){
		alert("비밀번호 확인을 입력해주세요")
	}else if(join.aname.value == ""){
		alert("담당자 이름을 입력해주세요.");
		join.aname.focus();
	}else if(join.aemail.value == ""){
		alert("담당자 이메일을 입력해주세요.");
	}else if(join.atel[0].value == "" || join.atel[1].value == "" || join.atel[2].value == ""){
		alert("전화번호를 올바르게 입력해주세요.")
	}else if(join.adepart.value == ""){
		alert("담당자 부서를 선택해주세요.")
	}else if(join.aposition.value == ""){
		alert("담당자 직책을 선택해주세요");
	}else if(!ck){
		alert("아이디 중복체크를 해주세요.");
	}else{
		if(join.apass[1].value != join.apass[0].value){
			alert("비밀번호 확인을 정확히 입력해주세요.");
			join.apass[1].value = "";
			join.apass[1].focus();
		}else if(!emailCK.test(join.aemail.value)){
			alert("올바른 이메일을 입력해주세요.");
		}else{
			post();
		}
	}
}
btn2.addEventListener('click',reg);

// 관리자 등록 버튼 함수
function post(){
	join.method = "post";
	join.action = "./adminjoin.do";
	join.enctype="application/x-www-form-urlencoded";
	join.submit();
}

// 중복체크 통신
function check(){
	if(join.aid.value != ""){
		if(join.aid.value == "admin" || join.aid.value == "master"){
			alert("사용하실 수 없는 아이디입니다.");
			join.aid.value = "";
		}else{
		let sign;
		const xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
				sign = this.response;
				if(sign == "ok"){
					alert("사용하실 수 있는 아이디입니다.");
					join.aid.readOnly = true;
					ck = true;
				}else if(sign == "no"){
					alert("이미 존재하는 아이디입니다.");
				}else{
					console.log("중복 체크 통신 오류");
				}
			}
		}
		xhr.open("post","./idCheck.do",true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send("aid="+join.aid.value);
	}
	}else{
			alert("아이디를 입력해주세요.");
	}
}
btn1.addEventListener('click',check);

btn3.addEventListener("click",function(){
	window.location.href = "./";
});