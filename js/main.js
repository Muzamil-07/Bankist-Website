"use strict";


// !! ************************* Basic variables ************************








// !! ********************* DOM Manipulation Functions ***********************


// FIX: ************** Event on Modal close button
document.querySelector(".close").addEventListener("click", function (e) {
    e.preventDefault();
});

// Fix: *********** Add Cookies element Function
const msg = document.createElement("div");
const addCookies = function () {
    msg.classList.add("mx-auto", "cookies_msg");
    msg.innerHTML = ` We use cookies for better performance and analytics. <button class="cookies_btn">Got it!</button>`;
    landing_page.append(msg);
}
addCookies();

// Fix: *********** remove Cookies element Function
const cookies_btn = document.querySelector(".cookies_btn");
cookies_btn.addEventListener("click", function () {
    msg.remove();
});

// FIX: ********** smoth scroll on learn_more link
learn_btn.addEventListener("click", function (e) {
    e.preventDefault();
    feature_section.scrollIntoView({
        behavior: "smooth"
    });
});

// FIX: ********** smoth scroll on navigation links
navbar_links_container.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav_options")) {
        const id_selector = e.target.getAttribute("href");
        document.querySelector(id_selector).scrollIntoView({
            behavior: "smooth"
        });
    }
});

// Fix: ************* Tab Component
tabs_container.addEventListener("click", function (e) {
    e.preventDefault();

    const currTab = e.target;
    if (currTab.classList.contains("operations_btn")) {
        operation_tabs.forEach(eachTab => eachTab.classList.remove("active"));
        currTab.classList.add("active");

        operation_content.forEach(eachContent => eachContent.classList.add("hidden"));
        document.querySelector(`.val_${currTab.dataset.tab}`).classList.remove("hidden");
    }

});

// FIx: ************ Fading in/out nav links effect 
navbar_container.addEventListener("mouseover", fadingHoverEffect.bind(0.5));
navbar_container.addEventListener("mouseout", fadingHoverEffect.bind(1));

// Fix: ************* Sticky Nav bar implementation
const obsCallBack = function (entries, observer) {
    const [entity] = entries;
    if (!entity.isIntersecting) navbar_container.classList.add("sticky-top");
    else navbar_container.classList.remove("sticky-top");

}
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: `-${navbarHeight}px`,
}

const LandingPageObserver = new IntersectionObserver(obsCallBack, obsOptions);
LandingPageObserver.observe(landing_page);




// Fix: ************* Scaling-in sections animation implementation

const secCallback = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section_hidden");
    observer.unobserve(entry.target);
}
const secOptions = {
    root: null,
    threshold: 0.15,
}

const sectionObserve = new IntersectionObserver(secCallback, secOptions);
allSections.forEach(section => {
    sectionObserve.observe(section);
})



// Fix: *************** Lazy loading Images Implementation
const imgCallBack = function (entries, obserevr) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("blur_img");
    })
    obserevr.unobserve(entry.target);
}
const imgOptions = {
    root: null,
    threshold: 0,
    rootMargin: "150px"
}

const imgObserver = new IntersectionObserver(imgCallBack, imgOptions);
allImages.forEach(img => imgObserver.observe(img));


// Fix: ************* Slider Implementation
let currSlide = 0;
let maxNoOfSlides = allSlides.length;

moveSlide(0);

const moveToNext = function (e) {

    if (currSlide === maxNoOfSlides - 1) currSlide = 0;
    else currSlide++;
    moveSlide(currSlide);
    changeDotPosition(currSlide);
}
const moveToPrevious = function (e) {

    if (currSlide === 0) currSlide = maxNoOfSlides - 1;
    else currSlide--;
    moveSlide(currSlide);
    changeDotPosition(currSlide);
}
rightBtn.addEventListener("click", moveToNext);
leftBtn.addEventListener("click", moveToPrevious);

// Fix: ************ Left/Right arrow key events for slider movements
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") moveToPrevious();
    if (e.key === "ArrowRight") moveToNext();
})


// fix: ******* Dots movement of slide *********
dotsContainer.addEventListener("click", function (e) {
    e.preventDefault()
    if (!e.target.classList.contains("dots")) return;

    const clickedDot = e.target;
    const slideNoToGo = clickedDot.dataset.slide;
    moveSlide(slideNoToGo);
    changeDotPosition(Number(slideNoToGo));
    currSlide = Number(slideNoToGo);

});