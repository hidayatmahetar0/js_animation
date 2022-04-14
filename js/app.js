function reveal() {
    var reveals = document.querySelectorAll(".hero .content");
    var reveals1 = document.querySelectorAll(".txt");
    var reveals3 = document.querySelectorAll(".txt");
    var reveals4 = document.querySelectorAll(".hero .mobile-fragment img ");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            reveals1[i].classList.add("active");
            reveals3[i].classList.add("height");
            reveals4[i].classList.add("active3");
        } else {
            reveals[i].classList.remove("active");
            reveals1[i].classList.remove("active");
            reveals3[i].classList.remove("height");
            reveals4[i].classList.remove("active3");
        }
    }
}

window.addEventListener("scroll", reveal);




// text Animation
// find the top of each section
var sectionA = $(".txt").offset().top;
var scrollOffset = 100;
// run this function when the window scrolls
$(window).scroll(function() {
    var scroll = $(window).scrollTop() + scrollOffset;
    if (scroll > sectionA) {
        $(".txt ").addClass("active");
    }
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".circle img").css({
        transform: "translate3d(-30%, -" +
            scroll / 100 +
            "%, 0) scale(" +
            (220 + scroll / 5) / 200 +
            ")",
    });
});


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});