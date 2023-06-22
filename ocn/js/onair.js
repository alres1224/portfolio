var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
        onairAjax(JSON.parse(this.response));
    }
}
xhr.open("GET","./json/new_program.json",true);
xhr.send()

var onairLi, onairSpan;
var onairUl0 = document.getElementById("onairUl0");
var onairUl1 = document.getElementById("onairUl1");
function onairAjax(array) {
    // console.log(array);
    var onairf;
    for(onairf in array){
        onairLi = document.createElement("li");
        onairSpan = document.createElement("span");
        onairSpan.style.backgroundImage = "url("+array[onairf]["new_thumb"]+")"
        onairSpan.setAttribute("title",array[onairf]["new_pg"])
        onairLi.append(onairSpan);
        if(onairf <= 7){
            onairUl0.append(onairLi);
        }else if(onairf <= 15){
            onairUl1.append(onairLi);
        }
    }
}

//더보기 버튼 핸들링 함수
var onairUlOpacity = 1;
var onairUlCount = 0;
var onairTimer;
function onairFadeOut(){
    clearTimeout(onairTimer);
    if((onairUlOpacity).toFixed(2) > 0){
        onairUlOpacity -= 0.01
        if(onairUlCount === 0){
            onairUl0.style.opacity = (onairUlOpacity).toFixed(2);
            onairUl1.style.display = "block";
            onairUl1.style.opacity = 1-(onairUlOpacity).toFixed(2);
        }
        else if(onairUlCount === 1){
            onairUl1.style.opacity = (onairUlOpacity).toFixed(2);
            onairUl0.style.display = "block";
            onairUl0.style.opacity = 1-(onairUlOpacity).toFixed(2);
        }
        onairTimer = setTimeout(onairFadeOut,10);
    }else if((onairUlOpacity).toFixed(2) <= 0){
        onairUlOpacity = 1;
        if(onairUlCount == 0){
            onairUl0.style.display = "none";
            onairUlCount = 1;
        }
        else if(onairUlCount === 1){
            onairUl1.style.display = "none";
            onairUlCount = 0;
        }
    }
}

//광고 배너 함수
function onairAd(){
    window.open("https://biz.skbroadband.com/","100px 100px");
}