const termAll = document.querySelector("#termAll");
const terms1 = document.querySelector("#terms1");
const terms2 = document.querySelector("#terms2");
function ajax(id, url){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				printTerms(id, this.responseText);
			}
		}
	}
	xhr.open("GET",url,true);
	xhr.send();
}
ajax(terms1, "./agreement/agree1.txt");
ajax(terms2, "./agreement/agree2.txt");

const printTerms = function(id, terms){
	id.innerText = terms;
	if(id === termAll){
		document.querySelector(".termAll").style.display = "block"; 
	}
}

const closeTerms = function(){
	document.querySelector(".termAll").style.display = "none"; 
}

const ckAll = document.querySelector("#ckAll");
const ck1 = document.querySelector("#ck1");
const ck2 = document.querySelector("#ck2");
ckAll.addEventListener("click",function(event){
	const sign = event.target.checked;
	ck1.checked = sign;
	ck2.checked = sign;
})

const nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click",function(){
	if(ck1.checked === true && ck2.checked === true){
		window.location.href = "./join.jsp";
	}else{
		alert("모든 필수 약관에 동의해주세요.");
	}
})