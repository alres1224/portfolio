var Sbar = document.getElementById('Sbar');
var Sheight = 0;
var Scontrol = 'up';
var Stimer;
function searchF(){
    if(Scontrol === 'up'){
        if(Sheight < 50){
            Sheight++;
            Stimer = setTimeout(searchF);
        }else{
            Scontrol = 'down';
            clearTimeout(Stimer);
        }
    }else{
        if(Sheight >= 0){
            Sheight--;
            Stimer = setTimeout(searchF);
        }else{
            Scontrol = 'up'
            clearTimeout(Stimer);
        }
    }
    Sbar.style.height = Sheight + "px";
}

var f = document.getElementById('Sf');
function Ssubmit(){
    if(f.search_word.value !== ""){
        f.submit();
    }
}

var Sup = document.getElementById("Sup");
Sup.style.left = (document.body.offsetWidth - 60) + "px";
Sup.style.top = (window.innerHeight-60)+"px";
function ToTop(){
    window.scrollTo(0,0);
}