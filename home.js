const bandeaux = document.querySelectorAll(".main_container .bandeau");
const bandeauxContainer = document.querySelector(".main_container");
const bandeauxH1 = document.querySelector(".main_container .h1");
const bande_cachante = document.querySelector(".bande_cachante");
const img_droite = document.querySelector(".img_droite");

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(changeBandeau, 1000);
    setTimeout(changeH1, 2300);
    setTimeout(return_bande_cachante, 4000);
    setTimeout(translate_img, 5000);

});

function changeBandeau() {
    let n = 0
    bandeaux.forEach((bandeau) => {
        if (n % 2 == 0) {
            bandeau.style.marginTop = "100vh";
            n += 1
        } else {
            n = 0
        }
        bandeau.style.height = 0;
    })
}

function changeH1() {
    bandeaux.forEach((bandeau) => bandeau.style.display = "none");
    bandeauxH1.style.display = "block";
    bandeauxContainer.style.alignItems = "center";
    bandeauxH1.style.height = "60px";
    setTimeout(function () {
        bandeauxH1.style.marginTop = "0";
    }, 500);
}

function return_bande_cachante() {
    bande_cachante.style.height = 0;
}

function translate_img() {
    img_droite.style.transform = "translateX(0)";
}

