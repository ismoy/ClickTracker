//traer los botones que estan en view.js
import interviews from "./view.js"

localStorage.setItem("tracker", JSON.stringify([]))
const view = document.querySelector(".interview-content");
//cambio
let steppregunta = document.getElementById('index');
//agregado
const btnNextQuestion = document.querySelector(".btn-next-screen");
btnNextQuestion.disabled = true;
//

let interview;
let mp = [];
let count = 1;
let clickCount = 0;
let screenCount = 0;
let tiempoCaminata, tiempoespera, tiempoviaje, tarifa, transbordo, asiento;


//cargar las encuestas ramdom cada vez se recarga la pagina
window.addEventListener("load", () => {
    const random = Math.floor(Math.random() * interviews.length);
    interview = interviews[random];
    view.innerHTML = interview.content;
    optionalElement(interview.interview)
    console.log("Te has tocado la encuesta " ,interview);
});

function optionalElement(interview) {
    let elements = document.querySelectorAll(".optional");
    let optionals = ["click-tracker-22", "click-tracker-23", "click-tracker-24", "click-tracker-25", "click-tracker-26"]
    elements.forEach(element => {
        if (optionals.includes(interview)) {
            element.style.display = "none";
        }
    })
}


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

//cambio
divRandom.addEventListener("click", (evt) => {
    let { target } = evt;
    let btnCliks = document.querySelectorAll(".btn-click");
    let btnOptions = document.querySelectorAll(".btn-option");
    console.log(clickCount);
    if (clickCount > 0) {
        btnNextQuestion.disabled = false;

        if (target.className == "btn-next-screen") {
            if (++screenCount <= 7) {
                let { buttons } = interview.screens[screenCount];
                loadDataInterview(buttons)
                ++count;

                steppregunta.textContent = count;

                btnOptions.forEach(btn => {
                    btn.disabled = false;
                    btn.name = "pregunta-10.".concat(count)
                });
                btnCliks.forEach(x => x.disabled = false);
            }
            if (count == 8) {
                target.style.display = "none";
                let btnNext = document.querySelector(".btn-next4.next-5");
                btnNext.classList.remove("hide");
            }
            clickCount = 0;
            btnNextQuestion.disabled = true;
        }


        if (target.classList.contains("btn-option")) {
            mp.push({ question: target.name, answer: target.value });

            btnCliks.forEach(x => x.disabled = true);

        }

    }
})

//cambio
divRandom.addEventListener("focusin", (e) => {

    let target = e.target;
    let { type } = target;
    switch (type) {
        case "button":

            if (/[btn]\d{1,2}/.test(target.name)) {
                clickCount++;
                console.log(/[btn]\d{1,2}/.test(target.name), target.name, clickCount);
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
            if (/[btn]\d{1,2}/.test(target.name)) {
                target.value = "ver";
            }
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
            return Math.round(value) = (tiempoCaminata + tiempoespera) * value;
        case 2:
            return Math.round(tiempoviaje * value);
        case 3:
            return Math.round(value);
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
//parte der servidor para guardar hay que cambiar la ruta del servidor 
function save(evt) {
    evt.preventDefault();
    let form = Object.fromEntries(new FormData(document.forms[0]))
    let obj = new Object();
    obj.name = interview.interview;
    obj.email = form["pregunta-11"]
    obj.questions = mp;
    for (const key of Object.entries(form)) {
        obj.questions.push({ question: key[0], answer: key[1] })
    }
    obj.tracks = JSON.parse(localStorage.getItem("tracker"))
     //CAMBIA SOLO EL URL DEL SERVIDOR PONE NOMBRE DE SUS SERVIDOR
    fetch("http://localhost/clicktracker/server/server.php", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(r => r.json())
        .then(d => {
            alert("Gracias por contestar !!");
            location.reload(); 
        })

}

document.forms[0].addEventListener("submit", save);
