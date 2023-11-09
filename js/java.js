

let presupuesto = 0;
const calculoP = document.querySelector('.btn-calcular')
calculoP.addEventListener('click', (event) => {
    event.preventDefault();
    const longitud = document.querySelector('.longitud');
    const CantLongitud = parseFloat(longitud.value);
    const aspersor = document.querySelector('.aspersor');
    const CantAspersor = parseFloat(aspersor.value);
    const acople = document.querySelector('.acople');
    const CantAcople = parseFloat(acople.value);
    const longitudC = document.querySelector('.tuberiaC');
    const valLongitud = parseFloat(longitudC.value);
    const aspersorC = document.querySelector('.aspersorC');
    const valAspersor = parseFloat(aspersorC.value);
    const acopleC = document.querySelector('.acopleC');
    const valAcople = parseFloat(acopleC.value);
    const horas = document.querySelector('.CantHoras');
    const cantHoras = parseFloat(horas.value);
    const horasT = document.querySelector('.horasT');
    const tarifaH = parseFloat(horasT.value);
    const zona = document.querySelector('.colectorC')
    const colector = parseFloat(zona.value)
    const zonasR = document.querySelector('.zonasR')
    const cantZonas = parseFloat(zonasR.value)

    presupuesto = parseFloat(CantLongitud * valLongitud + 
        CantAspersor * valAspersor +  
        cantHoras * tarifaH + colector * cantZonas );

    const card = document.createElement('div');
    card.classList.add('card');

    const titularProyecto = document.querySelector('.titular')
    const usuario = titularProyecto.value;

    const direccionProyecto = document.querySelector('.direccion');
    const hubicacion = direccionProyecto.value;

    card.innerHTML = `
                <h1>Cliente ${usuario}</h1>
                <h3>Direccion: ${hubicacion}</h3>
                <hr>  <!-- Línea horizontal -->
                <p>Longitud de tuberías: ${CantLongitud} metros</p>
                <p>Número de aspersores: ${CantAspersor}</p>
                <p>Número de acoples: ${CantAcople}</p>
                <p>Costo por metro de tubería: ${valLongitud}</p>
                <p>Costo por aspersor: ${valAspersor}</p>
                <p>Costo por acople: ${valAcople}</p>
                <p>Horas de trabajo estimadas: ${cantHoras}</p>
                <p>Tarifa por hora de trabajo: ${tarifaH}</p>
                <hr>  <!-- Línea horizontal -->
                <h2>Presupuesto total: ${presupuesto}</h2>
                    <div class="contenedor-aclaracion">
                    <p class="aclaracion">*Todos los presupuesto tienen validez por 15 dias corridos desde la fecha de presentacion del mismo. El precio del presupuesto esta expresador en USD blue, podes pagar con pesos al cambio del dia </p>
                    </div>
                    `;

    document.body.appendChild(card);
    const formulario = document.querySelector('.contenedor-formulario');
    formulario.remove();

});












