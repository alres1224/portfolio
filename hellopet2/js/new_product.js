$(function () {

    $.ajax({
        url: "./json/new_pet.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (b) {
            $.fn.new_product(b)

        },
        error: function () {
            console.log("통신오류")
        }
    })
    // var productUl1 = $(`<ul class="Ymainbox2 mainboxtop"></ul>`)
    // var productUl2 = $(`<ul class="Ymainbox3 mainboxbot"></ul>`)
    $.fn.new_product = function (data2) {
        // console.log(data2)

        $.each(data2, function (a, b) {
            // console.log(a)
            if (data2[a].pet_part == "dog") {
                var productLi1 =
                    $(`<li><img src="` + data2[a].pet_img + `"><em class="Yemtag">`+data2[a].pet_title+`</em></li>`)
                $(".Ymainbox2").append(productLi1)
            }
            else if (data2[a].pet_part == "cat") {
                var productLi2 =
                    $(`<li><img src="` + data2[a].pet_img + `"><em class="Yemtag">`+data2[a].pet_title+`</em></li>`)
                $(".Ymainbox3").append(productLi2)
            }
        })
    }
    $("#Ypet2").click(function () {

        $("#Ypet2").css({
            "border-bottom": "0px"
        })
        $("#Ypet1").css({
            "border-bottom": "1px solid black"
        })
        $(".mainboxtop").css({
            "display":"none"
        })
        $(".mainboxbot").css({
            "display":"block"
        })
    })
    $("#Ypet1").click(function () {

        $("#Ypet1").css({
            "border-bottom": "0px"
        })
        $("#Ypet2").css({
            "border-bottom": "1px solid black"
        })
        $(".mainboxbot").css({
            "display":"none"
        })
        $(".mainboxtop").css({
            "display":"block"
        })
    })

})

