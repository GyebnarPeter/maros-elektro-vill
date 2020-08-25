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
    $("nav").slideToggle();
    $(".nav-close-btn").slideToggle();
});



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

   setTimeout(slider, 10000);
}

slider();