function mostrarEnvio(){
    alert('Gracias por contactarme, te responderé lo antes posible')
    console.log('enviado')
}

// Agrega un listener al botón para ejecutar la función mostrarEnvio cuando se haga
// clic
document.getElementById("btn-enviar").addEventListener("click", mostrarEnvio);