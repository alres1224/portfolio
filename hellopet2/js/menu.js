$(function(){

    $.ajax({
        url: "./json/qanda.json",
        cache: false,
        type: "get",
        dataType: "json",
        success: function (data) {
            $.fn.qst(data);
        },
        error: function () {
            console.log("통신오류");
        }
    })

    $.fn.qst = function(n){
        $.each(n,function(a,b){
            
            $("#Cqst").append(
                `<li><span>`+b.q_subject+" &nbsp &nbsp"+b.q_date+`</span></li>`
            )
        })
    }

    $("#Cloginbtn").click(function(){
        $(".J_loginback").css("width",document.body.offsetWidth+"px");
        $(".J_loginback").css("display","block");
    })

    $("#Cjoinbtn").click(function(){
        $("#Rjbase").css("width",document.body.offsetWidth+"px");
        $("#Rjbase").css("display","block");
    })

    $("#Clogoutbtn").click(function(){
        $(".Clogin").css("display","none");
        $(".Clogout").css("display","block");
        $("#Cfm").submit();
    })
})

// 메뉴 슬라이드 핸들링 파트
var Cmain = document.getElementById('Cmenu_main');
var ALL = document.getElementById('ALL')

var menuNum = document.body.offsetWidth

var Ccount = menuNum;
var menuMove = true;

Cmain.style.width = menuNum+"px";
Cmain.style.left = -menuNum+"px";
ALL.style.width = menuNum + "px";
function menuF(){
    var menu = requestAnimationFrame(menuF);
    Cmain.style.left = -Ccount+"px";
    if(menuMove == true){
        Ccount -= 20;
        ALL.style.display = "block";
        if(Ccount <= 0){
            Cmain.style.left = 0;
            cancelAnimationFrame(menu);
            menuMove = false;
        }
    }else{
        Ccount += 20;
        ALL.style.display = "none"
        if(Ccount > menuNum){
            cancelAnimationFrame(menu);
            menuMove = true;
        }
    }
}
