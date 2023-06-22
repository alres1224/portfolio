var agreeForm = document.getElementById("agreeForm");
var agreeInputs = agreeForm.getElementsByTagName("input");

var agreeW, agreeCounter = 0;
//전체 동의 체크박스 핸들링 함수
function agreeAll(type){
    agreeW = 0;
    while(agreeW < agreeInputs.length){
        if(agreeInputs[agreeW].type == "checkbox" && agreeInputs[agreeW].value != "all"){
            agreeInputs[agreeW].checked = type;
        }
        agreeW++;
    }
}

//약관 출력 함수
var agreeText = function(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    return xhr.response;
}
function agreeBox(){
    document.getElementById("agreeBox1").innerText = agreeText("./agree1.txt");
    document.getElementById("agreeBox2").innerText = agreeText("./agree2.txt");
}
agreeBox();

//다음단계 버튼 함수
function agreeNext(){
    if(agreeForm.m_agree1.checked == true && agreeForm.m_agree2.checked == true){
        agreeForm.submit();
    }else{
        alert("모든 필수 약관에 동의해주세요");
    }
}