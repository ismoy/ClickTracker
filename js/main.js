import interviews from "./view.js"


window.addEventListener("load", () => {
    const view = document.querySelector(".prueba");
    const random = Math.floor(Math.random() * interviews.length);
    const content = interviews[random].content;
    const fg = new DocumentFragment();
    console.log(interviews[random].interview);
    for (let index = 0; index < 8; index++) {
        let container = document.createElement("div");
        container.className = "interview-content";
        container.innerHTML = content;
        fg.appendChild(container);
    }
    view.appendChild(fg);
});

window.addEventListener("mouseover", (e) => {
    let target = e.target;
    let { type } = target;
    switch (type) {
        case "button":
            target.value = target.getAttribute("data-value");
            return;
    }
});

window.addEventListener("mouseout", (e) => {
    let target = e.target;
    let { type } = target;
    switch (type) {
        case "button":
            target.value = "ver";
            return;
    }
});

setTimeout(()=>console.log(document.querySelectorAll(".interview-content")), 1000)

/**
 * SCRIP MODAL JS
 */

 /*window.addEventListener("load",function(){
    setTimeout(
        function open(event){
         document.querySelector(".modal-container").style.display = "block";
        },
        500
    )
 });
 document.querySelector("#close").addEventListener("click",function(){
     document.querySelector(".modal-container").style.display ="none";
 });

 document.querySelector(".next-3").addEventListener("click",function(){
    document.querySelector(".modal-container2").style.display = "block";
 });
 document.querySelector("#close2").addEventListener("click",function(){
    document.querySelector(".modal-container2").style.display ="none";
});*/
/**
 * FIN SCRIP MODAL JS
 */
