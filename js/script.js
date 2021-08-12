$(document).ready(function () {
    $("#modal").show();
});
const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFive = document.querySelector(".prev-4");
const nextBtnFive = document.querySelector(".next-4");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const title = document.querySelector(".title");
let max = 5;
let current = 1;

const genero = document.getElementById('genero');
const edad = document.getElementById('edad');
const btnnext = document.getElementById('next');
const nivelestudio = document.getElementById('nivelestudio');
const ocupacion = document.getElementById('ocupacion');
const viajeday = document.getElementById('viajeday');
const tarjetabip = document.getElementById('tarjetabip');
const rentamensual = document.getElementById('rentamensual');
const totalpersHouse = document.getElementById('totalpersHouse');

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'field error';
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'field success';
    
}


firstNextBtn.addEventListener("click", function(){
    const edadValue = edad.value.trim();
    const generoValue = genero.value.trim();   

    if(edadValue === '' || generoValue === ''){
        setErrorFor(edad,"requerido");
       // setErrorFor(genero,"requerido");
 
    }
    else{
       
        setSuccessFor(edad);
        setSuccessFor(genero);
        slidePage.style.marginLeft = "-20%" 
    bullet[current -1].classList.add("active");
    progressCheck[current -1].classList.add("active");
    current +=1;
    }
});

nextBtnSec.addEventListener("click", function(){
    const nivelestudioValue = nivelestudio.value.trim();
    const ocupacionValue = ocupacion.value.trim();
    if(nivelestudioValue === '' || ocupacionValue === ''){
        setErrorFor(nivelestudio, "requerido");
       // setErrorFor(ocupacion, "requerido");
    }
    else{
        setSuccessFor(nivelestudio);
        setSuccessFor(ocupacion);
    slidePage.style.marginLeft = "-50%" 
    bullet[current -1].classList.add("active");
    progressCheck[current -1].classList.add("active");
    current +=1;
    }
});

nextBtnThird.addEventListener("click", function(){
    const viajedayValue = viajeday.value.trim();
    const tarjetabipValue = tarjetabip.value.trim();
    if(viajedayValue === '' || tarjetabipValue === ''){
        setErrorFor(viajeday);
       // setErrorFor(tarjetabip);
    }else{
        setSuccessFor(viajeday);
        setSuccessFor(tarjetabip);
    slidePage.style.marginLeft = "-75%" 
    bullet[current -1].classList.add("active");
    progressCheck[current -1].classList.add("active");
    current +=1;
    }
});

nextBtnFourth.addEventListener("click", function(){
    const rentamensualValue = rentamensual.value.trim();
    const totalpersHouseValue = totalpersHouse.value.trim(); 
    if(rentamensualValue === '' || totalpersHouseValue === ''){
        //setErrorFor(rentamensual);
        setErrorFor(totalpersHouse, "requerido");

    }else{
        setSuccessFor(rentamensual);
        setSuccessFor(totalpersHouse);
    slidePage.style.marginLeft = "-100%" 
    bullet[current -1].classList.add("active");
    progressCheck[current -1].classList.add("active");
    current +=1;
   
    }
});
prevBtnSec.addEventListener("click", function(){

    slidePage.style.marginLeft = "0%"
    title.style.display="block" 
});

prevBtnThird.addEventListener("click", function(){

    slidePage.style.marginLeft = "-20%" 
    title.style.display="block" 
});
prevBtnFourth.addEventListener("click", function(){

    slidePage.style.marginLeft = "-50%" 
    title.style.display="block" 
    
});

prevBtnFive.addEventListener("click", function(){

    slidePage.style.marginLeft = "-75%" 
    title.style.display="block" 
});
