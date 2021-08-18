import interviews from "./view.js"


localStorage.setItem("tracker", JSON.stringify([]))
const view = document.querySelector(".interview-content");
let interview;
let screenCount = 0;
let tiempoCaminata, tiempoespera, tiempoviaje, tarifa, transbordo, asiento;


window.addEventListener("load", () => {
    const random = Math.floor(Math.random() * 2/* interviews.length */);
    interview = interviews[random];
    console.log(interview);
    view.innerHTML = interview.content;
});

window.addEventListener("focusin", (e) => {
    let target = e.target;
    let { type } = target;
    console.log(target);
    switch (type) {
        case "button":
            target.value = target.getAttribute("data-value");
            return;
    }
});

window.addEventListener("focusout", (e) => {
    let target = e.target;
    let { type } = target;
    console.log(target);
    switch (type) {
        case "button":
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

let page = document.querySelector(".page");
let data = [];
page.addEventListener("click", (e) => {

    tiempoCaminata = parseInt(document.querySelector("#tiempocaminata").value);
    tiempoespera = parseInt(document.querySelector("#tiempoespera").value);
    tiempoviaje = parseInt(document.querySelector("#tiempoviaje").value);
    tarifa = document.querySelector("#tarifa").value
    transbordo = document.querySelector("#transbordo").value
    asiento = document.querySelector("#asiento").value

    let { buttons } = interview.screens[screenCount];
    loadDataInterview(buttons);
})
let divRandom = document.querySelector(".page.interview-random");

divRandom.addEventListener("click", (e) => {

    if (e.target.className == "btn-next-screen") {
        let { buttons } = interview.screens[++screenCount];
        loadDataInterview(buttons)
    }

})

function loadDataInterview(buttons) {

    buttons.forEach(button => {
        let value;
        switch (button.row) {
            case 1:
                value = tiempoCaminata * button.value;
                break;
            case 2:
                value = tiempoespera * button.value;
                break;
            case 3:
                value = tiempoviaje * button.value;
                break;
            case 4:
            case 5:
                value = button.value;
                break;
            case 6:
                value = asiento;
                break;
        }
        document.querySelector(`input[name=${button.button}]`).setAttribute("data-value", value);
    })
}