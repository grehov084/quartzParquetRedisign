let propsDirection, propsMethod;
document.addEventListener("DOMContentLoaded", ()=>{
    propsDirection = document.querySelectorAll(".calc-params-item-action-value--direction");
    propsMethod = document.querySelectorAll(".calc-params-item-action-value--method");
    propsDirection.forEach((propsDirectionItem)=>{
        propsDirectionItem.addEventListener("click", ()=>{
            document.querySelector(".calc-params-item-action-value--direction.active").classList.remove("active");
            propsDirectionItem.classList.add("active");
        });
    });
    propsMethod.forEach((propsMethodItem)=>{
        propsMethodItem.addEventListener("click", ()=>{
            document.querySelector(".calc-params-item-action-value--method.active").classList.remove("active");
            propsMethodItem.classList.add("active");
        });
    });
});