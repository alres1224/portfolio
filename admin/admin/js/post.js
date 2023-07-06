function doPost(formId,url){
	let ids = document.getElementById(formId);
	ids.method = "post";
	ids.action = url;
	ids.submit();
}
