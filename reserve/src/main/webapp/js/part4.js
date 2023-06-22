"use strict"

// 예약 확인 버튼 핸들링
const sbtn = document.querySelector("#p4Btn");
sbtn.addEventListener("click",function(){
	if(part4.code.value === ""){
		alert("예약 번호를 입력해주세요.")
	}else if(part4.code.value < 10000000 || part4.code.value > 100000000){
		alert("올바른 예약 번호를 입력해주세요.");
	}else{
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					doPrint(JSON.parse(this.response));
				}
			}
		}
		xhr.open("POST","./findReserve.do",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send("rcode="+part4.code.value);
		const uls = document.querySelectorAll(".control");
		for(let i = 0; i < uls.length; i++){
			uls[i].style.display = "flex";
		}
		document.querySelector(".p4Code").style.display = "none"
	}
});

// 예약 정보 출력 함수
function doPrint(array){
	console.log(array);
	let label;
	if(array.length > 0){
		array[0].forEach(function(a,i){
				label = document.getElementById("la"+i);
			if(i === 4){
				label.innerText = array[0][1] + " - " + array[0][i].split("-")[2] +"동";
			}else if(i===5){
				label.innerText = array[0][i].toLocaleString();
			}else if(i === 11){
				if(array[0][i] === "Y"){
					label.innerText = "입금 완료";
				}else{
					label.innerText = "입금 대기";
				}
				label.style.color = "red";
			}
			else{
				label.innerText = array[0][i]
			}
		});
	}else{
		alert("유요하지 않은 예약번호입니다.");
		window.location.reload();
	}
	
	part4.rcode.value = array[0][9];
}

// 예약 취소 버튼 핸들링
document.querySelector(".cancelBtn").addEventListener("click",function(){
	if(confirm("예약을 취소하시겠습니까?")){
		part4.method = "post";
		part4.action = "./delete.do";
		part4.submit();
	}
});