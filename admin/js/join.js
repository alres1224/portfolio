const emailAddr = document.querySelector("#emailAddr");
const emails = ["hanmail.net","naver.com","gmail.com","Hotmail.com","daum.net","nate.com"]
const form = document.querySelector("#join_page");
const joinCancel = document.querySelector("#joinCancel");
const joinOk = document.querySelector("#joinOk");

// 도로명주소 API 핸들링 함수
function findAddr(){
	new daum.Postcode({
        oncomplete: function(data) {
            const roadAddr = data.roadAddress; // 도로명 주소 변수
            const jibunAddr = data.jibunAddress; // 지번 주소 변수
            document.getElementById('member_post').value = data.zonecode;
            if(roadAddr !== ''){
                document.getElementById("member_addr").value = roadAddr;
            } 
            else if(jibunAddr !== ''){
                document.getElementById("member_addr").value = jibunAddr;
            }
        }
    }).open();
    
}

let option;
for(let data of emails){
	option = document.createElement("option");
	option.value = data;
	option.innerText = data;
	emailAddr.append(option);
}
emailAddr.addEventListener("change",function(event){
	if(form.cemail.value === ""){
		alert("이메일 아이디를 입력해주세요.");
	}else{
		form.cemail.value = form.cemail.value.replace(/@/g,"");
		form.cemail.value += "@" + event.target.value;
	}
})

joinCancel.addEventListener("click",function(){
	if(confirm("입력하신 내용은 모두 삭제됩니다. 회원가입을 취소하시겠습니까?")){
		window.location.href="./";
	}
});

const isVoid = (nm1,nm2) => {
	sign = false;
	if(form[nm1].value === ""){
		alert(nm2 + "을(를) 입력해주세요.");
		form[nm1].focus();
		sign = true;
	}
	return sign;
}
joinOk.addEventListener("click",function(){
	if(isVoid('cid','아이디')){}
	else if(isVoid("cpass","비밀번호")){}
	else if(isVoid("cpassok","비밀번호 확인")){}
	else if(isVoid("cname","이름")){}
	else if(isVoid("cemail","이메일")){}
	else if(isVoid("cmobile","휴대폰번호")){}
	else if(isVoid("ctel","전화번호")){}
	else if(isVoid("addr1","우편번호")){}
	else if(isVoid("addr2","기본 주소")){}
	else if(isVoid("addr3","상세 주소")){}
	else{
		if(form.cpass.value !== form.cpassok.value){
			alert("비밀번호 확인을 비밀번호와 동일하게 입력해주세요.");
		}else{
			form.caddr.value = form.addr1.value+ "," + form.addr2.value+ "," + form.addr3.value;
			form.method = "post";
			form.action = "./member_join_ok.do";
			form.submit();
		}
	}
});


function unchecked(target){
	const checkbox = document.getElementsByName(target);
	checkbox[1].checked = !checkbox[0].checked;
}