let active1 = document.querySelectorAll("nav ul li a");
active1.forEach(function (ele) {
    ele.onclick = function () {
        active1.forEach(function (ele) {
            ele.classList.remove("active")
        });
        this.classList.add("active")
    };
});

let up = document.querySelector(".up");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
}
up.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }
    )
}