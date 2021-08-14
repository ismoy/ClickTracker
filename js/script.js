
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
const nextBtnSix = document.querySelector(".next-5");
const nextBtnSeven = document.querySelector(".next-6");
const nextBtnHeight = document.querySelector(".next-7");
const nextBtnNine = document.querySelector(".next-8");
const nextBtnTen = document.querySelector(".next-9");
const nextBtnElv = document.querySelector(".next-10");
const nextBtntwelv = document.querySelector(".next-11");
const nextBtntherti = document.querySelector(".next-12");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const title = document.querySelector(".title");




let max = 13;
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
const tiempocaminata = document.getElementById('tiempocaminata');
const tiempoespera = document.getElementById('tiempoespera');
const tiempoviaje = document.getElementById('tiempoviaje');
const tarifa = document.getElementById('tarifa');
const transbordo = document.getElementById('transbordo');
const asiento = document.getElementById('asiento');
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
        slidePage.style.marginLeft = "-6%" 
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
    slidePage.style.marginLeft = "-14%" 
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
    slidePage.style.marginLeft = "-24%" 
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
    slidePage.style.marginLeft = "-38%" 
    bullet[current -1].classList.add("active");
    progressCheck[current -1].classList.add("active");
    current +=1;
   
    }
});
nextBtnFive.addEventListener("click", function(){
    const valortiempocaminataValue = tiempocaminata.value.trim();
    const tiempoesperaValue = tiempoespera.value.trim();
    const tiempoviajeValue = tiempoviaje.value.trim();
    const transbordoValue = transbordo.value.trim();
    const tarifaValue = tarifa.value.trim();
    const asientoValue = asiento.value.trim();
    let valorbtn1 = valortiempocaminataValue * 1.2;
    let valorbtn7 = valortiempocaminataValue * 1.2;
    let valorbtn13 = valortiempocaminataValue * 0.5;
    let valorbtn2 = tiempoesperaValue * 0.5;
    let valorbtn8 = tiempoesperaValue * 0.85;
    let valorbtn14 = tiempoesperaValue * 1.85;
    let valorbtn3 = tiempoviajeValue * 1;
    let valorbtn9 = tiempoviajeValue * 1.85;
    let valorbtn15 = tiempoviajeValue * 1.85;
     if (valortiempocaminataValue === '' ||tiempoesperaValue ==='' || tiempoviajeValue === ''
         || tarifaValue === '' || transbordoValue === '' || asientoValue === ''){
         setErrorFor(tiempocaminata, "requerido");
         setErrorFor(tiempoespera, "requerido");
         setErrorFor(tiempoviaje, "requerido");
         setErrorFor(tarifa, "requerido");
         setErrorFor(transbordo, "requerido");
         setErrorFor(asiento, "requerido");

     }else{
        slidePage.style.marginLeft = "-81%" 
        current +=1;
        /* setSuccessFor(tiempocaminata);
         setSuccessFor(tiempoespera);
         setSuccessFor(tiempoviaje);
         setSuccessFor(transbordo);
         setSuccessFor(tarifa);
         setSuccessFor(asiento);*/
        
     }
    
});

nextBtnSix.addEventListener("click",function(){
    slidePage.style.marginLeft = "-108%" 
    current +=1;
});

nextBtnSeven.addEventListener("click",function(){
    slidePage.style.marginLeft = "-144%" 
  
    current +=1;
});

nextBtnHeight.addEventListener("click",function(){
    slidePage.style.marginLeft = "-197%" 
  
    current +=1;
});

nextBtnNine.addEventListener("click",function(){
    slidePage.style.marginLeft = "-259%" 

    current +=1;
});

nextBtnTen.addEventListener("click",function(){
    slidePage.style.marginLeft = "-284%" 
 
    current +=1;
});

nextBtnElv.addEventListener("click",function(){
    slidePage.style.marginLeft = "-309%" 
 
    current +=1;
});

nextBtntwelv.addEventListener("click",function(){
    slidePage.style.marginLeft = "-334%" 

    current +=1;
});

nextBtntherti.addEventListener("click",function(){
    slidePage.style.marginLeft = "-334%" 

    current +=1;
});

prevBtnSec.addEventListener("click", function(){

    slidePage.style.marginLeft = "4%"
    title.style.display="block" 
});

prevBtnThird.addEventListener("click", function(){

    slidePage.style.marginLeft = "-12%" 
    title.style.display="block" 
});
prevBtnFourth.addEventListener("click", function(){

    slidePage.style.marginLeft = "-34%" 
    title.style.display="block" 
    
});

prevBtnFive.addEventListener("click", function(){

    slidePage.style.marginLeft = "-68%" 
    title.style.display="block" 
});



