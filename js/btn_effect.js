window.addEventListener("mouseover", (e) => {
    if (e.target.type == "button") {
        e.target.value = e.target.getAttribute("data-value");
    }


})
window.addEventListener("mouseout", (e) => {
    if (e.target.type == "button") {
        e.target.value = "Ver"
    }
})