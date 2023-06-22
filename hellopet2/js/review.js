$(function () {

    $.ajax({
        url: "./json/review.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (b) {
            $.fn.review(b)

        },
        error: function () {
            console.log("통신오류")
        }
    })
    $.fn.review = function (data) {

        $.each(data.reviews, function (a, b) {
            var reviewSpan2 = $(`<li>` + data.reviews[a] + `</li>`)
            $(".YuserReview").append(reviewSpan2)
        })
        $(".YuserReview > li").each(function() {
            var text = $(this).text(); 
            var shortenedText = text.substr(0, 20) + "...";
            $(this).text(shortenedText); 
        });



        /*리뷰 핸들링 파트*/

        var ea = $(".YuserReview > li").length
        var timer = 0;
        var listheight = $(".YuserReview > li").height();
        var totalheight = listheight * ea
        // console.log(totalheight) 250 (개당50)
        $(".YuserReview").css({
            "height": -totalheight + "px"
        })
    
        $.fn.newslist = function () {
    
            $(".YuserReview").animate({
                "top": -listheight + "px"
            }, 800, function () {
                var copy = $(".YuserReview > li").eq(0).clone();
                $(".YuserReview > li").eq(0).remove();
                $(".YuserReview").append(copy)
                $(".YuserReview").css({
                    "top": 0
                })
            })
            timer = setTimeout($.fn.newslist, 3000)
        }
        timer = setTimeout($.fn.newslist, 3000)
    
        $(".YuserReview > li").bind({
            "mouseenter": function () {
                clearTimeout(timer);
            },
            "mouseleave": function () {
                timer = setTimeout($.fn.newslist, 3000)
            }
        }) 
    }
})