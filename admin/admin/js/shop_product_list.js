const form = document.querySelector("#shop_product_list");
const page = document.querySelector("#pListPage");
// 상품 리스트 출력
const div = document.querySelector("#printList");

let ul, li1, li2, li3, input, img, span;
function doPrint(data){
	if(data.length > 0){
		div.style.display = "block";
		document.querySelector(".pListVoid").style.display = "none";
		page.innerHTML = "";
		div.innerHTML = "";
		data.forEach(function(a){
			ul = document.createElement("ul");
			ul.setAttribute("class","pListPro wrap gulim")
			// 체크박스 생성
			li1 = document.createElement("li");
			input = document.createElement("input");
			input.type = "checkbox";
			input.name = "pcode";
			input.value = a[0];
			li1.append(input);
			ul.append(li1);
			// 내용 붙여 넣기
			a.forEach(function(a2, i2){
				li2 = document.createElement("li");
				if(i2 === 1){
					img = document.createElement("img");
					img.src = a2;
					li2.append(img);
				}else{
					li2.innerText = a2;
				}
				ul.append(li2);
			});
			// 버튼 생성
			li3 = document.createElement("li");
			span = document.createElement("span");
			span.innerText = "수정";
			span.setAttribute("onclick","doPost()");
			li3.append(span);
			ul.append(li3);
			div.append(ul);
		});
	}else{
		div.style.display = "none";
		document.querySelector(".pListVoid").style.display = "block";
		page.innerHTML = "";
	}
}


// 전체 선택 체크박스 핸들링
const ckAll = document.querySelector("#ckAll");
ckAll.addEventListener("click",function(event){
	const ckboxes = document.getElementsByName("pcode");
	let sign = false;
	if(event.target.checked){
		sign = true;
	}
	for(let i = 0; i < ckboxes.length; i++){
		ckboxes[i].checked = sign;
	}
});

// 페이지 버튼 출력
let li4;
for(let  i = 1; i <= pageEA; i++){
	li4 = document.createElement("li");
	li4.innerText = i;
	li4.setAttribute("onclick","doPage("+i+")");
	page.append(li4);
}

// 페이지 버튼 클릭 시 리스트 새로 불러오는 ajax
const doPage = function(index){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				doPrint(JSON.parse(this.response));
			}
		}
	}
	xhr.open("POST","./shop_product_page.do",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send("index="+index);
}

// 선택 삭제 버튼 함수
function doDelete(){
	let sign = false;
	for(let i = 0; i < form.pcode.length; i++){
		if(form.pcode[i].checked === true){
			sign = true;
		}
	}
	if(sign){
		doPost('shop_product_list','./shop_product_delete.do');
	}else{
		alert("적어도 한 개의 항목을 선택해주세요.");
	}
}

// 검색 select 변경 시 name 적용하는 함수
function selectName(value){
	document.querySelector("#searchName").name = value;
}

// 검색 내용 전송하고 결과 받아 오는 함수
const select = document.getElementById("select");
const text = document.getElementById("searchName");
function doSearch(){
	const sxhr = new XMLHttpRequest()
	sxhr.onreadystatechange = function(){
		if(sxhr.readyState === XMLHttpRequest.DONE){
			if(sxhr.status === 200){
				doPrint(JSON.parse(sxhr.response));
			}
		}
	}
	sxhr.open("POST","search_product.do",true);
	sxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	sxhr.send("param="+ select.value + "," + text.value);
}