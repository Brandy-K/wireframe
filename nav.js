window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "20px 10px";
  } else {
    document.getElementById("nav").style.padding = "30px 10px";
  }
}
