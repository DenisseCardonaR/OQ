function cargarAgregarCliente()
{
    fetch('cliente/agregar_cliente.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_clientes').innerHTML=datos;
                   });
}

function cargarReporteCliente()
{
    fetch('cliente/reporte_clientes.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_clientes').innerHTML=datos;
                   });
}

function cargarBusquedaCliente()
{
    fetch('cliente/buscar_cliente.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_clientes').innerHTML=datos;
                   });
}

function generarNumeroUnicoCliente() {
    let paterno = document.getElementById("txtApellidoPaternoC").value;
    let materno = document.getElementById("txtApellidoMaternoC").value;    
    
    let paterno1 = paterno.val().charAt(0).toUpperCase();
    let paterno2 = paterno.val().charAt(1).toUpperCase();
    let materno1 = materno.val().charAt(0).toUpperCase();
    let numero = Math.floor(Math.random()*999999);
    
    let numero_unico = paterno1+paterno2+materno1+numero;

    document.getElementById("txtNumeroUnicoCliente").value = numero_unico;
}
