const iniciar = document.querySelector('.encabezado')
iniciar.addEventListener('click', (event) => {
    event.preventDefault();

    const formularioCostos = document.createElement('div')
    formularioCostos.innerHTML =
        `
        <form>
            <label for="costoTuberia">Costo de tubería (por metro):</label><br>
            <input type="number" class="costoTuberia" name="costoTuberia"><br>
            <label for="costoAspersor">Costo por aspersor (por unidad):</label><br>
            <input type="number" class="costoAspersor" name="costoAspersor"><br>
            <label for="costoSelector">Costo por selector:</label><br>
            <input type="number" class="costoSelector" name="costoSelector"><br>
            <label for="tarifaTrabajo">Tarifa por horas de trabajo:</label><br>
            <input type="number" class="tarifaTrabajo" name="tarifaTrabajo"><br>
            <input type="submit" value="Enviar" class="btn-enviar">
    </form>
        `


    document.body.appendChild(formularioCostos)


    const formularioP = document.querySelector('.btn-enviar')
    formularioP.addEventListener('click', (event) => {
        event.preventDefault();
        const costoTuberias = document.querySelector('.costoTuberia')
        const costoTub = costoTuberias.value

        const costoAspersores = document.querySelector('.costoAspersor')
        const costoAspersor = costoAspersores.value

        const costoSelectores = document.querySelector('.costoSelector')
        const costoSelector = costoSelectores.value

        const tarifaHoras = document.querySelector('.tarifaTrabajo')
        const costoHoras = tarifaHoras.value
        const presupuesto = document.createElement('div')

        presupuesto.innerHTML =
            `
        <form action="">
        <label for="fecha">Fecha:</label><br>
        <input type="date" id="fecha" name="fecha"><br>
        <label for="cliente">Cliente:</label><br>
        <input type="text" id="cliente" name="cliente"><br>
        <label for="domicilio">Domicilio:</label><br>
        <input type="text" id="domicilio" name="domicilio"><br>
        <label for="telefono">Teléfono:</label><br>
        <input type="tel" id="telefono" name="telefono"><br>
        <label for="metros">Cantidad de metros a regar:</label><br>
        <input type="number" id="metros" name="metros"><br>
        <label for="zonas">Cantidad de zonas a regar:</label><br>
        <input type="number" id="zonas" name="zonas"><br>
        <label for="aspersores">Cantidad de aspersores:</label><br>
        <input type="number" id="aspersores" name="aspersores"><br>
        <label for="tuberias">Cantidad de tuberías:</label><br>
        <input type="number" id="tuberias" name="tuberias"><br>
        <label for="horas">Horas:</label><br>
        <input type="number" id="horas" name="horas"><br>
        <h3>Opciones:</h3>
        <input type="checkbox" id="bomba" name="bomba">
        <label for="bomba">Bomba</label><br>
        <input type="checkbox" id="tableroelectrico" name="tableroelectrico">
        <label for="tableroelectrico">Tablero Eléctrico</label><br>
        <input type="checkbox" id="tablerowifi" name="tablerowifi">
        <label for="tablerowifi">Tablero Wi-Fi</label><br><br>
        <input type="submit" value="Calcular Presupuesto" class="calculo">
        </form> 
    

        `
        document.body.appendChild(presupuesto)
        formularioCostos.remove();
        
        const calculo = document.querySelector('.calculo')
        calculo.addEventListener('click', (event) => {
            event.preventDefault();

            const date = document.querySelector('#fecha')
            const fecha = date.value
            const user = document.querySelector('#cliente')
            const cliente = user.value
            const adress = document.querySelector('#domicilio')
            const domicilio = adress.value
            const celphone = document.querySelector('#telefono')
            const contacto = celphone.value
            const metrosa = document.querySelector('#metros')
            const aRegar = metrosa.value
            const zones = document.querySelector('#zonas')
            const sectores = zones.value
            const asper = document.querySelector('#aspersores')
            const cantAspersores = asper.value
            const mangueras = document.querySelector('#tuberias')
            const cantMangueras = mangueras.value
            const hours = document.querySelector('#horas')
            const CantHoras = hours.value

            const resultado = aRegar * costoTub + sectores * costoSelector + cantAspersores * costoAspersor + CantHoras * costoHoras
            
            const presupuestoF = document.createElement('div')
            presupuestoF.classList.add('contenedorPresupuesto')
            presupuestoF.innerHTML=
             `
            <div class="contenedorPres">
                <h2 class="tituloPres">Presupuesto</h2><hr>
                <li class="fechaPres">Fecha: ${fecha}</li>
                <li class="clientePres">Cliente: ${cliente}</li>
                <li class="domicilioPres">Domicilio: ${domicilio}</li>
                <li class="contactoPres">Contacto: ${contacto}</li>
                <li class="metrosPres">Metros a regar: ${aRegar}</li>
                <li class="sectoresPres">Sectores: ${sectores}</li>
                <li class="cantidadPres">Cantidad de aspersores: ${cantAspersores}</li>
                <li class="manguerasPres">Cantidad de mangueras: ${cantMangueras}</li>
                <li class="horasPres">Horas: ${CantHoras}</li>
                <h3 class="totalPres">Total: ${resultado}</h3>
            </div>
            ` 
            document.body.appendChild(presupuestoF)
            presupuesto.remove();
            const titulo= document.querySelector('.paraOcultar')
            titulo.textContent='';


        })
    })

})


























