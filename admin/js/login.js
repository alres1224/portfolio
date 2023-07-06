const ids = localStorage.getItem("cid");
if(ids !== null){
	login.saveId.checked = true;
	login.cid.value = ids;
}


const loginOk = function(response){
	if(response === "yes"){
		alert("로그인 되셨습니다.");
		window.location.href="./";
	}else{
		alert("아이디와 비밀번호를 확인해 주세요.");
	}
}

function doSubmit(event) {
	event.preventDefault();
	if (event.submitter.name === "member") {
		if(login.cid.value === ""){
			alert("아이디를 입력해주세요.");
			login.cid.focus();
		}else if(login.cpass.value === ""){
			alert("비밀번호를 입력해주세요.");
			login.cpass.focus();
		}else{
			login.action = "./login_member.do";
			login.submit();
		}
	} else {
		if(search.oname.value === ""){
			alert("주문자명을 입력해주세요.");
		}else if(search.ocode.value === ""){
			alert("주문번호를 입력해주세요.");
		}else{
			alert("서비스 준비중입니다.")
		}
	}
}

const register = document.querySelector("#register");

register.addEventListener("click",function(){
	window.location.href = "./member_join.jsp";
})
