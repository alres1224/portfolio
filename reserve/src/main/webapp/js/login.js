const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click",()=>{
	login.method = "post";
	login.action = "./part1.do";
	login.submit();
});