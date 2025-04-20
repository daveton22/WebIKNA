// when scroll down, change navbar background color into blur
window.onscroll = function () {
  var nav = document.querySelector("nav");
  var dropdownMenu = document.querySelector(".dropdown-menu");

  if (window.scrollY > 10) {
    nav.classList.add("scroll");
    dropdownMenu.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
    dropdownMenu.classList.remove("scroll");
  }
};

// when hover kegiatan, rotate the arrow icon
document.querySelector(".dropdown").addEventListener("mouseover", () => {
  document.querySelector(".fa-caret-left").style.transform = "rotate(-90deg)";
});

document.querySelector(".dropdown").addEventListener("mouseout", () => {
  document.querySelector(".fa-caret-left").style.transform = "rotate(0deg)";
});

// make me a javascript autoslide image using setInterval
var counter = 1;
setInterval(() => {
  var firstImage = document.querySelector(".first");
  if (counter === 1) {
    firstImage.style.marginLeft = "0%";
  } else if (counter === 2) {
    firstImage.style.marginLeft = "-20%";
  } else if (counter === 3) {
    firstImage.style.marginLeft = "-40%";
    counter = 0; // Reset counter after the last slide
  }
  counter++;
}, 5000);
