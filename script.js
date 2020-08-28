// NAVIGATION
$(".burger-icon").click(() => {
    $("nav").slideToggle();
    $(".nav-close-btn").slideToggle();
});

$(".nav-close-btn").click(() => {
    $("nav").slideToggle();
    $(".nav-close-btn").slideToggle();
});

$("nav a").click(() => {
    if (window.innerWidth < 768) {
        $("nav").slideToggle();
        $(".nav-close-btn").slideToggle();
    }
});

window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").classList.add("navbar-scroll");
    } else {
        document.querySelector(".navbar").classList.remove("navbar-scroll");
    }
}



// SLIDER
let imagesIndex = 0;
let images = document.getElementsByClassName("slide-page");

let slider = () => {
   for (let i = 0; i < images.length; ++i) {
       images[i].style.display = "none";
   }

   if (imagesIndex === images.length) {
       imagesIndex = 0;
   }

   images[imagesIndex].style.display = "block";
   imagesIndex++;

   setTimeout(slider, 5000);
}

slider();



//OPINIONS NAV
let opinions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
];

let comment = document.querySelector(".comment p");
let prevComment = document.querySelector(".prev-comment");
let nextComment = document.querySelector(".next-comment");

let index = 0;

comment.innerHTML = opinions[index];

nextComment.onclick = () => {

    index === opinions.length-1
        ? index = 0
        : index++;

        $(comment).animate({
            opacity: 0
        }, 500,
            function () {
                $(this).animate({
                    opacity: 1
                }, 500 );
                $(comment).html(opinions[index]);
            });
}

prevComment.onclick = () => {

    index === 0
        ? index = opinions.length-1
        : index--;
    
        $(comment).animate({
            opacity: 0
        }, 500,
            function () {
                $(this).animate({
                    opacity: 1
                }, 500 );
                $(comment).html(opinions[index]);
            });
}