// 전체 회원 수 저장용 변수
let cNum = "";
doPage(1);
// 회원 목록 받아 오는 api
function doPage(page){
	document.getElementById("checkall").checked = false;
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				printList(JSON.parse(this.response));
			}
		}
	}
	xhr.open("POST","./member_api.do",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send("pageNo="+page);
}

// 회원 목록 출력하는 함수
function printList(array){
	//console.log(array);
	const print = document.querySelector("#print");
	print.innerHTML = "";
	document.querySelector(".noMember").style.display = "none";
	cNum = array.length;
	let ul,li;
	let input;
	let div1, div2;
	let count = 0;
	if(array.length === 0){
		document.querySelector(".noMember").style.display = "block";
	}else{
		array.forEach((a)=>{
			ul = document.createElement("ul");
			ul.setAttribute("class","memberInfo flex gulim");
			Object.keys(a).forEach((a2,i2)=>{
				li = document.createElement("li");
				let key;
				if(i2 === 0){
					input = document.createElement("input");
					input.type = "checkbox";
					input.id = "check"+count;
					input.value = a['cid'];
					li.append(input);
					count++;
				}else if(i2 === 11){
					div1 = document.createElement("div");
					div2 = document.createElement("div");
					div1.innerText = "수정";
					div1.setAttribute("onclick","mod('"+a['cid']+"')");
					div2.innerText = "정지";
					div2.setAttribute("onclick","stop('"+a['cid']+"')");
					li.append(div1);
					li.append(div2);
				}else{
					switch(i2){
						case 1: key="cid";
						break;
						case 2: key="cname";
						break;
						case 3: key="cmobile";
						break;
						case 4: key="ctel";
						break;
						case 5: key="clvl";
						break;
						case 6: key="cpoint";
						break;
						case 7: key="clogdate";
						break;
						case 8: key="cindate";
						break;
						case 9: key="cemailok";
						break;
						case 10: key="csmsok";
						break;
					}
					li.innerText = a[key];
				}
				 ul.append(li);
			});
			print.append(ul);
		});
	}
}

// 회원 정보 수정 함수
function mod(cid){
	window.open("./member_modify.do?cid="+cid,"회원정보수정","width = 550, height= 450")
}

// 휴면 회원 전환 함수
function stop(cid){
	const sxhr = new XMLHttpRequest();
	sxhr.onreadystatechange = function(){
		if(sxhr.readyState === XMLHttpRequest.DONE){
			if(sxhr.status === 200){
				if(this.response > 0){
					alert("정상 반영되었습니다.");
					window.location.reload();
				}else{
					alert("오류가 발생했습니다.");
				}
			}
		}
	}
	sxhr.open("POST","./member_stop.do",true);
	sxhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	sxhr.send("cid="+cid);
}

// 최초 로딩 시 페이지 번호 출력 파트
const ea = Math.ceil(totalNum / pageSize);
const page = document.querySelector(".memberNo");
printPage(ea);

// 페이지 번호 출력용 함수
function printPage(num){
	page.innerHTML = "";
	let p;
	for(let i = 1; i <= num; i++){
		p = document.createElement("li");
		p.innerText = i;
		p.setAttribute("onclick","doPage('"+i+"')");
		page.append(p);
	}
}

// 검색 입력바 name 변경 함수
const search = document.querySelector("#msearch");
const column = document.querySelector("#column");
function changeName(data){
	search.setAttribute("name",data);
}

// 검색 전송 함수
const searchBtn = document.querySelector("#searchBtn");
function doSearch(){
	if(search.value != ""){
		const sxhr = new XMLHttpRequest();
		sxhr.onreadystatechange = function(){
			if(sxhr.readyState === XMLHttpRequest.DONE){
				if(sxhr.status === 200){
					printList(JSON.parse(this.response));
					printPage(0);
				}
			}
		}
		sxhr.open("POST","./member_search.do",true);
		sxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		sxhr.send("param="+column.value+","+search.value);
	}else{
		alert("검색어를 입력해주세요");
	}
}
searchBtn.addEventListener("click",()=>{doSearch()});

// 전체 선택 체크박스 핸들링 함수
function checkAll(sign){
	let ck = false;
	if(sign){
		ck = true;
	}
	for(let i = 0; i < cNum; i++){
		document.getElementById("check"+i).checked = ck;
	}
}

// 선택 삭제 버튼 핸들링 함수
const delBtn = document.querySelector("#deleteBtn");

delBtn.addEventListener("click",()=>{
	let ids = "";
	for(let i = 0; i < cNum; i++){
		if(document.getElementById("check"+i).checked){
			ids += document.getElementById("check"+i).value +",";
		}
	}
	console.log(ids);
	list.delId.value = ids;
	
	list.method = "post";
	list.action = "./member_delete.do";
	list.submit();
})