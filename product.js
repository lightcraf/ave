    window.addEventListener("load", function () {
    var slideIndex = 1;
    showSlides(slideIndex);
    document.getElementsByClassName("prev-slide")[0].addEventListener("click", function () {
        showSlides(slideIndex += -1);
    });
    document.getElementsByClassName("next-slide")[0].addEventListener("click", function () {
        showSlides(slideIndex += 1);
    });

    function showSlides(n) {
        var slides = document.getElementsByClassName("slides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }


    document.getElementsByClassName("tab-box")[0].addEventListener("click", function(event) {
        var i, tabContent, tabLinks, tabName;

        if (event.target.className == "tab-links") {
            tabName = event.target.getAttribute("data-tab");
            tabContent = document.getElementsByClassName("tab-content");
            tabLinks = document.getElementsByClassName("tab-links");

            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
            }


            for (i = 0; i < tabLinks.length; i++) {
                tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
            }

            document.getElementById(tabName).style.display = "block";
            event.target.className += " active-tab";
        } else {
            return false;
        }
    });

    document.getElementsByClassName("tab-content")[0].style.display = "block";
});
