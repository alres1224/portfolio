const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === XMLHttpRequest.DONE){
		if(xhr.status === 200){
			noticeData(JSON.parse(xhr.response));
		}
	}
}
xhr.open("POST","./callNotices.do",true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send();

function noticeData(array){
	// console.log(array);
	const container = document.getElementById("noticeContainer");
	const pages = document.querySelector(".noticeListPage");
	
	let ul, li;
	let count = Object.keys(array).length - 1;
	for(let i = 0; i < (Object.keys(array).length-1); i++){
		ul = document.createElement("ul");
		ul.setAttribute("class","noticeListUl noticeListData")
		array["noticeData"+i].forEach(function(a,i2){
			li = document.createElement("li");
			if(i2 === 0){
				li.innerText = count;
				count--;
			}else if(i2 === 1){
				li.setAttribute("onclick","movePage("+array["noticeData"+i][0]+")")
				li.innerText = a;
			}
			else{
				li.innerText = a;
			}
			ul.append(li);
		});
		container.append(ul);
	}
	
	let li2;
	for(let i = 1; i <= array['pageEA']; i++){
		li2 = document.createElement("li");
		li2.innerText = i;
		pages.append(li2);
	}
}

const form = document.querySelector("#notice_list");
function movePage(idx){
	form.nidx.value = idx;
	form.method = "post";
	form.action = "./notice_view.do";
	form.submit();
}

const searchBtn = document.querySelector("#noticeListSearch");
searchBtn.addEventListener("click",function(){
	const search = new XMLHttpRequest();
	search.onreadystatechange = function(){
		if(search.readyState === XMLHttpRequest.DONE){
			if(search.status === 200){
				console.log(JSON.parse(search.response));
			}
		}
	}
	search.open("POST","./notice_search.do",true);
	search.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	search.send("nsubject="+form.nsubject.value);
});