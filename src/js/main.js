import interviews from "./view.js"

localStorage.setItem("tracker", JSON.stringify([]))

window.addEventListener("load", () => {
    const view = document.querySelector(".prueba");
    const random = Math.floor(Math.random() * interviews.length);
    const content = interviews[0].content;
    const fg = new DocumentFragment();
    console.log(interviews[0].interview);
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
            tracker(target)
            target.value = "ver";
            return;
    }
});





setTimeout(() => {
    const tiempocaminata = document.getElementById('tiempocaminata');
    const tiempoespera = document.getElementById('tiempoespera');
    const tiempoviaje = document.getElementById('tiempoviaje');
    const tarifa = document.getElementById('tarifa');
    const transbordo = document.getElementById('transbordo');
    const asiento = document.getElementById('asiento');
    let contents = document.querySelectorAll(".interview-content");

    const row1 = interviews[0].screens[0].btn.filter(x => x.row == 1)
    const row2 = interviews[0].screens[0].btn.filter(x => x.row == 2)
    const row3 = interviews[0].screens[0].btn.filter(x => x.row == 3)
    const row4 = interviews[0].screens[0].btn.filter(x => x.row == 4)
    const row5 = interviews[0].screens[0].btn.filter(x => x.row == 5)
    const row6 = interviews[0].screens[0].btn.filter(x => x.row == 6)

    row1.forEach(element => {
        let btn = Object.keys(element)[0]
        if (element.shouldMultiply) {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tiempocaminata.value * element[btn]);
        } else {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tiempocaminata.value);
        }
    });
    row2.forEach(element => {
        let btn = Object.keys(element)[0]
        if (element.shouldMultiply) {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tiempoespera.value * element[btn]);
        } else {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tiempoespera.value);
        }
    });
    row3.forEach(element => {
        let btn = Object.keys(element)[0]
        if (element.shouldMultiply) {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tiempoviaje.value * element[btn]);
        } else {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tiempoviaje.value);
        }
    });
    row4.forEach(element => {
        let btn = Object.keys(element)[0]
        if (element.shouldMultiply) {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tarifa.value * element[btn]);
        } else {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", tarifa.value);
        }
    });
    row5.forEach(element => {
        let btn = Object.keys(element)[0]
        if (element.shouldMultiply) {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", transbordo.value * element[btn]);
        } else {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", transbordo.value);
        }
    });
    row6.forEach(element => {
        let btn = Object.keys(element)[0]
        if (element.shouldMultiply) {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", asiento.value * element[btn]);
        } else {
            document.querySelector(`input[name=${btn}]`).setAttribute("data-value", asiento.value);
        }
    });

}, 1000)



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