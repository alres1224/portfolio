// form id로 불러오는 변수
const form = document.getElementById("shop_product");

// 중복체크 했는지 확인하는 변수 
let sign = false;

// select 카테고리 출력
const categories = {
	pbmenu : ['기획상품', '이벤트 상품', '무료배송상품', '베스트 상품', '이주의 핫딜'],
	psmenu : ['채소/과일/농수산물', '간식/간편음식', '베이커리/우유', '냉장고','김치냉장고', '주방용품/생활가전', '컴퓨터/스마트폰', '공기청정기']
}

let option;
for(let names in categories){
	for(let datas of categories[names]){
		option = document.createElement("option");
		option.value = datas;
		option.innerText = datas;
		form[names].append(option);
	}
}

// 상품코드 출력
const printCode = function(sign){
	let code = "";
	if(sign === "n"){
		for(let i = 0; i < 6; i++){
			code += Math.floor(Math.random()*10);
		}
		form.pcode.value = code;
	}else{
		alert("사용 가능한 코드입니다.");
		sign = true;
	}
}
printCode("n");

// 중복확인 
function ajax(){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				printCode(this.responseText);
			}
		}
	}
	xhr.open("POST","./shop_pcode.do",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send("pcode="+form.pcode.value);
}

// 할인 가격 출력
const discount = document.querySelector("#discount");
const price = document.querySelector("#price");
const doDis = function(){
	if(form.pprice.value != "" && form.pdiscount.value != ""){
		if(form.pdiscount.value > 100 || form.pdiscount.value < 0){
			alert("할인율은 0 이상 100 이하의 숫자를 입력해주세요.");
			form.pdiscount.value = "";
			form.pdiscount.focus();
		}else{
			const price = Math.round(form.pprice.value * (1 - form.pdiscount.value / 100))
			form.pdisprice.value = parseInt(price.toString().slice(0,-1) + "0");
		}
	}	
};
price.addEventListener("input",function(){doDis();});
discount.addEventListener("input",function(){doDis();});


// 공백 검증 함수
function ifVoid(data, msg){
	if(data.value === ""){
		alert(msg + "을(를) 입력해주세요.");
		return true;
	}else{
		return false;
	}
}

// 상품 등록
const update = document.querySelector("#update");
update.addEventListener("click",function(){
	if(ifVoid(form.pbmenu,'대메뉴 카테고리')){}
	else if(ifVoid(form.psmenu,"소메뉴 카테고리")){}
	else if(ifVoid(form.pname,"상품명")){}
	else if(ifVoid(form.ptext1,"상품 부가설명")){}
	else if(ifVoid(form.pprice,"판매가격")){}
	else if(ifVoid(form.pdiscount,"할인율")){}
	else if(ifVoid(form.pea,"상품재고")){}
	else if(ifVoid(form.image1,"상품 대표 이미지")){}
	else if(CKEDITOR.instances.text.getData() ==''){
			alert("내용을(를) 입력해주세요.");
	}else{
		doPost('shop_product','./shop_product_upload.do');
	}
});

// 상품 목록
const list = document.querySelector("#list");
list.addEventListener("click",function(){
	if(confirm("상품 등록을 중단하시겠습니까?")){
		doPost('shop_product','./shop_product_list.do');
	}
});