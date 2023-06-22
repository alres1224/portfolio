var loginId = loginForm.user_id;
var loginPass = loginForm.user_pw;
var auto = loginForm.auto;
var saveId = localStorage.getItem("userid");

if(saveId != null){
    loginId.value = saveId;
    auto.checked = true;
}

function loginSubmit(){
    if(loginId.value === ""){
        alert("아이디를 입력하세요.");
        return false;
    }else if(loginPass.value === ""){
        alert("비밀번호를 입력하세요.");
        return false;
    }else{
        if(auto.checked === true){
            localStorage.setItem("userid",loginId.value);
        }
        return true;
    }
}

function loginSave(check){
    if(check === false){
        localStorage.removeItem("userid");
    }
}

function loginReg(){
    location.href = "./membership.html";
}