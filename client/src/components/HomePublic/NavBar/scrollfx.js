function scrollTopHeader() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector(".topHeader"),
            logoSncf = document.querySelector(".logoHeader");
        if (distanceY < shrinkOn) {
            header.classList.remove("topHeaderMini");
            header.classList.add("topHeader");
            logoSncf.classList.remove("logoHeaderMini")
         } 

        else if (distanceY > shrinkOn) {
            header.classList.add("topHeaderMini");
            logoSncf.classList.add("logoHeaderMini")

         } 

    });
}

window.onload = scrollTopHeader();
