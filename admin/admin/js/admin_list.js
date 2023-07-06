let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
	if(xhr.readyState == XMLHttpRequest.DONE){
		if(xhr.status == 200){
			doPrint(JSON.parse(this.response));
		}
	}
}
xhr.open("POST","./api.do",true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send("adminajaxok=passok");

const listBase = document.getElementById("listBase");
const listNull = document.getElementById("listNull");
function doPrint(array){
	//console.log(array); // 배열 출력
	if(array == null){
		listNull.style.display = "block";
	}else{
		listNull.style.display = "none";
		let ul;
		let count = array.length;
		array.forEach((a,i,o)=>{
			ul = document.createElement("ul"); 
			ul.setAttribute("class","listBody");
			listBase.append(ul);
			Object.keys(a).forEach((a2,i2,o2)=>{
				let li = document.createElement("li");
				let key;
				switch(i2){
					case 0 : key = "aidx";
					break;
					case 1 : key = "aid";
					break;
					case 2 : key = "aname";
					break;
					case 3 : key = "atel";
					break;
					case 4 : key = "aemail";
					break;
					case 5 : key = "adepart";
					break;
					case 6 : key = "aposition";
					break;
					case 7 : key = "adate";
					break;
					case 8 : key = "aconfirm";
					break;	
				}
				if(key === "aidx"){ // 번호 생성
					li.innerText = count;
					count--;
				}else if(key === "aconfirm"){ // 승인 미승인 버튼 생성
					let div1 = document.createElement("div");
					let div2 = document.createElement("div");
					div1.innerText = "승인";
					div1.setAttribute("onclick","doConfirm('yes','"+a['aid']+"')");
					div2.innerText = "미승인";
					div2.setAttribute("onclick","doConfirm('no')");
					li.append(div1);
					li.append(div2);
				}else{ // 나머지 정보들
				li.innerText = a[key];
				}
				ul.append(li);
			});
		});
	}
}


// 승인, 미승인 버튼
function doConfirm(result, aid){
	if(result === "yes"){
		const confirm = new XMLHttpRequest();
		confirm.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200){
					setTimeout(callsign,1000,this.response);
				}
			}
		}
		confirm.open("POST","http://localhost:8080/portfolio/admin/adminAssign.do",true);
		confirm.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		confirm.send("aid="+aid);
	}else{
		alert("해당 사용자는 미승인 처리되어 로그인하실 수 없습니다.");
	}
}

function callsign(sign){
	if(sign === "ok"){
		alert("승인 완료되었습니다.");
		location.reload();
	}else if(this.responseText === "no"){
		alert("데이터베이스 오류");
	}
}
