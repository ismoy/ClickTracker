import interviews from "./view.js"


localStorage.setItem("tracker", JSON.stringify([]))
const view = document.querySelector(".interview-content");
let interview;
let screenCount = 0;
let tiempoCaminata, tiempoespera, tiempoviaje, tarifa, transbordo, asiento;


window.addEventListener("load", () => {
    const random = Math.floor(Math.random() * interviews.length);
    interview = interviews[random];
    console.log(interview);
    view.innerHTML = interview.content;
});




function tracker({ name, value }) {
    let data = getLocalStorage();
    data.push({ name, value, screen: `${interview.screens[screenCount].screen}` });
    saveData(data)
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("tracker"));
}
function saveData(data) {
    return localStorage.setItem("tracker", JSON.stringify(data))
}

let page = document.querySelector(".page.data");

page.addEventListener("click", (e) => {

    if (e.target.name == "btnNext") {
        tiempoCaminata = parseInt(document.querySelector("#tiempocaminata").value);
        tiempoespera = parseInt(document.querySelector("#tiempoespera").value);
        tiempoviaje = parseInt(document.querySelector("#tiempoviaje").value);
        tarifa = document.querySelector("#tarifa").value;
        transbordo = document.querySelector("#transbordo").value;
        asiento = document.querySelector("#asiento").value;

        let { buttons } = interview.screens[screenCount];
        loadDataInterview(buttons);
    }
})
let divRandom = document.querySelector(".page.interview-random");

divRandom.addEventListener("click", (e) => {

    if (e.target.className == "btn-next-screen") {
        if (++screenCount <= 7) {
            let { buttons } = interview.screens[screenCount];
            loadDataInterview(buttons)
        }
    }

})

divRandom.addEventListener("focusin", (e) => {
    let target = e.target;
    let { type } = target;
    switch (type) {
        case "button":
            if (/[btn]\d{1,2}/.test(target.name)) {
                target.value = target.getAttribute("data-value");
                tracker(target)
            }
            
            return;
    }
});

divRandom.addEventListener("focusout", (e) => {
    let target = e.target;
    let { type } = target;
    switch (type) {
        case "button":
            target.value = "ver";
            return;
    }
});

function loadDataInterview(buttons) {

    buttons.forEach(button => {
        let value;

        if (interview.interview == "click-tracker-33" || interview.interview == "click-tracker-23") {
            value = interview33_23(button.row, button.value)
        }
        else if (interview.interview == "click-tracker-32" || interview.interview == "click-tracker-22") {
            value = interview32_22(button.row, button.value)
        }
        else {
            value = generalInterview(button.row, button.value, asiento)
        }
        document.querySelector(`input[name=${button.button}]`).setAttribute("data-value", value);
    })
}

function generalInterview(row, value, asiento) {
    switch (row) {
        case 1:
            return tiempoCaminata * value;
        case 2:
            return tiempoespera * value;
        case 3:
            return tiempoviaje * value;
        case 4:
        case 5:
            return value;
        case 6:
            return asiento;

    }
}
function interview33_23(row, value) {
    switch (row) {
        case 1:
            return value = (tiempoCaminata + tiempoespera) * value;
        case 2:
            return tiempoviaje * value;
        case 3:
            return value;
    }
}

function interview32_22(row, value) {
    switch (row) {
        case 1:
            return (tiempoCaminata + tiempoespera + tiempoviaje) * value;
        case 2:
            return value;
    }
}

function save(evt) {
    evt.preventDefault();
    let form = Object.fromEntries(new FormData(document.forms[0]))
    let obj = new Object();
    obj.name = interview.interview;
    obj.email = form["pregunta-11"]
    obj.questions = [];
    for (const key of Object.entries(form)) {
        obj.questions.push({ question: key[0], answer: key[1] })
    }
    obj.tracks = JSON.parse(localStorage.getItem("tracker"))


    fetch("http://localhost/clicktracker/server/server.php", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(r => {
            console.log(r);
            return r.json()
        })
        .then(d => console.log("resultado", d))

}

document.forms[0].addEventListener("submit", save);