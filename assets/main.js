let propsTitle, propsContent, propsItemTitlePic, height, searchToggle, searchContent;
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
    searchToggle = document.querySelector(".site-header-search-toggle");
    if(searchToggle != null){
        searchToggle.addEventListener("click", ()=>{
            searchContent = document.querySelector(".site-header-search");
            searchContent.classList.toggle("show");
            searchToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L3 3" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.0001 3L3 21.0001" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            if(!searchContent.classList.contains("show"))
                searchToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15L21 21" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
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
