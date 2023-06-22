var xhrBanner = new XMLHttpRequest();
xhrBanner.onreadystatechange = function(){
    if(xhrBanner.readyState == XMLHttpRequest.DONE && xhrBanner.status == 200){
        ajaxBanner(JSON.parse(this.response));
    }
}
xhrBanner.open("GET","./json/banner.json",true)
xhrBanner.send();

//HTML 출력 파트
var bannerLi, bannerImg;
var bannerUl = document.getElementById("bannerUl");
var bannerOl = document.getElementById("bannerOl")
var bannerUlLength, bannerTotalLength, liLength, bannerDisc;
function ajaxBanner(array){
    array.banners.forEach(function(i1,i2,i3){ // 배너 이미지 출력 파트
        if(i1[3] == "yes"){ 
            bannerLi = document.createElement("li");
            bannerLi.id = "liId"+i2;
            bannerImg = document.createElement("img");
            bannerImg.id = "bannerImg"+i2;
            bannerImg.setAttribute("src",i1[0])
            bannerImg.setAttribute("onclick","clickBanner("+"'"+i1[1]+"'"+")");
            bannerLi.append(bannerImg);
            bannerUl.append(bannerLi);
            bannerDisc = document.createElement("li");
            bannerDisc.id = "bannerDisc"+i2;
            bannerDisc.setAttribute("onclick","clickBannerDisc("+"'"+i2+"'"+")")
            bannerOl.append(bannerDisc);
        }
    })
    liLength = document.getElementById("liId0").offsetWidth;
    bannerTotalLength = liLength * bannerUl.children.length;
    bannerUl.style.width = bannerTotalLength + "px";
}

//롤링 배너 애니메이션
var bannerTimer;
var bannerUlLeft = 0;
var bannerLiClone;
var nowBannerNode;
var w, f;
function moveBanner(){
    if(bannerUlLeft < liLength){
        bannerUlLeft += 10
        bannerUl.style.left = -bannerUlLeft+"px";
        bannerTimer = setTimeout(moveBanner,20);
    }else if(bannerUlLeft >= liLength){
        bannerUlLeft = 0;
        bannerLiClone =  bannerUl.firstElementChild.cloneNode(true);
        bannerUl.firstElementChild.remove();
        bannerUl.appendChild(bannerLiClone);
        bannerUl.style.left = 0;
        nowBannerNode = bannerUl.firstElementChild.getAttribute("id").substring(4,5);
        w = 0;
        while(w < bannerUl.children.length) {
            document.getElementById("bannerDisc"+w).style.opacity = 0.5;
            w++;
        }
        document.getElementById("bannerDisc"+nowBannerNode).style.opacity = 1;
        bannerTimer = setTimeout(moveBanner,8000);
    }
}
bannerTimer = setTimeout(moveBanner,8000);

//배너 클릭 시 페이지 이동 함수
function clickBanner(url) {
    location.href = url;
}

//배너 디스크 클릭 핸들링 함수
var bannerDiscNode, bannerNodeClone;
function clickBannerDisc(no){
    w = 0;
    while(w < bannerUl.children.length) {
        document.getElementById("bannerDisc"+w).style.opacity = 0.5;
        w++;
    }
    document.getElementById("bannerDisc"+no).style.opacity = 1;
    bannerDiscNode = document.getElementById("liId"+no).offsetLeft / liLength;
    bannerUl.style.left = -document.getElementById("liId"+no).offsetLeft + "px";
    for(f=0;f<bannerDiscNode;f++){
        bannerNodeClone = bannerUl.firstChild.cloneNode(true);
        bannerUl.firstChild.remove();
        bannerUl.append(bannerNodeClone);
        bannerUl.style.left = 0;
    }
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(moveBanner,8000);
}
//화살표 클릭 핸들링 함수
var bannerOffsetLeft;
var bannerRightControl = 0;
var bannerLeftControl = 0;

function bannerMoveLeft() {
    clearTimeout(bannerTimer);
    if(bannerLeftControl == 0){
        bannerNodeClone = bannerUl.lastElementChild.cloneNode(true);
        bannerUl.lastElementChild.remove();
        bannerUl.prepend(bannerNodeClone);
        bannerOffsetLeft = liLength;
        bannerUl.style.left = -bannerOffsetLeft + "px";
        bannerLeftControl = 1;
        bannerMoveLeft();
    }else if(bannerLeftControl == 1){
        if(bannerOffsetLeft > 0){            
            bannerOffsetLeft -= 10;
            bannerUl.style.left = -bannerOffsetLeft + "px";
            setTimeout(bannerMoveLeft,10);
        }
        else if(bannerOffsetLeft <= 0){
            nowBannerNode = bannerUl.firstElementChild.getAttribute("id").substring(4,5);
            w = 0;
        while(w < bannerUl.children.length) {
            document.getElementById("bannerDisc"+w).style.opacity = 0.5;
            w++;
        }
        document.getElementById("bannerDisc"+nowBannerNode).style.opacity = 1;
            bannerUl.style.left = 0;
            bannerLeftControl = 0;
        }
    }
}

function bannerMoveRight() {
    clearTimeout(bannerTimer);
    if(bannerRightControl == 0){
        nowBannerNode = bannerUl.firstElementChild.getAttribute("id").substring(4,5);
        bannerOffsetLeft = document.getElementById("liId"+nowBannerNode).offsetLeft;
        bannerRightControl = 1;
        bannerMoveRight();
    }else if(bannerRightControl == 1){
        if(bannerOffsetLeft < liLength){
            bannerOffsetLeft += 10;
            bannerUl.style.left = -bannerOffsetLeft+"px";
            setTimeout(bannerMoveRight,10);
        }else if(bannerOffsetLeft >= liLength){
            bannerNodeClone = bannerUl.firstChild.cloneNode(true);
            bannerUl.firstChild.remove();
            bannerUl.append(bannerNodeClone); 
            bannerUl.style.left = 0;
            nowBannerNode = bannerUl.firstElementChild.getAttribute("id").substring(4,5);
            w = 0;
            while(w < bannerUl.children.length) {
                document.getElementById("bannerDisc"+w).style.opacity = 0.5;
                w++;
            }
            document.getElementById("bannerDisc"+nowBannerNode).style.opacity = 1;
            bannerRightControl = 0;
            bannerTimer = setTimeout(moveBanner,8000);
        }
    }
}

