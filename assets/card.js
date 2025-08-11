let attentionPriceToggle, attentionPriceText, mainImg, imgGallery, tabsArr;

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
    attentionPriceToggle = document.querySelector(".card-price-about-pic svg");
    attentionPriceText = document.querySelector(".card-price-about-text");
    mainImg = document.querySelector(".card-gallery-main__img");
    imgGallery = document.querySelectorAll(".card-gallery-list-item__img");
    tabsArr = document.querySelectorAll(".card-tabs-list-item");
    attentionPriceToggle.addEventListener("mouseover", function(e){
        fadeIn(attentionPriceText, 500);
    });
    attentionPriceToggle.addEventListener("mouseout", function(e){
        if(e.relatedTarget.tagName != "path"){
            fadeOut(attentionPriceText, 500);
        }
    });
    imgGallery.forEach((imgGalleryItem)=>{
        imgGalleryItem.addEventListener("click", ()=>{
            mainImg.setAttribute("src", imgGalleryItem.getAttribute("src"));
            document.querySelector(".card-gallery-list-item.active").classList.remove("active");
            imgGalleryItem.parentNode.classList.add("active");
        });
    });
    tabsArr.forEach((tabsItem)=>{
        tabsItem.addEventListener("click", ()=>{
            document.querySelector(".card-tabs-list-item.active").classList.remove("active");
            tabsItem.classList.add("active");
            let tabsContent, dataAttribute, calcTab;
            calcTab = document.querySelector(".card-calc");
            dataAttribute = tabsItem.getAttribute("data-attribute");
            console.log(dataAttribute);
            if(dataAttribute != "calc"){
                tabsContent = document.querySelector(".card-tabs-content-list-item--" + dataAttribute);
            }
            else{
                tabsContent = calcTab;
            }
            if(calcTab.classList.contains("active")){
                calcTab.classList.remove("active");
            }
            else{
                document.querySelector(".card-tabs-content-list-item.active").classList.remove("active");
            }
            console.log(tabsContent);
            tabsContent.classList.add("active");
        });
    });


    let calcPropsWidth = Number(document.querySelector(".card-props-item---width").querySelector(".card-props-item-value").innerHTML.replace("мм", ""));
    let calcInputWidth = document.querySelector(".calc-params__input--width");
    calcInputWidth.value = calcPropsWidth;
});