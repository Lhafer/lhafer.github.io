window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});
const colorChangeButton = document.getElementById('colorChangeButton');

colorChangeButton.addEventListener('click', function () {
    // Add a class to change the button's color
    colorChangeButton.classList.add('clicked');
});
