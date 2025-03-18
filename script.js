// when scroll down, change navbar background color into blur
window.onscroll = function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
};
