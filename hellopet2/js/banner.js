var rbnul = document.getElementById("rbnul");
var Rop = 1;
var Rcount = 0;
var Rea = rbnul.children.length;
function RfadeIn(){
        if(Rop > 0){
            Rop -= 0.01;
            rbnul.children[Rcount].style.opacity = Rop.toFixed(2);
            if(Rcount != 2){
                rbnul.children[Rcount+1].style.opacity = 1-Rop.toFixed(2);
            }else{
                rbnul.children[0].style.opacity = 1-Rop.toFixed(2);
            }
            setTimeout(RfadeIn,20);
        }else{
            Rop = 1;
            Rcount++;
            if(Rcount >= Rea){
                Rcount = 0;
            }
            setTimeout(RfadeIn,5000)
        }
}
setTimeout(RfadeIn,5000);