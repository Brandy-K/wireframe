// JavaScript for scroll icon animation
window.onscroll = function() {
    scrollIconAnimation();
};

function scrollIconAnimation() {
    const icon = document.getElementById("icon");
    const scrollPosition = window.pageYOffset;

    const rotationAngle = scrollPosition + "deg";

    if (scrollPosition > 0) {
        icon.style.transform = "rotate(" + rotationAngle + ")";
        icon.style.fontSize = "36px";
    } else {
        icon.style.transform = "rotate(0deg)";
        icon.style.fontSize = "24px";
    }

    icon.style.transition = "transform 0.4s ease, font-size 0.4s ease";
}


