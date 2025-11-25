let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    alert("hiciste click")

    let cajaUsuario=document.getElementById("cajausuario")
    let cajaCorreo=document.getElementById("cajacorreo")
    let cajaCuidad=document.getElementById("cajacuidad")
    let cajaTelefono=document.getElementById("cajatelefono")
    let cajaContraseña=document.getElementById("cajacontraseña")

    let datosDelFormulario={
        ususario:cajaUsuario.value,
        correo:cajaCorreo.value,
        cuidad:cajaCuidad.value,
        telefono:cajaTelefono.value,
        contraseña:cajaContraseña.value,
        
    }

    Swal.fire({
  title: "Bienvenido!",
  text: "Has sido registrado",
  icon: "success"
});
})