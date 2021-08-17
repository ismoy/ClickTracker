import interviews from "./view.js"

localStorage.setItem("tracker", JSON.stringify([]))

window.addEventListener("load", () => {
    const view = document.querySelector(".prueba");
    const random = Math.floor(Math.random() * 2/* interviews.length */);
    console.log(interviews[random]);
    let container = document.createElement("div");
    container.className = "interview-content";
    container.innerHTML = interviews[random].content;
    view.appendChild(container);
});
window.addEventListener("click", (e) => {
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
            tracker(target)
            target.value = "ver";
            return;
    }
});








function tracker({ name, value }) {
    let data = getLocalStorage();
    data.push({ name, value });
    saveData(data)
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("tracker"));
}
function saveData(data) {
    return localStorage.setItem("tracker", JSON.stringify(data))
}