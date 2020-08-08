window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hide");

    let erSkjult = document.querySelector("#menu").classList.contains("hide");

    if (erSkjult == true) {
        //        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector(".menuknapicon").src = "billeder/burgermenuicon.svg"
    } else {
        //        document.querySelector("#menuknap").textContent = "X";
        document.querySelector(".menuknapicon").src = "billeder/luk_icon.svg"
    }

}

$('.logo').hover(
    function () {
        $('.nameFull').removeClass('hiddenn');
    },
    function () {
        $('.nameFull').addClass('hiddenn');
    }
);


// carousel aka slideshow
let slideIndex = 0;
let i;
let x = document.querySelectorAll(".mySlides");
let xx = document.querySelectorAll(".mobilSlides");

carousel();


function carousel() {
    // henholdvis ændre display modes for at vise nyt billede
    // fungere lidt som et array hvor der brugges ++ for at target det enkelte billede
    /*    for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";
       }
      slideIndex++;
      */

    /*------- Desktop -------*/

    if (slideIndex > x.length - 1) {
        slideIndex = 0;
    }
    x.forEach(billede => {
        billede.style.display = "none";
    })

    x[slideIndex].style.display = "block";
    slideIndex++
    // skifter display mode hvert andet sekundt
    setTimeout(carousel, 2000);
    /*------- Desktop Slut-------*/

}
