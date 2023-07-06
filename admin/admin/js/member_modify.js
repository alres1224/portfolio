document.getElementById("cid").innerText = array[0];
document.getElementById("cname").innerText = array[1];
popup.cid.value = array[0];
popup.clvl.value = array[2];
popup.cpoint.value = array[3];
document.getElementById("coutdate").innerText = array[4];

function doConfig(){
	if(popup.clvl.value === ""){
		alert("레벨을 입력해주세요.");
	}else if(popup.cpoint.value ===""){
		alert("포인트를 입력해주세요.");
	}else if(popup.cpoint.value < 0){
		alert("포인트는 0 이상의 숫자를 입력해주세요.");
	}else if(confirm("해당 정보를 변경하시겠습니까?")){
		doPost('popup','./mod_result.do')
	}
}