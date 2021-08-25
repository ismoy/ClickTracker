

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

/* capturar click en el boton siguiente de cada pagina que va pasando  */
const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const nextBtnSec = document.querySelector(".next-1");
const nextBtnThird = document.querySelector(".next-2");
const nextBtnFourth = document.querySelector(".next-3");
const nextBtnFive = document.querySelector(".next-4");
const nextBtnSix = document.querySelector(".next-5");

//capturar los valores de cada campos en lagina para validarlos
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

//determinar el maximo pagina que va a mostrar en mi caso es 6 
let max = 7;
let current = 1;

//function para validar los campos
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'field error';
    small.innerText = message;
}
//funcion de que valida que los campos tienen datos
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'field success';
    
}

//cuando da click sobre el primer boton me valida que todos estn OK
//y luego llama la otra pagina disponible
firstNextBtn.addEventListener("click", function(){
    const edadValue = edad.value.trim();
    const generoValue = genero.value.trim();   
    if(edadValue === '' || generoValue === ''){
        setErrorFor(edad,"requerido");
    
    }
    else{
       
        setSuccessFor(edad);
        setSuccessFor(genero);
        slidePage.style.marginLeft = "-4%" 
        current +=1;
    }
});

//cuando da click sobre el segundo boton me valida que todos estn OK
//y luego llama la otra pagina disponible
nextBtnSec.addEventListener("click", function(){
    const nivelestudioValue = nivelestudio.value.trim();
    const ocupacionValue = ocupacion.value.trim();
    if(nivelestudioValue === '' || ocupacionValue === ''){
        setErrorFor(nivelestudio, "requerido");
       
    }
    else{
        setSuccessFor(nivelestudio);
        setSuccessFor(ocupacion);
        slidePage.style.marginLeft = "-24%" 
        current +=1;
    }
});

//cuando da click sobre el tercer boton me valida que todos estn OK
//y luego llama la otra pagina disponible
nextBtnThird.addEventListener("click", function(){
    const viajedayValue = viajeday.value.trim();
    const tarjetabipValue = tarjetabip.value.trim();
    if(viajedayValue === '' || tarjetabipValue === ''){
        setErrorFor(viajeday);
     
    }else{
        setSuccessFor(viajeday);
        setSuccessFor(tarjetabip);
        slidePage.style.marginLeft = "-53%" 
        current +=1;
    }
});

//cuando da click sobre el cuarto boton me valida que todos estn OK
//y luego llama la otra pagina disponible
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

//cuando da click sobre el quinto boton me valida que todos estn OK
//y luego llama la otra pagina disponible
nextBtnFive.addEventListener("click", function(){
    const valortiempocaminataValue = tiempocaminata.value.trim();
    if (valortiempocaminataValue === ''){
        setErrorFor(tiempocaminata, "requerido");
   
    }else{
        setSuccessFor(tiempocaminata);
        slidePage.style.marginLeft = "-135%" 
        current +=1;
    }
    
});
//cuando da click sobre el sexto boton me valida que todos estn OK
//y luego llama la otra pagina disponible
nextBtnSix.addEventListener("click", function(){
    slidePage.style.marginLeft = "-160%" 
        current +=1;
});




