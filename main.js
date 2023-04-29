const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute('data-visible');
    if (primaryNav.hasAttribute("data-visible")) {
        navToggle.setAttribute("aria-expanded", true)
    }
    else {
        navToggle.setAttribute("aria-expanded", false);
    }
})

// ------------ for Carousel ---------------------------------
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);



const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(track, slides, slideWidth)

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

// track.style.transform = 'translateX(-' + slideWidth + 'px)';

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide")
}

const showArrowsToggle = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//When click left moves the slide left
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide")
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
    showArrowsToggle(slides, prevButton, nextButton, prevIndex);
})

//When click right moves the slide right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    showArrowsToggle(slides, prevButton, nextButton, nextIndex);
})


//When click the nav indicators, move to that slide

dotsNav.addEventListener("click", (e) => {
    //What indicator was clicked on
    const targetDot = e.target.closest('button'); // check the precise button is clicked or not

    if (!targetDot) return;// If button is not clicked quit the function

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    showArrowsToggle(slides, prevButton, nextButton, targetIndex);
})

// -------------------------------- for Economy Section ---------------------------------------------

let reuse=document.querySelector(".reuse-btn")
let reduce=document.querySelector(".reduce-btn")
let recycle=document.querySelector(".recycle-btn")
let cardImage=document.querySelector('.card-image');
let cardHeading=document.querySelector(".card-heading");
// console.log(recycle,reduce,reuse,cardHeading,cardImage)

reuse.addEventListener("click",(e)=>{
    e.preventDefault()
    cardHeading.innerHTML='Reuse Waste'
    cardImage.src='assests/reuse-card-image.jpg';
    reuse.style.transition="all 200ms ease-in-out";
})
reduce.addEventListener("click",(e)=>{
        e.preventDefault()
    cardHeading.innerHTML='Reducing Waste';
    cardImage.src='assests/reduce-card-image.jpg';
    reduce.style.transition="all 200ms ease-in-out";

})
recycle.addEventListener("click",(e)=>{
        e.preventDefault()
    cardHeading.innerHTML='Recycle Waste';
    cardImage.src='assests/recycle-photo.jpg';
    recycle.style.transition="all 200ms ease-in-out";

})