var learning = false;
window.addEventListener("scroll", function () {
  if (window.scrollY > 50 || learning) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

function scrollBanner(element) {
  var banner = document.getElementById("about");
  // Add the 'moved' class to trigger the animation
  banner.classList.add("moved");
  document.body.classList.add("scrolled");
  learning = true;
}
