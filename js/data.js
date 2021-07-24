"use strict";
// !! *********************** All Targeted Html Elements *******************************
const landing_page = document.querySelector(".landing_page");
const learn_btn = document.querySelector(".landing_link");

const feature_section = document.querySelector("#features");
const allImages = document.querySelectorAll(".features img")

const navbar_links_container = document.querySelector("#my-nav")
const navbar_container = document.querySelector(".navbar");
const navbarHeight = navbar_container.getBoundingClientRect().height;

const tabs_container = document.querySelector(".operations_btn_container");
const operation_tabs = document.querySelectorAll(".operations_btn");
const operation_content = document.querySelectorAll(".operations_val");



const allSections = document.querySelectorAll(".section");

const allSlides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left_arrow");
const rightBtn = document.querySelector(".right_arrow");
const dotsContainer = document.querySelector(".dots_container")

// !! ************************* Basic variables ************************









// !! ********************* Basic Manipulation Functions ***********************

// Todo:******** lazy loading images function ************

const fadingHoverEffect = function (e) {
    if (e.target.classList.contains("nav-link")) {
        const curr_link = e.target;
        const logo = curr_link.closest(".navbar").querySelector(".logo");
        const curr_link_sblings = curr_link.closest('.navbar').querySelectorAll(".nav-link");
        logo.style.opacity = this;
        curr_link_sblings.forEach(sib => {
            if (sib !== curr_link) {
                sib.style.opacity = this;
            }
        });

    }
}

// Todo:*********** move the slide function
const moveSlide = function (slideNo_to_go) {
    allSlides.forEach((eachSlide, i) => {
        eachSlide.style.transform = `translate(${(i-slideNo_to_go)*100}%)`;
    });
}
// Fix: ********* Function to Create Dots ************
const createDots = function (NoOfSlides) {
    for (let i = 0; i < NoOfSlides; i++) {
        const html = `<a href="#" data-slide="${i}" class="dots dot_${i} ${i===0 ? "dot_active":""}"></a>`;
        dotsContainer.insertAdjacentHTML("beforeend", html);
    }
}
createDots(allSlides.length);

// Fix: ******** Active the dot according to slide
const alldots = document.querySelectorAll(".dots");
const changeDotPosition = function (nextSlideNo) {
    alldots.forEach(dot => dot.classList.remove("dot_active"));
    alldots[nextSlideNo].classList.add("dot_active");
}