

/**
 * SCRIP MODAL JS
 */

 window.addEventListener("load",function(){
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
});
/**
 * FIN SCRIP MODAL JS
 */


const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const nextBtnSec = document.querySelector(".next-1");
const nextBtnThird = document.querySelector(".next-2");
const nextBtnFourth = document.querySelector(".next-3");
const nextBtnFive = document.querySelector(".next-4");
const nextBtnSix = document.querySelector(".next-5");
const nextBtnSeven = document.querySelector(".next-6");
const nextBtnHeight = document.querySelector(".next-7");
const nextBtnNine = document.querySelector(".next-8");
const nextBtnTen = document.querySelector(".next-9");
const nextBtnElv = document.querySelector(".next-10");
const nextBtntwelv = document.querySelector(".next-11");
const nextBtntherti = document.querySelector(".next-12");

let max = 12;
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
        slidePage.style.marginLeft = "-3%" 
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
        slidePage.style.marginLeft = "-21%" 
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
        slidePage.style.marginLeft = "-46%" 
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
    slidePage.style.marginLeft = "-81%" 
    current +=1;
   
    }
});


nextBtnFive.addEventListener("click", function(){
    const valortiempocaminataValue = tiempocaminata.value.trim();
    if (valortiempocaminataValue === ''){
        setErrorFor(tiempocaminata, "requerido");
   
    }else{
        setSuccessFor(tiempocaminata);
        slidePage.style.marginLeft = "-135%" 
        current +=1;
    }
    
});/*
nextBtnSix.addEventListener("click", function(){
    slidePage.style.marginLeft = "-110%" 
        current +=1;
});


nextBtnSeven.addEventListener("click",function(){
    slidePage.style.marginLeft = "-148%" 
    current +=1;
});

nextBtnHeight.addEventListener("click",function(){
    slidePage.style.marginLeft = "-204%" 
    current +=1;
});

nextBtnNine.addEventListener("click",function(){
    slidePage.style.marginLeft = "-260%" 
    current +=1;
});
nextBtnTen.addEventListener("click",function(){
    slidePage.style.marginLeft = "-285%" 
    current +=1;
});
nextBtnElv.addEventListener("click",function(){
    slidePage.style.marginLeft = "-310%" 
    current +=1;
});

nextBtntwelv.addEventListener("click",function(){
    slidePage.style.marginLeft = "-335%" 
    current +=1;
});

nextBtntherti.addEventListener("click",function(){
    slidePage.style.marginLeft = "-335%" 
    current +=1;
});


*/



