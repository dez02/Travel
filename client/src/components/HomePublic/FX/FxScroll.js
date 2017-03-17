function FxScroll() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            logoBet = document.querySelector(".logoBet")
        if (distanceY < shrinkOn) {
            logoBet.classList.add("fadeOutUp");
            console.log("hello")
         } 

        else if (distanceY > shrinkOn) {
            // header.classList.add("topHeaderMini");
            // logoSncf.classList.add("logoHeaderMini")

         } 

    });
}

window.onload = FxScroll();