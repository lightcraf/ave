    var slideIndex = 1;
    showSlides(slideIndex);
    document.getElementsByClassName("prev")[0].addEventListener("click", function () {
        showSlides(slideIndex += -1);
    });
    document.getElementsByClassName("next")[0].addEventListener("click", function () {
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

    document.getElementsByClassName("tab")[0].addEventListener("click", openTab);

    function openTab(event) {
        var i, tabcontent, tablinks, tabName;
        tabName = event.target.getAttributeNode("data-tab").value;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        event.target.className += " active";
    }

    document.getElementsByClassName("tabcontent")[0].style.display = "block";
