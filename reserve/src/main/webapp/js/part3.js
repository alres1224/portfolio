"use strict"

// 예약 번호 생성
let num= "";
for(let i = 1; i <=8; i++){
	num += Math.floor(Math.random()*10);
}
part3.rcode.value = num;
document.querySelector("#rcode").innerText = num;
// 결제 수단 선택 시 함수
function selectPay(li,data){
	document.querySelector(".p3Bank").style.display = "none";
	const lis = li.parentNode.children;
	for(let i = 0; i < lis.length; i++){
		lis[i].style.backgroundColor = "white";
		lis[i].style.color = "black";
	}
	li.style.backgroundColor = "black";
	li.style.color = "white";
	if(data === "무통장입금" || data === "계좌이체"){
		document.querySelector(".p3Bank").style.display = "flex";
	}else if(data === "신용카드"){
		part3.rpayck.value = "Y";
	}
	part3.rpay.value = data;
}

// 결제 선택 버튼 클릭 함수
const sbtn = document.querySelector(".p3Btn");
sbtn.addEventListener("click",(i)=>{
	const btns = document.querySelector(".p3Reserve");
	const pay = document.querySelector(".p3Bank");
	const pays = document.querySelector(".p3Pay");
	const ul = document.querySelector(".p3Confirm");
	const lis = ul.children;
	if(part3.rpay.value === ""){
		alert("결제 수단을 선택해주세요.");
	}else if(part3.rpay.value != "신용카드" &&part3.rpayname.value === ""){
		alert("입금자 명을 입력해주세요.");
	}else if(part3.rpay.value === "신용카드"){
		ul.style.display = "flex";
		lis[0].innerText = "신용카드";
		lis[1].innerText = "입금 완료";
		lis[1].style.color = "red";
		sbtn.style.display = "none";
		pay.style.display = "none";
		pays.style.display = "none";
		btns.style.display = "flex"
	}else{
		ul.style.display = "flex";
		lis[0].innerText = part3.rpay.value;
		lis[1].innerText = "신한은행 : 102-202306-0606 (국립공원공단)";
		lis[1].style.color = "black";
		sbtn.style.display = "none";
		pay.style.display = "none";
		pays.style.display = "none";
		btns.style.display = "flex"
	}
});

// 예약 취소 버튼
function rCancel(){
	if(confirm("예약을 취소하시겠습니까?")){
		loca("./part1.jsp")
	}
}

// 예약 완료 버튼
function rPost(){
	part3.method = "post";
	part3.action = "./insert.do";
	part3.submit();
}