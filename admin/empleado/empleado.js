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
    let paterno = document.getElementById("txtApellidoPaternoE").value;
    let materno = document.getElementById("txtApellidoMaternoE").value;    
    
    let paterno1 = paterno.val().charAt(0).toUpperCase();
    let paterno2 = paterno.val().charAt(1).toUpperCase();
    let materno1 = materno.val().charAt(0).toUpperCase();
    let numero = Math.floor(Math.random()*999999);
    
    let numero_unico = paterno1+paterno2+materno1+numero;

    document.getElementById("txtNumeroUnicoEmpleado").value = numero_unico;
}
