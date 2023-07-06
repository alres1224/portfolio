// 공백 검증 함수
function ifVoid(data, msg){
	if(data.value === ""){
		alert(msg + "을(를) 입력해주세요.");
		return true;
	}else{
		return false;
	}
}

// 공지 수정 함수
function doMod(){
	if(ifVoid("notice_modify.nsubject","공지사항 제목")){}
	else if(ifVoid("notice_modify.nwriter","글쓴이")){}
	else if(ifVoid("notice_modify.ntext","공지내용")){}
	else{
		doPost('notice_modify','./notice_modify_ok.do');
	}
}