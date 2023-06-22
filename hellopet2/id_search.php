<?php
include "./dbinfo.php";
?>
<?php
$mid = str_replace(" ","",$_POST['m_id']);
$msg = "";

if($mid==""){
    $msg = "error";
}
else{
    $sqls = "select * from m_member where mid='$mid'";
    $querys = mysqli_query($connect,$sqls);
    $rows = mysqli_num_rows($querys);
    if(!$rows){
        $msg = "idok";
    }
    else{
        $msg = "idno";
    }
}
echo urldecode($msg);
?>