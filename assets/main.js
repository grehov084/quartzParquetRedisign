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