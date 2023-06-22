"use strict"

p2.rname.value = mname;

// uri에서 필요한 정보 가져오는 파트
const uri = decodeURI(window.location.search);

const uri1 = uri.split("&");
const campname = uri1[0].split("=")[1];
const camppart = uri1[1].split("=")[1];
const person = uri1[2].split("=")[1];
const indate = uri1[3].split("=")[1];
const outdate = uri1[4].split("=")[1];

const spot = document.querySelector("#p2spot");


const inday = Number(indate.split("-")[2]);
const outday = Number(outdate.split("-")[2]);
const inmonth = Number(indate.split("-")[1]);
const month = Number(outdate.split("-")[1]) - inmonth;
let days;
if(month === 0){
	days = outday - inday;
}else{
	if(inmonth == 2){
		days = 28 - inday + outday;
	}else if(inmonth == 4 || inmonth == 6 || inmonth == 9 || inmonth == 11){
		days = 30 - inday + outday;
	}else{
		days = 31 - inday + outday;
	}
}

// ajax로 json 불러오는 파트
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === XMLHttpRequest.DONE){
		if(xhr.status === 200){
			list(JSON.parse(this.response));
		}
	}
}
xhr.open("GET","./json/campsite.json",true);
xhr.send();

// 캠프 정보 출력 파트
let span = document.querySelector("#p2photo");
let codehead;
function list(array){
	//console.log(array.camp);
	let option;
	array.camp.forEach((a)=>{
		if(a['camp_name'] === campname){
			Object.keys(a).forEach((a2,i2)=>{
				if(a['camp_part'][i2] === camppart){
					span.style.backgroundImage = "url('"+a['camp_image'][i2]+"')";
					span.setAttribute("onclick","loca('"+a['camp_image'][i2]+"')");
					const ea = a['camp_person'][i2];
					const money = a['camp_money'][i2];
					document.querySelector("#totalPrice").innerText = (money * days).toLocaleString() + " 원";
					p2.rmoney.value = money * days;
					codehead = campname.split("산")[0] + "-0" + (i2+1) +"-";
					for(let i = 1; i <= ea; i++){
						option = document.createElement("option");
						option.innerText = i + "명";
						option.value = i;
						p2.rperson.append(option);
					}
				}
			});
		}
	});
}

function code(param){
	p2.ccampcode.value = codehead + param;
}

// 예약 완료 검증 함수
function check(array){
	console.log(array);
	let div;
	for(let data of array){
		for(let i = 0; i < 4; i++){
			if(p2.ccamproom[i].value === data){
				p2.ccamproom[i].disabled = true;
				div = document.createElement("div");
				div.innerText = "완료";
				p2.ccamproom[i].parentNode.append(div);
			}
		}
	}
}

// part3로 전송하는 파트
document.querySelector(".p2Btn").addEventListener("click",()=>{
	const radio = document.getElementsByName("ccamproom");
	let ck = false;
	for(let i = 0; i < radio.length; i++){
		if(radio[i].checked){
			ck = true;
		}
	}
	if(!ck){
		alert("야영장 구역을 선택해주세요.");
	}else if(p2.rtel.value === ""){
		alert("연락처를 입력해주세요.");
	}else if(p2.rperson.value === "0"){
		alert("인원을 선택해주세요.");
	}else{
		if(confirm("선택하신 인원은 " + p2.rperson.value + "명입니다.")){
			p2.method = "get";
			p2.action = "./part3.jsp";
			p2.submit();
		}
	}
});