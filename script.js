//  Progress Bar Start

const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", function () {
  
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + "%";
});

//  Progress Bar End