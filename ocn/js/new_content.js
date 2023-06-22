var newArray = {
    "black":[1,2,3,4,5],
    "color":[1,2,3,4,5],
    "name":["게임덱후들(유민상,김준현)","44층 지하던전", "켠왕켜놩(켠김에왕까지-허준)","핑거게임(신동엽, 장도연)","플레이어2 (이수근, 이진호, 이용진, 이이경, 이진호, 정혁, 황치열, 김동현)"]
}

var newUl = document.getElementById("newUl");
var newLi, newSpan;
newArray.black.forEach(function(a1,a2,a3){
    newLi = document.createElement("li");
    newUl.append(newLi);
    Object.keys(newArray).forEach(function(b1,b2,b3){
        if(b1 != "name"){
            newSpan = document.createElement("span");
            newSpan.style.backgroundImage = "url('./contents/mini"+a1+"-"+b1+".png')";
            newSpan.id = b1+a1;
            if(b1 == "black"){
                newSpan.setAttribute("onmouseenter","newMouseEnter('"+a1+"')");
            }else{
                newSpan.setAttribute("onmouseleave","newMouseLeave('"+a1+"')");
            }
            newLi.append(newSpan);
        }
        else if( b1 == "name"){
            newSpan.setAttribute("title",newArray[b1][a2]);
        }
    })
})

function newMouseEnter(id){
    document.getElementById("black"+id).style.display = "none";
    document.getElementById("color"+id).style.display = "block";
}
function newMouseLeave(id){
    document.getElementById("black"+id).style.display = "block";
    document.getElementById("color"+id).style.display = "none";
}