<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>합리적인 쇼핑 베스트샵 [BEST SHOP]</title>
</head>
<body>

</body>
<script>
	if("${msg}" === "yes"){
		alert("${array[1]} 고객님 환영합니다.");
		if("${array[2]}" === "on"){
			localStorage.setItem("cid","${array[0]}");
		}else{
			localStorage.removeItem("cid");
		}
		window.location.href = "./";
	}else{
		alert("로그인 정보를 다시 확인해주세요.");
		history.go(-1);
	}
</script>
</html>