

function Rjclose(){   
    Rjbase.style.display = "none";
}

// 전체 동의 체크박스
var Rform = document.getElementById("Rform");
function Rckall(check){
    Rform.agree1.checked = check;
    Rform.agree2.checked = check;
    Rform.agree3.checked = check;
}

//보안코드 생성
var Rsecurity = document.getElementById("Rsecurity");
var Rcod = "";
var Rw1 = 1;
while(Rw1 <= 6){
    Rcod += Math.floor(Math.random()*10).toString();
    Rw1++;
}
Rsecurity.value = Rcod;

//정규식 모음
var Rckk = /[ㄱ-ㅎ가-힣ㅏ-ㅣ]/g;
var Rckn = /[^0-9]/g;
var Rcka = /@/g;

// 중복체크 버튼
var Rmcall;
var Rmcallb = false;
function Rjbtn(){
    if(Rform.m_id.value==""){
        alert("아이디를 입력하세요.");
    }else if(Rckk.test(Rform.m_id.value)==true){
        alert("아이디에는 한글을 사용하실 수 없습니다.")
    }else{
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                Rmcall = this.response;
                if(Rmcall == "idok"){
                    alert("사용 가능한 아이디입니다.");
                    Rform.m_id.readOnly = true;
                    Rmcallb = true;
                }else if(Rmcall == "idno"){
                    alert("사용하실 수 없는 아이디입니다.");
                }else{
                    console.log("통신오류-중복체크");
                }
            }
        }
        xhr.open("POST","./id_search.php",true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("m_id=" + Rform.m_id.value);
    }
}


// 데이터 검증 함수
var Rsc = document.getElementById("Rsc");
var Rpasswd = Rform.m_passwd;
var Rpwck = document.getElementById("Rpwck");
var Rph = Rform.m_hp;
var Remail = Rform.m_email;
function Rjreg(){
    if(Rpasswd.value == ""){
        alert("비밀번호를 입력하세요.");
    }else if(Rpasswd.value.length < 5){
        alert("비밀번호는 5자 이상입니다.");
    }else if(Rpwck.value != Rpasswd.value){
        alert("비밀번호 확인을 동일하게 입력해주세요.")
    }else if(Rckn.test(Rph.value)==true){
        alert("전화번호는 숫자만 입력해주세요.");
    }else if(Rph.value.length < 10){
        alert("올바른 전화번호를 입력해주세요.");
    }else if(Remail.value == "" || Rcka.test(Remail.value) == false || Rckk.test(Remail.value == true)){
        alert("이메일을 올바르게 입력해주세요.");
    }else if(Rsc.value != Rcod){
        alert("보안코드를 확인해주세요.");
    }else if(Rmcallb == false){
        alert("아이디 중복체크를 해주세요.");
    }else if(Rform.agree1.checked == false || Rform.agree2.checked == false || Rform.agree3.checked == false){
        alert("모든 이용 약관에 동의해주세요.");
    }
    else{
        Rform.method = 'post';
        Rform.action="./m_join.php";
        Rform.submit();
    }
}