

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
const btnterminarencuesta = document.querySelector(".btnnex40");

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
const terminarencuesta = document.getElementById('email');

//determinar el maximo pagina que va a mostrar en mi caso es 6 
let max = 7;
let current = 1;

//function para validar los campos
function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'field error';
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
        setErrorFor(edad);
    
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
        setErrorFor(nivelestudio);
       
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
        alert("Los campos no deben estar vacios");
     
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
        setErrorFor(totalpersHouse);

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
    const valortiempoespera = tiempoespera.value.trim();
    const valortiempoviaje = tiempoviaje.value.trim();
    const valortarifa = tarifa.value.trim();
    const valortransbordo = transbordo.value.trim();
    const valorasiento = asiento.value.trim();
    if (valortiempocaminataValue === '' || valortiempoespera === '' || valortiempoviaje === '' ||
    valortarifa === '' || valortransbordo === '' || valorasiento === ''){
        
      //  alert("Los campos no deben estar vacios");
   
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

btnterminarencuesta.addEventListener("click", function(){
    const valorterminarencuesta = terminarencuesta.value.trim();
    if(valorterminarencuesta === ''){
        Swal.fire('Por favor ingrese un correo electrónico ');
    }else{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas gracias por tomarse el tiempo para completar la encuesta!',
        showConfirmButton: false,
        timer: 4000
        
      })
      location.reload(true);
    }
})
