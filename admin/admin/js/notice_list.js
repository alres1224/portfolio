// 공지사항 글 목록 출력 함수
function doPrint(array){
	//console.log(array);
	
	const div = document.querySelector("#listSpot");
	div.innerHTML = "";
	
	let ul, li, key, input;
	let count = array.length;
	array.forEach((a,i)=>{
		ul = document.createElement("ul");
		ul.setAttribute("class","noticeMiddle noticeList wrap");
		Object.keys(a).forEach((a2,i2)=>{
			li = document.createElement("li");
			if(i2 === 0){
				input = document.createElement("input");
				input.type = "checkbox";
				input.name = "nidx";
				input.value = a['nidx'];
				li.append(input);
			}else if(i2 === 1){
				li.innerText = count;
				count--;
			}else if(i2 === 2){
				li.setAttribute("onclick","noticeView("+a['nidx']+")");
				li.innerText = a['nsubject'];
			}else{
				switch(i2){
					case(3) : key = "nwriter"; break;
					case(4) : key = "ndate"; break;
					case(5) : key = "nclick"; break;
				}
				li.innerText = a[key];
			}
			ul.append(li);
		});
		div.append(ul);
	});
}

// 페이지 숫자 출력 함수
const pbody = document.querySelector("#noticeNumbers");
function pSet(ea){
	let li;
	pbody.innerHTML = "";
	for(let i = 5 * ea + 1; i <= 5 * (ea + 1); i++){
		if(i <= pageEA){
			li = document.createElement("li");
			li.innerText = i;
			li.setAttribute("onclick","pageMove("+(i-1)+")");
			pbody.append(li);
		}
	}
	pajax(5 * ea);
}
pSet(0);
// 페이지 출력용 ajax
function pajax(i){
		const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				doPrint(JSON.parse(this.response));
			}
		}
	}
	xhr.open("POST","./notice_page.do",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send("pageno=" + i);
	
}

// 다음 페이지 버튼 함수
let pcount = 0;
function pageInc(){
	if(Math.ceil(pageEA / 5) > pcount){
		pcount += 1;
		pSet(pcount);
	}
}

// 이전 페이지 버튼 함수
function pageDec(){
	if(pcount > 0){
		pcount -= 1;
		pSet(pcount);
	}
}

// 선택 페이지 이동 함수
function pageMove(i){
	pajax(i);
}

// 체크박스 모두 선택 핸들링 함수
const selectAll = document.querySelector("#selectAll");
selectAll.addEventListener("click",function(){
	const ea = document.getElementsByName("nidx").length;
	let sign = false;
	if(selectAll.checked === true){
		sign = true;
	}
	for(let  i = 0; i < ea; i++){
		notice_list.nidx[i].checked = sign; 
	}
});

// 공지사항 삭제 검증 함수
function isChecked(){
	const ea = document.getElementsByName("nidx").length;
	let sign = false;
	console.log(ea);
	for(let i = 0; i < ea; i++){
		if(notice_list.nidx[i].checked){
			sign = true;
		}
	}
	if(sign){
		doPost('notice_list','./notice_delete.do');
	}else{
		alert("적어도 한 개의 공지글을 선택해주세요.");
	}
}

// 공지사항 VIEW 페이지 이동 함수
function noticeView(idx){
	doPost('notice_list',"./notice_view.do?nidx="+idx);
}