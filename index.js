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
  var underBanner = document.getElementById("underBanner");
  // Add the 'moved' class to trigger the animation
  banner.classList.remove("unmove");
  banner.classList.add("moved");
  underBanner.classList.add("show");
  document.body.classList.add("scrolled");
  learning = true;
}

function unmove() {
  var banner = document.getElementById("about");
  // Add the 'moved' class to trigger the animation
  banner.classList.remove("moved");
  banner.classList.add("unmove");
  document.body.classList.remove("scrolled");
  learning = false;
}
