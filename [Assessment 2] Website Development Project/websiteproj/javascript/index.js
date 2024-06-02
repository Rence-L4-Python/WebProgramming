// code from w3schools.com
let slideIndex = 1; // declaring slideIndex variable; this is the current slide in the slideshow gallery
showSlides(slideIndex); // using the showSlides function with the current slide number
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i; // declaring i variable
    let slides = document.getElementsByClassName("slides"); // slides variable is the "slides" class in html
    let activedot = document.getElementsByClassName("dot"); // activedot variable is the "dot" class in html("dots" is a container for alignment)
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < activedot.length; i++){
        activedot[i].className = activedot[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    activedot[slideIndex-1].className += " active";
}