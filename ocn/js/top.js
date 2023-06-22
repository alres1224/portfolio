var data = {
    "name" : ["로그인","티빙 회원가입","이용권 구매","프로그램 검색"],
    "link" : ["./login.html","./membership.html","./coupon.html",""]
}
var topUl = document.getElementById("topUl");
var li, a;
data.name.forEach(function(a1,a2,a3){
    li = document.createElement("li");
    if(a2 == 0 || a2 == 1){
        li.setAttribute("class","logout");
    }
    if(data.link[a2] != ""){
        li.setAttribute("onclick","topC("+"'"+data.link[a2]+"'"+")");
    }
    li.textContent = a1;
    topUl.append(li);
});


function topC(no){
   location.href = no;
}