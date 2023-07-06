<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="header" class="headerCss">
</div>
<div class="header2Base" id="yesLogin">
      <div class="header2Ad">
      		<div>
      			<span onclick="close2()">X</span>
      		</div>
      </div>  
      <div class="header2Menu">
      		<div>
      			<label>합리적인 쇼핑 베스트샵! 네이버에 베스트샵을 검색하세요!</label>
      			<ul>
      				<li>${name} 님 환영합니다</li>
      				<li onclick="logout()">로그아웃</li>
      				<li>장바구니 <em>0</em></li>
      				<li><em>마이페이지 ▼</em></li>
      				<li>고객센터 ▼</li>
      			</ul>
      		</div>
      </div> 
      <span class="headerBottom">
            <div ></div>
                    <span>
                        <form id="header2" onsubmit="doSubmit2(); return false;" >
                            <input type="text" name="pname"/>
                            <button type="submit">
                                <div></div>
                            </button>
                        </form>
                    </span>
            <div onclick="coupon2()"></div>
      </span>   
</div>
            
 <script>
 	if("${name}" !== ""){
 		document.getElementById("header").style.display = "none";
 		document.getElementById("yesLogin").style.display = "block";
 	}else{
 		document.getElementById("header").style.display = "block";
 		document.getElementById("yesLogin").style.display = "none";
 	}
 </script>