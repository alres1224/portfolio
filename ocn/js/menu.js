var xhrMenu = new XMLHttpRequest();
xhrMenu.onreadystatechange = function(){
    if(xhrMenu.readyState == XMLHttpRequest.DONE && xhrMenu.status == 200){
        ajaxMenu(JSON.parse(this.response));
    }
}
xhrMenu.open("GET","./json/menu.json",true);
xhrMenu.send();

//HTML 출력
var mainMenu = document.getElementById("main");
var ulliMenu, olMenu, olliMenu;
function ajaxMenu(array){
    //console.log(array);
    array.forEach(function(m1,m2,m3){
        ulliMenu = document.createElement("li");
        olMenu = document.createElement("ol");
        olMenu.id = "menu"+m2;
        ulliMenu.setAttribute("onmouseenter","meMenu("+"'"+m2+"'"+")")
        ulliMenu.setAttribute("onmouseleave","mlMenu("+"'"+m2+"'"+")")
        ulliMenu.textContent = m1.main_menu;
        ulliMenu.appendChild(olMenu);
        mainMenu.appendChild(ulliMenu);
        array[m2].menu_list.forEach(function(s1,s2,s3){
            olliMenu = document.createElement("li");
            olliMenu.textContent = s1;
            olliMenu.setAttribute("onclick","siteMenu("+"'"+array[m2].menu_link[s2]+"'"+")")
            olMenu.append(olliMenu);
        });
    });
}

//소메뉴 클릭 시 사이트 이동하는 함수
function siteMenu(url){
    location.href = url;
}

//소메뉴 마우스 핸들링 함수
var olMenuId;
function meMenu(no){
    olMenuId = document.getElementById("menu"+no);
    olMenuId.style.height = olMenuId.children.length * olMenuId.firstElementChild.offsetHeight + "px";
}
function mlMenu(no){
    olMenuId = document.getElementById("menu"+no);
    olMenuId.style.height = "0px";
}

//OCN 로고 클릭 시 이동하는 함수
function menuLogo(){
    location.href="https://ocn.cjenm.com/ko/";
}