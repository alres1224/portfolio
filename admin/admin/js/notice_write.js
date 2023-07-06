
// 체크박스 null 방지용 컨트롤 파트
const nck = document.querySelector("#nck");
nck.addEventListener("click",function(){
	if(this.checked){
		document.getElementById("nck2").checked = false;
	}else{
		document.getElementById("nck2").checked = true;
	}
})


const nw = document.querySelector("#notice_write");
function doReg(){
	
	if(ifVoid(nw.nsubject, "공지사항 제목")){}
	else if(ifVoid(nw.nwriter,"글쓴이")){}
	else if(CKEDITOR.instances.ckeditor.getData() ==''){
			alert("내용을(를) 입력해주세요.");
	}
	else{
		nw.method = "post";
		nw.action = "./notice_upload.do";
		nw.enctype = "multipart/form-data";
		nw.submit();
	}
}

function ifVoid(data, msg){
	if(data.value === ""){
		alert(msg + "을(를) 입력해주세요.");
		return true;
	}else{
		return false;
	}
}