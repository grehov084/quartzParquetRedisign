let propsTitle, propsContent, propsItemTitlePic, height;
document.addEventListener("DOMContentLoaded", ()=>{
    propsTitle = document.querySelectorAll(".properties-list-item-title");
    if(propsTitle != null){
        propsTitle.forEach((propsTitleItem)=>{
            propsTitleItem.addEventListener("click", ()=>{
                propsContent = propsTitleItem.parentNode.querySelector(".properties-list-item-content");
                propsItemTitlePic = propsTitleItem.querySelector(".properties-list-item-title-pic");
                propsItemTitlePic.classList.toggle("show");
                propsContent.classList.toggle("show");
                if(propsContent.classList.contains("show")){
                    height = 0;
                    for(let i = 0; i < propsContent.childElementCount; i++){
                        height += propsContent.children[i].offsetHeight;
                        height += parseInt(window.getComputedStyle(propsContent.children[i]).paddingTop);
                    }
                    propsContent.style.maxHeight = height + "px";
                }
                else{
                    propsContent.removeAttribute("style");
                }
            });
        });
    }
});

$(document).ready(function() {
    $('.designers-slider-wrap').owlCarousel({
        loop: false, 
        nav: true,
        dots: false,
        items: 4,
        margin: 24,
        freeDrag: true,
        itemClass: "designers-slider-item",
        navContainer: ".designers-slider-nav",
        navClass: ["designers-slider-nav-item designers-slider-nav-item--prev", "designers-slider-nav-item designers-slider-nav--next"],
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M7.99998 15L1 7.99988L8 1" stroke="white"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1.00002 15L8 7.99988L0.999999 1" stroke="white"/></svg>'],
        responsive: {

        }
    });
});

$(document).ready(function() {
    $('.reviews-list-wrap').owlCarousel({
        loop: true, 
        nav: true,
        dots: false,
        items: 1,
        itemClass: "reviews-list-item",
        navContainer: ".reviews-list-nav",
        navClass: ["reviews-slider-nav-item reviews-slider-nav-item--prev", "reviews-slider-nav-item reviews-slider-nav--next"],
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M7.99998 15L1 7.99988L8 1" stroke="white"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1.00002 15L8 7.99988L0.999999 1" stroke="white"/></svg>'],
        responsive: {
            
        }
    });
});
