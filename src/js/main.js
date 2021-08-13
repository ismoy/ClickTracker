import interviews from "./view.js"


window.addEventListener("load", () => {
    const view = document.querySelector(".interview-content");
    const random = Math.floor(Math.random() * interviews.length);

    view.innerHTML = interviews[random].content;
});