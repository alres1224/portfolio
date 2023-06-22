function copyrightRequest(a,b,d){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            if(d==1){
                copyNoticeArray(JSON.parse(this.response));
            }else if(d==2){
                copyMenuArray(JSON.parse(this.response));
            }
        }
    }
    xhr.open(a,b,true);
    xhr.send();
}
copyrightRequest("GET","./json/notice.json",1);
copyrightRequest("GET","./json/pullmenu.json",2);

//공지사항 HTML 출력
var copyNotice = document.getElementById("copyNotice");
var copyNoticeLi;
function copyNoticeArray(array) {
    array.notice.forEach(function(a1,a2,a3){
        copyNoticeLi = document.createElement("li");
        copyNoticeLi.textContent = a1;
        copyNotice.append(copyNoticeLi);
    });
}

//메뉴 HTML 출력
var copyMenuSpan, copyMenuEm, copyMenuUl, copyMenuLi;
var copyMenu = document.getElementById("copyMenu");
function copyMenuArray(array){
    // console.log(array);
    Object.keys(array[0]).forEach(function(a1,a2,a3){
        copyMenuSpan = document.createElement("span");
        copyMenuSpan.setAttribute("onclick","copyMenuMove"+a2+"('copyUl"+a2+"')");
        copyMenuEm = document.createElement("em");
        copyMenuEm.id = "copyEm"+a2;
        copyMenuUl = document.createElement("ul");
        copyMenuUl.id = "copyUl"+a2;
        if(a1 == "brand"){
            copyMenuSpan.textContent = "브랜드 바로가기";
        }else if(a1 == "subsidi"){
            copyMenuSpan.textContent = "계열사 바로가기"
        }
        copyMenuEm.textContent = "▲";
        copyMenu.appendChild(copyMenuSpan);
        copyMenuSpan.appendChild(copyMenuUl);
        copyMenuSpan.appendChild(copyMenuEm);
        array[0][a1].forEach(function(b1,b2,b3){
            copyMenuLi = document.createElement("li");
            copyMenuLi.textContent = b1;
            copyMenuUl.appendChild(copyMenuLi);
        });
    });
    
}

//공지사항 애니메이션 핸들링
var copyTop = 0;
var copyTimeout, copyLiClone;
function copyNoticeMove(){
    if(copyTop < 45){
        copyTop += 1
        copyNotice.style.top = -copyTop+"px";
        setTimeout(copyNoticeMove,20);
    }else if(copyTop >= 45){
        copyLiClone = copyNotice.firstElementChild.cloneNode(true);
        copyNotice.firstElementChild.remove();
        copyNotice.append(copyLiClone);
        copyNotice.style.top = 0;
        copyTop = 0;
        setTimeout(copyNoticeMove,10000);
    }
}
setTimeout(copyNoticeMove,10000);

//메뉴 애니메이션 핸들링
var copyUl0, copyOH0;
var copyUlH0 = 0;
var copyUlC0 = true;
var copyUlC20 = "up";
function copyMenuMove0(id){
    if(copyUlC0 === true){
        copyUl0 = document.getElementById(id);
        copyOH0 = copyUl0.children.length * copyUl0.firstElementChild.offsetHeight;
        copyUlC0 = false;
        setTimeout(copyMenuMove0,10);
    }else if(copyUlC0 === false){
        if(copyUlH0 < copyOH0 && copyUlC20 === "up"){
            copyUlH0 += 5;
            copyUl0.style.height = copyUlH0 + "px";
            copyUl0.style.border = "1px solid black"
            setTimeout(copyMenuMove0,10);
        }else if(copyUlH0 >= copyOH0 && copyUlC20 === "up"){
            copyUlC20 = "down"
            copyUlC0 = true;
        }else if(copyUlH0 > 0 && copyUlC20 === "down"){
            copyUlH0 -= 5;
            copyUl0.style.height = copyUlH0 + "px";
            setTimeout(copyMenuMove0,10);
        }else if(copyUlH0 <= 0 && copyUlC20 === "down"){
            copyUl0.style.border = 0;
            copyUlC20 = "up"
            copyUlC0 = true;
        }
    }
}

var copyUl1, copyOH1;
var copyUlH1 = 0;
var copyUlC1 = true;
var copyUlC21 = "up";
function copyMenuMove1(id){
    if(copyUlC1 === true){
        copyUl1 = document.getElementById(id);
        copyOH1 = copyUl1.children.length * copyUl1.firstElementChild.offsetHeight;
        copyUlC1 = false;
        setTimeout(copyMenuMove1,10);
    }else if(copyUlC1 === false){
        if(copyUlH1 < copyOH1 && copyUlC21 === "up"){
            copyUlH1 += 5;
            copyUl1.style.height = copyUlH1 + "px";
            copyUl1.style.border = "1px solid black"
            setTimeout(copyMenuMove1,10);
        }else if(copyUlH1 >= copyOH1 && copyUlC21 === "up"){
            copyUlC21 = "down"
            copyUlC1 = true;
        }else if(copyUlH1 > 0 && copyUlC21 === "down"){
            copyUlH1 -= 5;
            copyUl1.style.height = copyUlH1 + "px";
            setTimeout(copyMenuMove1,10);
        }else if(copyUlH1 <= 0 && copyUlC21 === "down"){
            copyUl1.style.border = 0;
            copyUlC21 = "up"
            copyUlC1 = true;
        }
    }
}


//공정거래위원회 API 서버 동기화 함수
function corp(no) {
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=600 height=600");
}