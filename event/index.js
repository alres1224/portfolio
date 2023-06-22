var menulist = document.getElementById("menulist");
var menulist_text = "영화,극장,예매,스토어,이벤트,혜택";
var text1 = menulist_text.split(",");
var mli, mli_text;

var w = 0;
while(w<text1.length){
    mli = document.createElement("li");
    mli.title = text1[w];
    mli_text = document.createTextNode(text1[w]);
    mli.append(mli_text);
    menulist.append(mli);
    w++;
}

var copyright = document.getElementById("copyright");
var copyright_text = "회사소개,IR,채용정보,광고/제휴/출점문의,이용약관,개인정보처리방침,법적고지,이메일수집거부,윤리경영,사이버감사실";
var text2 = copyright_text.split(",");
var cli, cli_text;
var f;
for(f=0;f<text2.length;f++){
    cli = document.createElement("li");
    cli.title = text2[f];
    cli_text = document.createTextNode(text2[f]);
    cli.append(cli_text);
    copyright.append(cli);
}

//공정거래위원회 API 서버 동기화 함수
function corp(no) {
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=600 height=600");
}


//이벤트 참여 정보 검증 함수
function event_() {
    var num_tel = number(frm.event_tel.value);
    var num_ticket = number(frm.event_number.value);
    if(frm.event_user.value==""){
        alert("이름을 입력해주세요.");
    }else if(frm.event_email.value==""){
        alert("이메일을 입력해주세요.");
    }else if(frm.event_tel.value=="" || frm.event_tel.value.length<10){
        alert("전화번호를 올바르게 입력해주세요.");
    }else if(num_tel=="no"){
        alert("전화번호는 숫자만 사용해 입력해주세요.");
    }else if(frm.event_number.value=="" || frm.event_number.value.length<8){
        alert("티켓 번호를 올바르게 입력해주세요.");
    }else if(num_ticket=="no"){
        alert("티켓 번호는 숫자만 사용해 입력해주세요.");
    }else if(frm.event_check.checked==false){
        alert("이용약관에 동의해주세요.");
    }else{
        frm.submit();
    }
}

//숫자 검증 함수
function number(data) {
    var str = "";
    if(isNaN(data)==true){
        str = "no";
    }else{
        str = "yes";
    }
    return str;
}

//cgv 메인 페이지 이동 함수
function cgv_main(){
    window.open("http://cgv.co.kr","width=100% height=100%");
}

//이용약관 팝업 함수
function term() {
    window.open("./term.txt","","width=300 height=300");
}