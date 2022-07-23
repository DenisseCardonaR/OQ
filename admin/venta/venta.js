function cargarAgregarVenta()
{
    fetch('venta/agregar_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_venta').innerHTML=datos;
                   });
}

function cargarReporteVenta()
{
    fetch('venta/reporte_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_venta').innerHTML=datos;
                   });
}

function cargarBusquedaVenta()
{
    fetch('venta/buscar_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_venta').innerHTML=datos;
                   });
}
