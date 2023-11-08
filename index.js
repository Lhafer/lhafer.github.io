window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

const colorChangeButton = document.getElementsByTagName("colorChangeButton");
colorChangeButton.addEventListener("click", function () {
    // Add a class to change the button's color
    body.colorChangeButton.classList.add("clicked");
});
