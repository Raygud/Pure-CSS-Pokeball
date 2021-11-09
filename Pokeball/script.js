let Upper = document.getElementById("UpperBall")
let Glow = document.getElementById("Glow")
let wHoStHatPokeMon = document.getElementById("wHosThAtPokeMon") 

function WhOsThAtPoKEmOn(){
setTimeout(function(){ Upper.classList.add("UpperAni") }, 200);
setTimeout(function(){ Glow.classList.add("Glow") }, 500);
setTimeout(function(){ wHoStHatPokeMon.style.marginTop = "0";
}, 550);
setTimeout(function(){ wHoStHatPokeMon.src = "/kiki" + 1 + ".png";
}, 900);

}
