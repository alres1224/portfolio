var data = {
    "img" : ["contents/b13_1.png","contents/b13_2.png","contents/b13_3.png","contents/b13_4.png","contents/b13_5.png"],
    "name" : ["타짜 : 원아이드잭","이스케이프룸(노 웨이 아웃)","리미트리스","나를 찾아줘","더 이퀄라이저2"]
};


//html 출력
var weekData, weekLi, weekSpanHTML, weekLabelHTML ;
var weekUl = document.getElementById("weekUl");
data.img.forEach(function(a1,a2,a3){
    weekLi = document.createElement("li");
    weekUl.append(weekLi);
    for(weekData in data){
        if(weekData == "img"){
            weekSpanHTML = document.createElement("span");
            weekSpanHTML.style.backgroundImage = "url('./"+data[weekData][a2]+"')"
            weekSpanHTML.setAttribute("onmouseenter","weekMouseEnter("+a2+")");
            weekSpanHTML.setAttribute("onmouseleave","weekMouseLeave("+a2+")");
            weekSpanHTML.id = "weekSpan" + a2;
            weekLi.appendChild(weekSpanHTML);
        }else if(weekData == "name"){
            weekLabelHTML = document.createElement("label");
            weekLabelHTML.textContent = data[weekData][a2];
            weekSpanHTML.append(weekLabelHTML);
        }
    }
})


//마우스엔터 핸들링 함수
var weekSpan, weekLabel;
function weekMouseEnter(no) {
    weekSpan = document.getElementById("weekSpan"+no);
    weekSpan.firstChild.style.display = "block";
}

//마우스리브 핸들링 함수
function weekMouseLeave(no){
    weekSpan = document.getElementById("weekSpan"+no);
    weekSpan.firstChild.style.display = "none";
}

