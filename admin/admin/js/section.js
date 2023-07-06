"use strict"
const login = document.getElementById("login");
function doLogin(){
	if(login.aid.value == "" || login.apass.value == ""){
		alert("모든 로그인 정보를 입력해주세요.");
	}else{
		Lpost();
	}
}

function Lpost(){
	login.method = "post";
	login.action = "./adminmain.do";
	login.enctype= "application/x-www-form-urlencoded";
	login.submit();
}

function Lgo(url){
	location.href = url;
}