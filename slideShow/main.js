let slideIndex = 0;
showSlide(slideIndex)


function plusSlide(n){
    showSlide(slideIndex += n);
}

function currentSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");
    if(slideIndex < 0){slideIndex = slides.length-1}
    slideIndex = Math.abs(slideIndex) % 4;
    // console.log(slideIndex)
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(let i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

}