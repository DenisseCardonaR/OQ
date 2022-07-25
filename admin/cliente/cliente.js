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
    
    var numero_unico = [];
    numero_unico[0] = $("#txtApellidoPaternoC").val().charAt(0).toUpperCase();
    numero_unico[1] = $("#txtApellidoPaternoC").val().charAt(1).toUpperCase();
    numero_unico[2] = $("#txtApellidoMaternoC").val().charAt(0).toUpperCase();
    numero_unico[3] = Math.floor(Math.random()*999999);
    return numero_unico.join("");

    document.getElementById("txtNumeroUnicoCliente").value = numero_unico;
}
