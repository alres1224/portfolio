const ss = document.querySelector("#shop_setup");



// 메인 배너 데이터 검증
const mbanner = document.querySelector("#mbanner");
const main = document.querySelector("#main");
mbanner.addEventListener("click",function(){
	ifVoid(main,"메인 배너","main")
});

// 팝업 데이터 검증
const pop = document.querySelector("#pop");
const popup = document.querySelector("#popup");
pop.addEventListener("click",function(){
	ifVoid(popup,"메인 팝업","popup")
});

// AD 배너 데이터 검증 
const adbanner = document.querySelector("#adbanner");
const ad = document.querySelector("#ad");
adbanner.addEventListener("click",function(){
	ifVoid(ad,"AD 배너","ad")
});

// 데이터 검증 함수
function ifVoid(id,nm,table){
	let sign = false;
	ss.isort.value = table;
	for(let i = 0; i < id.children.length; i++){
		if(id.children[i].children[0].value !== ""){
			sign = true;
		}
	}
	if(sign === false){
		alert("최소한 한 개의 " + nm + " 항목을 입력해주세요.");
	}else{
		makeArray(id, table);
	}
}


const mainInfo = bannerArray.main;
const popupInfo = bannerArray.popup;
const adInfo = bannerArray.ad
const mainImage = mainInfo.images.split(",");
const mainUrl = mainInfo.urls.split(",");
const popupImage = popupInfo.images.split(",");
const popupUrl = popupInfo.urls.split(",");
const adImage = adInfo.images.split(",");
const adUrl = adInfo.urls.split(",");
console.log(mainUrl);

function printUrl(id,array){
	for(let i = 0; i < array.length; i++){
		document.getElementById(id+i).value = array[i]
	}
}

printUrl("mainImage",mainImage);
printUrl("mainUrl",mainUrl);
printUrl("popupImage",popupImage);
printUrl("popupUrl",popupUrl);
printUrl("adImage",adImage);
printUrl("adUrl",adUrl);

// 데이터 배열화하는 함수
function makeArray(id){
	let images = [];
	let urls = [];
	for(let i = 0; i < id.children.length; i++){
		if(i % 2 == 0){
			images.push(id.children[i].children[0].value);
			ss.iimages.value = images;
		}else{
			urls.push(id.children[i].children[0].value);
			ss.iurls.value = urls;
		}
	}
	
	doPost('shop_setup','./shop_setup_banner.do')
}