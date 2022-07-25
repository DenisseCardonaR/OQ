function cargarAgregarEmpleado()
{
    fetch('empleado/agregar_empleado.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_empleados').innerHTML = datos;
            });
}

function cargarReporteEmpleados()
{
    fetch('empleado/reporte_empleados.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_empleados').innerHTML = datos;
            });
}

function cargarBusquedaEmpleado()
{
    fetch('empleado/buscar_empleado.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_empleados').innerHTML = datos;
            });
}

function generarNumeroUnicoEmpleado() {
    
    var numero_unico = [];
    numero_unico[0] = $("#txtApellidoPaternoE").val().charAt(0).toUpperCase();
    numero_unico[1] = $("#txtApellidoPaternoE").val().charAt(1).toUpperCase();
    numero_unico[2] = $("#txtApellidoMaternoE").val().charAt(0).toUpperCase();
    numero_unico[3] = Math.floor(Math.random()*999999);
    return numero_unico.join("");

    document.getElementById("txtNumeroUnicoEmpleado").value = numero_unico;
}
