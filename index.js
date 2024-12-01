const left = document.querySelectorAll(".left__arrow");
const right = document.querySelectorAll(".right__arrow");
const slider = document.querySelector(".cird__box");
const cird = document.querySelectorAll(".cird");

let sliderNumber = 1;
const length = cird.length;


const nextslider = () => {
    slider.style.transform = `translateX(-${sliderNumber * 302}px)`;
    sliderNumber++;
}

const prevslider = () => {
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 302}px)`;
    sliderNumber--;
}

const getfristslide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

const getlastslide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 302}px)`;
    sliderNumber = length;
}
left.forEach((button) => {
    button.addEventListener("click", () => {
        sliderNumber > 1 ? prevslider() : getlastslide();
    })
});

right.forEach((button) => {
    button.addEventListener("click", () => {
        sliderNumber < length ? nextslider() : getfristslide();
    })
});

//faq script start

let top1 = document.querySelector(".faq__top1");
let ans1 = document.querySelector(".faq__ans1");
let icon1 = document.querySelector(".icon1");


top1.addEventListener("click", () => {
    ans1.classList.toggle("active");
    icon1.classList.toggle("active");
} )
let top2 = document.querySelector(".faq__top2");
let ans2 = document.querySelector(".faq__ans2");
let icon2 = document.querySelector(".icon2");


top2.addEventListener("click", () => {
    ans2.classList.toggle("active");
    icon2.classList.toggle("active");
} )
let top3 = document.querySelector(".faq__top3");
let ans3 = document.querySelector(".faq__ans3");
let icon3 = document.querySelector(".icon3");


top3.addEventListener("click", () => {
    ans3.classList.toggle("active");
    icon3.classList.toggle("active");
} )
let top4 = document.querySelector(".faq__top4");
let ans4 = document.querySelector(".faq__ans4");
let icon4 = document.querySelector(".icon4");


top4.addEventListener("click", () => {
    ans4.classList.toggle("active");
    icon4.classList.toggle("active");
} )
let top5 = document.querySelector(".faq__top5");
let ans5 = document.querySelector(".faq__ans5");
let icon5 = document.querySelector(".icon5");


top5.addEventListener("click", () => {
    ans5.classList.toggle("active");
    icon5.classList.toggle("active");
} )
let top6 = document.querySelector(".faq__top6");
let ans6 = document.querySelector(".faq__ans6");
let icon6 = document.querySelector(".icon6");


top6.addEventListener("click", () => {
    ans6.classList.toggle("active");
    icon6.classList.toggle("active");
} )
let top7 = document.querySelector(".faq__top7");
let ans7 = document.querySelector(".faq__ans7");
let icon7 = document.querySelector(".icon7");


top7.addEventListener("click", () => {
    ans7.classList.toggle("active");
    icon7.classList.toggle("active");
} )
let top8 = document.querySelector(".faq__top8");
let ans8 = document.querySelector(".faq__ans8");
let icon8 = document.querySelector(".icon8");


top8.addEventListener("click", () => {
    ans8.classList.toggle("active");
    icon8.classList.toggle("active");
} )

