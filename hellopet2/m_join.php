<meta charset="UTF-8">
<?php
include "./dbinfo.php";
?>
<?php
    $agree1 = $_POST['agree1'];
    $agree2 = $_POST['agree2'];
    $agree3 = $_POST['agree3'];
    $m_id = $_POST['m_id'];
    $m_pw = $_POST['m_passwd'];
    $m_nm = $_POST['m_name'];
    $m_hp = $_POST['m_hp'];
    $m_email = $_POST['m_email'];
    $security = $_POST['m_security'];
    $indate = date("Y-m-d H:i:s");

    if($m_nm=="" || $security=="" || $agree1=="" || $agree2=="" || $agree3=="" || $m_id=="" || $m_pw=="" || $m_hp=="" || $m_email==""){
        echo("<script>alert('올바른 접근이 아닙니다.'); history.go(-1);</script>");
    }
    else{
        if($security=="hellopet"){
            if($agree1=="Y" && $agree2=="Y" && $agree3=="Y"){
                if(strlen($m_pw) < 5){
                    echo("<script>alert('패스워드 정책이 잘못 되었습니다.'); history.go(-1);</script>");        
                }
                else{
                    if(strlen($m_hp) < 10){
                        echo("<script>alert('올바른 연락처가 아닙니다.'); history.go(-1);</script>");        
                    }
                    else{
                        if(strpos($m_email,"@")){
                            if(strpos($m_hp,"-")){
                                echo("<script>alert('정상적인 휴대폰 번호가 아닙니다.'); history.go(-1);</script>");    
                            }
                            else{
                            $pw = base64_encode($m_pw);
                            $sql = "insert into m_member (midx,mid,mpass,mname,memail,mtel,mindate) values ('0','$m_id','$pw','$m_nm','$m_email','$m_hp','$indate')";
                            $querys = mysqli_query($connect,$sql);
                            if($querys==true){
                                echo("<script>alert('회원가입이 완료 되었습니다.'); location.href='./index.html';</script>");    
                            }
                            else{
                                echo("<script>alert('DB저장 실패'); history.go(-1);</script>");    
                            }
                            }
                        }
                        else{
                            echo("<script>alert('정상적인 email 주소가 아닙니다.'); history.go(-1);</script>");    
                        }
                    }
                }
            }
            else{
                echo("<script>alert('약관 동의 데이터가 올바르지 않습니다.'); history.go(-1);</script>");    
            }
        }
        else{
            echo("<script>alert('올바른 접근이 아닙니다.'); history.go(-1);</script>");    
        }
    }
?>