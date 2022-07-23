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
