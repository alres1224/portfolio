const getTitle = new XMLHttpRequest();
getTitle.onreadystatechange = function(){
	if(getTitle.readyState === XMLHttpRequest.DONE){
		if(getTitle.status === 200){
			document.title = getTitle.responseText;
		}
	}
}
getTitle.open("GET","./title.do",true);
getTitle.send();