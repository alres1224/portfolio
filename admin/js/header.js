function close2(){
	document.querySelector(".header2Ad").style.height = 0;
}

const header2 = document.querySelector("#header2");
function doSubmit2(){
	if(header2.pname.value === ""){
		alert("검색어를 입력해주세요.");
		return false;
	}else{
		header2.method = "get";
		header2.action = "goods_search.do";
		header2.submit();
	}
}

function logout(){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				alert("로그아웃 되셨습니다.")
				window.location.reload();
			}
		}
	}
	xhr.open("POST","./admin/customer_logout.do",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send();
}