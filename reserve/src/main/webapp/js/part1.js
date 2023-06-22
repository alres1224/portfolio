"use strict"

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

const p1 = document.querySelector("#p1");

function list(array){
	//console.log(array.camp);
	const loop = array.camp.length / 4;
	const div = document.querySelector("#p1List");
	
	let ul;
	let ol;
	let li;
	let span;
	for(let i = 0; i < loop; i++){
		ul = document.createElement("ul");
		ul.setAttribute("class","p1ul");
		ol = document.createElement("ol");
		ol.id = "ol"+i;
		array.camp.forEach((a, idx)=>{
			if(Math.floor(idx/4) === i){
				Object.keys(a).forEach((a2,i2)=>{
					if(a2 === 'camp_name'){
						li = document.createElement("li");
						span = document.createElement("span");
						li.innerText = a[a2];
						li.setAttribute("onclick","more("+i+",'"+a['camp_part']+"','"+a[a2]+"',this)");
						li.append(span);
						ul.append(li);
						p1.cperson.value = a['camp_person'][i2];
					}
				});
			}
		});
		div.append(ul);
		div.append(ol);
	}
}

function more(no, camp, site, data){
	const ol = document.querySelectorAll("ol");
	for(let i = 0; i < ol.length; i++){
		ol[i].style.display = "none";
	}
	ol[no].style.display = "flex";
	
	const ea = camp.split(",").length;
	ol[no].innerHTML = "";
	let li;
	for(let i = 0; i < ea; i++){
		li = document.createElement("li");
		li.innerText = camp.split(",")[i];
		li.setAttribute("onclick","line('"+site+"',this)");
		ol[no].append(li);
	}
	
	const ul = document.querySelectorAll(".p1ul");
	for(let idx = 0; idx < ul.length; idx++){	
		const lis = ul[idx].children;
		for(let i = 0; i < lis.length; i++){
			lis[i].style.backgroundColor = "white";
			lis[i].style.color = "#666";
		}
	}
	data.style.backgroundColor = "#666";
	data.style.color = "black";
}

function line(data1,data2){
	const label = document.querySelector(".p1Line");
	const date = document.querySelector(".p1Date");
	
	let lis = data2.parentNode.children;
	for(let i = 0; i < lis.length; i++){
		lis[i].style.backgroundColor = "white";
		lis[i].style.color = "black";
		lis[i].style.border = "1px solid black";
	}
	
	date.style.display = "block";
	data2.style.backgroundColor = "black";
	data2.style.color = "white";
	data2.style.border = "1px solid white";
	
	
	const today = new Date();
	const year = today.getFullYear();
	let month = today.getMonth() + 1;
	if(month < 10){
		month = "0" + month;
	}
	const day = today.getDate();
	if(day < 10){
		day = "0" + day; 
	}
	const todayAll = year+"-"+month+"-"+day;
	
	p1.rindate.setAttribute("min",todayAll);
	p1.routdate.setAttribute("min",todayAll);
	
	const em = document.createElement("em");
	em.innerText = data1+" "+data2.innerText;
	label.innerHTML = "";
	label.append(em, " 야영장을 선택하셨습니다.");
	p1.ccampname.value = data1;
	p1.ccamppart.value = data2.innerText;
	
	
}

const btn = document.querySelector("#p1Btn");
btn.addEventListener("click",()=>{
	if(p1.rindate.value > p1.routdate.value){
		alert("입실일자는 퇴실일자보다 빨라야 합니다.");
	}else{
		p1.method = "get";
		p1.action = "./part2.do";
		p1.enctype = "application/x-ww-form-urlencoded"
		p1.submit();
	}
});


// 로그인 세션 처리 파트
const p1List = document.querySelector("#p1List");
const p1Line = document.querySelector(".p1Line");
if(mname == "null"){
	p1List.style.display = "none";
	p1Line.innerText = "로그인 하셔야만 예약하실 수 있습니다.";
}else{
	p1List.style.display = "block"
	p1Line.innerText = "야영장을 선택해주세요.";
}