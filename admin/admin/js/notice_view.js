document.getElementById("delete").addEventListener("click",()=>{
	if(confirm("공지를 삭제하시겠습니까?")){
		doPost('notice_view','./notice_delete.do');
	}
});