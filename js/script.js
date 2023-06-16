$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        infinite: false,
        waitForAnimate: true,
    });
    $(".fifth_block_slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        waitForAnimate: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1018,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".ninth_block_slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        waitForAnimate: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1067,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 814,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".spoiler_title").click(function(event){
        if ($(".footer_container").hasClass("one")){
            $(".spoiler_title").not($(this)).removeClass("active");
            $(".spoiler_text").not($(this).next()).slideUp(300);
        };
        $(this).toggleClass("active").next().slideToggle(300);
    });
    $(".menu_burger_spoiler").click(function(event){
        event.preventDefault();
        $(this).toggleClass("active").next().slideToggle(300);
    });
    $(".header_part_2_spoiler").mouseover(function(event){
        $(this).next().toggleClass("active").show();
        const itemArrow = document.querySelector(".menu_item_arrow");
        itemArrow.classList.toggle("active");
        let menuHeight = $(".menu_sublist").height();
        let height = 128;
        const firstBlock = document.querySelector(".first_block");
        let firstBlockMargin = getComputedStyle(firstBlock);
        let marginTop = parseInt(firstBlockMargin.margin);
        let marginDown = menuHeight - height;
        firstBlock.style.marginTop = String(marginDown + 100) + "px";
    });
    $(".header_part_2_spoiler").mouseout(function(event){
        $(this).next().toggleClass("active").hide();
        const itemArrow = document.querySelector(".menu_item_arrow");
        itemArrow.classList.toggle("active");
        let menuHeight = $(".menu_sublist").height();
        let height = 128;
        const firstBlock = document.querySelector(".first_block");
        let firstBlockMargin = getComputedStyle(firstBlock);
        let marginTop = parseInt(firstBlockMargin.margin);
        let marginDown = menuHeight + height;
        firstBlock.style.marginTop = "96px";
    });
    $(".menu_sublist").mouseover(function(event){
        let menuHeight = $(".menu_sublist").height();
        let height = 128;
        const firstBlock = document.querySelector(".first_block");
        let firstBlockMargin = getComputedStyle(firstBlock);
        let marginTop = parseInt(firstBlockMargin.margin);
        let marginDown = menuHeight - height;
        firstBlock.style.marginTop = String(marginDown + 100) + "px";
    });
    $(".menu_sublist").mouseout(function(event){
        let menuHeight = $(".menu_sublist").height();
        let height = 128;
        const firstBlock = document.querySelector(".first_block");
        let firstBlockMargin = getComputedStyle(firstBlock);
        let marginTop = parseInt(firstBlockMargin.margin);
        let marginDown = menuHeight + height;
        firstBlock.style.marginTop = "96px";
    });
});

const text = document.querySelector(".text");
let browser = "";
let textFilter = getComputedStyle(text);
let filter = textFilter.backdropFilter;

if (filter == null){
    browser = "Safari";
} else{
    browser = "Chrome";
};

let arr_slides = document.querySelectorAll(".slider_item");
const slider = document.querySelectorAll(".slider");
const firstDigit = document.querySelector(".first_digit");
const secondDigit = document.querySelector(".last_digit");
const sliderDigits = document.querySelector(".slider_digits_container");

if (arr_slides.length < 10){
    let last_digit = "0" + String(arr_slides.length);
    secondDigit.innerHTML = last_digit;
} else{
    let last_digit = String(arr_slides.length);
    secondDigit.innerHTML = last_digit;
}

for (let index = 0; index < arr_slides.length; index++){
    let number = index;
    number = String(number);
    arr_slides[index].setAttribute("id", number);
};

$(".slider").on("afterChange", function(event){
    for (let index = 0; index < arr_slides.length; index++){
        if (arr_slides[index].classList.contains("slick-current")){
            let id = arr_slides[index].id;
            if (id.slice(-2)[0] == "0"){
                let digit = Number(id.slice(-2)[1]) + 1;
                if (digit == 10){
                    digit = String(digit);
                    firstDigit.innerHTML = digit;
                } else{
                    digit = "0" + String(digit);
                    firstDigit.innerHTML = digit;
                }
            } else{
                let digit = Number(id.slice(-2)) + 1;
                digit = String(digit);
                firstDigit.innerHTML = digit;
            };
        };
        if (firstDigit.textContent.toLowerCase() == secondDigit.textContent.toLowerCase()){
            secondDigit.classList.add("white");
        } else{
            secondDigit.classList.remove("white");
        };
    };
});

if (arr_slides.length > 5 && arr_slides.length < 11){
    let difference = arr_slides.length - 5;
    for (let index = 0; index < difference; index++){
        let sliderDigitsMargin = getComputedStyle(sliderDigits);
        let margin = parseInt(sliderDigitsMargin.marginLeft);
        margin += 55;
        sliderDigits.style.marginLeft = String(margin) + "px";
    };
};

if (arr_slides.length >= 11){
    sliderDigits.style.marginLeft = "330px";
};

const redStrings = document.querySelectorAll(".red_string");
const items_2 = document.querySelectorAll(".third_block_container_2_item");

for (let index = 0; index < items_2.length; index++){
    items_2[index].style.display = "none";
};

window.addEventListener("resize", function(event){
    let windowWidth = window.innerWidth;
    if (windowWidth > 1357){
        if (arr_slides.length > 5 && arr_slides.length < 11){
            let difference = arr_slides.length - 5;
            for (let index = 0; index < difference; index++){
                let sliderDigitsMargin = getComputedStyle(sliderDigits);
                let margin = parseInt(sliderDigitsMargin.marginLeft);
                margin += 55;
                sliderDigits.style.marginLeft = String(margin) + "px";
            };
        };
        if (arr_slides.length >= 11){
            sliderDigits.style.marginLeft = "330px";
        };
    } else{
        if (arr_slides.length >= 11){
            let sliderDigitsMargin_2 = getComputedStyle(sliderDigits);
            let margin_2 = parseInt(sliderDigitsMargin_2.marginLeft);
            margin_2 -= 1;
            sliderDigits.style.marginLeft = String(margin_2) + "px";
            if (windowWidth == 1268){
                margin_2 = 200;
                sliderDigits.style.marginLeft = String(margin_2) + "px";
            };
        };
    };
    if (windowWidth < 680){
        if (redStrings.length > 0){
            for (let index = 0; index < redStrings.length; index++){
                redStrings[index].remove();
            };
        };
    };
});

const menuBurger = document.querySelector(".menu_burger");
const menuBurgerContainer = document.querySelector(".menu_burger_container");
const closeMenu = document.querySelector(".menu_close");
const Body = document.querySelector("Body");
const wrapper = document.querySelector(".wrapper");

menuBurger.addEventListener("click", function(event){
    const heightScreen = window.screen.height;
    if (browser == "Chrome"){
        menuBurgerContainer.style.height = String(heightScreen - 180) + "px";
    };
    if (browser == "Safari"){
        menuBurgerContainer.style.height = String(heightScreen - 320) + "px";
    };
    menuBurgerContainer.classList.toggle("active");
    closeMenu.classList.toggle("active");
    Body.classList.toggle("lock");
    wrapper.classList.toggle("lock");
    menuBurger.classList.toggle("change");
});

closeMenu.addEventListener("click", function(event){
    event.preventDefault();
    menuBurgerContainer.classList.toggle("active");
    closeMenu.classList.toggle("active");
    Body.classList.toggle("lock");
    wrapper.classList.toggle("lock");
    menuBurger.classList.toggle("change");
});
