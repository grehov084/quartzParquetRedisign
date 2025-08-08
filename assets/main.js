let body, site, header, siteOverlay, propsTitle, propsContent, propsItemTitlePic, height, searchToggle, searchContent, siteUpButton, mobileMenuToggle, mobileMenuCloseToggle, mobileMenu;

function fadeIn(el, timeout, display){
    el.style.opacity = 0;
    el.style.display = display || 'flex';
    el.style.alignItems = "center";   
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
    el.style.opacity = 1;
    }, 10);
};

function fadeOut(el, timeout){
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    overlay = document.querySelector("body");
    if(overlay != undefined){
        overlay.style.cssText = "";
    }
    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
    setTimeout(()=>{
        el.removeAttribute("style");
    }, timeout + 200);

};

document.addEventListener("DOMContentLoaded", ()=>{
    body = document.querySelector("body");
    siteOverlay = document.querySelector(".site-overlay");
    propsTitle = document.querySelectorAll(".properties-list-item-title");
    siteUpButton = document.querySelector(".site-up");
    header = document.querySelector(".site-header-content");
    mobileMenuToggle = document.querySelector(".site-header-burger");
    mobileMenu = document.querySelector(".site-header-mobile");
    mobileMenuCloseToggle = document.querySelector(".site-header-mobile-close");
    site = document.querySelector(".site");
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
        searchContent = document.querySelector(".site-header-search");
        searchToggle.addEventListener("click", ()=>{
            searchContent.classList.toggle("show");
            if(searchContent.classList.contains("show"))
                fadeIn(siteOverlay, 500);
            body.style.overflow = "hidden";
            searchToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L3 3" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.0001 3L3 21.0001" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            if(!searchContent.classList.contains("show")){
                searchToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15L21 21" stroke="#2B2A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                body.removeAttribute("style");
                fadeOut(siteOverlay, 500);
            }
        });
    }
    siteUpButton.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 0){
            if(!siteUpButton.hasAttribute("style"))
                fadeIn(siteUpButton, 500);
        }
        if(window.scrollY == 0){
            fadeOut(siteUpButton, 500);
        }
    });
    mobileMenuToggle.addEventListener("click", ()=>{
        fadeIn(siteOverlay, 500);
        header.classList.add("site-header--hide");
        mobileMenu.classList.add("show");
        site.classList.add("site--no-scroll");
        body.style.overflow = "hidden";
    });
    mobileMenuCloseToggle.addEventListener("click", ()=>{
        mobileMenu.classList.remove("show");
        header.classList.remove("site-header--hide");
        if(!searchContent.classList.contains("show")){
            fadeOut(siteOverlay, 500);
        }
        body.removeAttribute("style");
        site.classList.remove("site--no-scroll");
    });
    siteOverlay.addEventListener("click", ()=>{
        if(mobileMenu.classList.contains("show")){
            mobileMenu.classList.remove("show");
            header.classList.remove("site-header--hide");
            if(!searchContent.classList.contains("show")){
                fadeOut(siteOverlay, 500);
            }
            body.removeAttribute("style");
            site.classList.remove("site--no-scroll");
        }
    });
});


    $('.designers-slider-wrap').owlCarousel({
        loop: false, 
        nav: true,
        dots: false,
        responsiveClass:true,
        margin: 24,
        //itemClass: "designers-slider-item",
        navContainer: ".designers-slider-nav",
        navClass: ["designers-slider-nav-item designers-slider-nav-item--prev", "designers-slider-nav-item designers-slider-nav--next"],
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M7.99998 15L1 7.99988L8 1" stroke="white"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1.00002 15L8 7.99988L0.999999 1" stroke="white"/></svg>'],
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            600:{
                items: 2,
            },
            1200:{
                items: 3
            },
            1390: {
                items: 4,
            }
        }
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
