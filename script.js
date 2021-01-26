//buttons
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    const slide = document.querySelector('.active'); 
    const firstSlide = document.querySelector('.firstSlide'); //the first slide, so that we can reset the slider
    
    slide.classList.replace("active","inactive");

    // if the element has a nextElementSibling, we make it active. If it is the last element on our slider, we
    // reset the slider by setting the first element as active.
    if(slide.nextElementSibling){
        slide.nextElementSibling.classList.replace("inactive","active");
    } else{
        firstSlide.classList.replace("inactive", "active");
    }
});


prev.addEventListener('click', function(){
    const slide = document.querySelector('.active'); 
    const lastSlide = document.querySelector('.lastSlide'); //the last slide
    
    slide.classList.replace("active","inactive");

    // if the element has a previousElementSibling, we make it active. Otherwise, we set the last element
    // (lastSlide) of our content as active.
    if(slide.previousElementSibling){
        slide.previousElementSibling.classList.replace("inactive","active");
    } else{
        lastSlide.classList.replace("inactive", "active");
    }
});