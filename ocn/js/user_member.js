var memberCheckBtn = false; //아이디 중복체크 여부 확인용 변수

var uri = window.location.search;
if(uri == ""){
    alert("올바른 접근이 아닙니다.");
    history.go(-1);
}
//파라미터 값 가져오는 부분
var uriSplit2 = uri.split("&m_agree2=");
var m_agr2 = uriSplit2[1];
var uriSplit1 = uriSplit2[0].split("=");
var m_agr1 = uriSplit1[1];

var memberForm = document.getElementById("memberForm");
memberForm.m_agree1.value = m_agr1;
memberForm.m_agree2.value = m_agr2;

//아이디 중복체크 함수
var memberCall;
var memberId = memberForm.m_userid;
var checkId = /[\W]/g;
function memberIdCheck(){
    if(memberId.value==""){
        alert("아이디를 입력하세요");
    }else if(checkId.test(memberId.value)===true){
        alert("아이디는 알파벳 대소문자와 숫자만 사용할 수 있습니다.")
    }else if(memberId.value.length < 5){
        alert("아이디는 최소 5글자입니다.")
    }
    else{
        var xhrMember = new XMLHttpRequest();
        xhrMember.onreadystatechange = function(){
            memberCall = this.response;
            if(xhrMember.readyState == XMLHttpRequest.DONE && xhrMember.status == 200){
                memberCall = this.response;
                if(memberCall === "ok"){
                    alert("사용 가능한 아이디입니다.");
                    memberId.readOnly = true;
                    memberCheckBtn = true;
                }
                else if(memberCall === "cancel"){
                    alert("해당 아이디는 사용하실 수 없습니다.");
                }
                else if(memberCall === "error"){
                    console.log("통신오류");
                }
            }
        }
        xhrMember.open("POST","./id_check.php",true);
        xhrMember.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhrMember.send("m_userid="+memberForm.m_userid.value);
    }
}

//이메일 선택 파트
var memberEmail = memberForm.m_usermail
var memberSelect;
function memberMail(mail){
    memberSelect = document.getElementById("memberSelect");
    var indexOf = memberEmail.value.indexOf("@");
    if(mail == "" || memberEmail.value == ""){
        memberEmail.focus();
        memberSelect.value = "";
        memberEmail.value = "";
    }
    else{
        if(indexOf == -1){
            memberEmail.value = memberEmail.value + "@" + memberSelect.value;
        }
        else{
            var sp = memberEmail.value.split("@")[0];
            memberEmail.value = sp + "@" + memberSelect.value; 
        }
    }  
}


//가입취소 버튼 함수
function memberCancel(){
    window.location = "./index.html";
}

//회원가입 버튼 함수
var memberPass = memberForm.m_userpw;
var memberName = memberForm.m_usernm;
var memberTel = memberForm.m_usertel;
var checkKorean = /[ㄱ-ㅎ|가-힣|ㅏ-ㅣ]/g;
var checkT = /[^a-zA-Z가-힣]/g;
var checkNum = /\D/g;
function memberFn() {
    if(memberId.value === "" || memberId.value.length < 5){
        alert("아이디를 5자 이상 입력해주세요.");
        memberId.focus();
        memberForm.m_userid.focus();
    }else if(checkId.test(memberId.value) === true){
        alert("아이디는 알파벳 대소문자와 숫자만 사용할 수 있습니다.");
    }else if(memberPass.value === "" || memberPass.value.length < 6){
        alert("비밀번호를 6자 이상 입력해주세요.");
        memberPass.focus();
    }else if(checkKorean.test(memberPass.value) === true){
        alert("비밀번호는 알파벳 대소문자와 숫자, 특수문자만 사용할 수 있습니다.");
    }else if(memberPass.value != document.getElementById("userpwck").value){
        alert("비밀번호 확인이 다릅니다.")
    }else if(memberName.value === ""){
        alert("이름을 입력해주세요.")
        memberName.focus();
    }else if(checkT.test(memberName.value) === true || memberName.value.length < 2){
        alert("이름을 올바르게 입력해주세요.");
        memberName.focus();
    }else if(memberEmail.value === "" || memberEmail.value.indexOf("@") === -1 || checkKorean.test(memberEmail.value)===true){
        alert("이메일을 올바르게 입력해주세요.");
        memberEmail.focus();
    }else if(memberTel.value.length < 10 || checkNum.test(memberTel.value)===true){
        alert("전화번호를 올바르게 입력해주세요.");
    }else if(memberForm.m_post.value === "" || memberForm.m_road.value === "" || memberForm.m_addr.value === ""){
        alert("주소를 올바르게 입력해주세요.")
    }
    else if(memberCheckBtn === true){
         memberForm.submit();
    }else{
         alert("아이디 중복체크를 해주세요.");
    }
}

//우편번호 검색(Jquery)
$(function(){
    $("#addpost").postcodifyPopUp();
});