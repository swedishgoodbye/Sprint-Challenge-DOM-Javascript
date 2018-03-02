let slideIndex = 1;

class Slide{

slideOrder(slideIndex)

nextSlide(n){
    slideOrder(slideIndex += n);
}

currentSlide(n) {
slideOrder(slideIndex)
}

slide(n){
    let i;
    let slides = document.getElementsByClassName("Carousel__item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].classList.remove("Carousel__item-focused");
    }
    slides[slideIndex-1].classList.add("Carousel__item-focused")
} 

clicker(element){
    let left = document.getElementsByClassName("Carousel__arrow-left");
    let right = document.getElementsByClassName("Carousel__arrow-right")

    left.addEventListener("click", (event) => {
        this.nextSlide(-1);
    })

    right.addEventListener("click", (event) => {
        this.nextSlide(1);
    })
}

}



// class Carousel {

//     toArray(){
//         carousels.maph
//     }

// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));