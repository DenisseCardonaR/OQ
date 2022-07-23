function cargarAgregarExamen()
{
    fetch('examen_vista/agregar_examen.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_examen').innerHTML=datos;
                   });
}

function cargarReporteExamen()
{
    fetch('examen_vista/reporte_examen.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_examen').innerHTML=datos;
                   });
}

function cargarBuscarExamen()
{
    fetch('examen_vista/buscar_examen.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_examen').innerHTML=datos;
                   });
}

