var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                Rdata(JSON.parse(this.response));
        }
}
xhr.open("GET","./json/best_product.json",true);
xhr.send();

function Rdata(array){
    //console.log(array.best_product);
    /*
    product_nm | product_img | product_sample | product_money
    출력 형태: 사진-이름-설명-가격
    */

    var ea = array.best_product.length;
    var Rbestul = document.getElementById("Rbestul");
    var Rli, Rspan, Rdiv, Rlabel;
    var RliWidth = Rbestul.offsetWidth;
    array.best_product.forEach(function(a1,a2,a3){
        Rli = document.createElement("li");
        Rli.setAttribute("class","clear");
        Rspan = document.createElement("span");
        Rdiv = document.createElement("div")
        Rli.append(Rspan);
        Rli.append(Rdiv);
        Rbestul.append(Rli);
        Object.keys(array.best_product[0]).forEach(function(b1,b2,b3){
            if(b1 == "product_img"){
                Rspan.style.backgroundImage = "url("+array.best_product[a2][b1]+")";
            }else{
                Rlabel = document.createElement("label");
                Rlabel.append(array.best_product[a2][b1]);
                Rdiv.append(Rlabel);
            }
        });
    });
}