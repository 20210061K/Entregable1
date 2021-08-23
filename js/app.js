var estado = "apagado";
var sonidoOn = document.getElementById("boton-sonidoOn");
var sonidoOff = document.getElementById("boton-sonidoOff");
var arrocera = document.getElementById("arrocera");

function control() {
  if (estado === "apagado") {
    estado = "encendido";
    palancaOn();
    arrocera.classList.remove("desconectado");
    arrocera.classList.remove("calentando");
    arrocera.classList.add("active");
  } else {
    estado = "apagado";
    palancaOff();
    arrocera.classList.remove("active");
    arrocera.classList.add("calentando");
  }
}

function palancaOn() {
  sonidoOn.play();
  sonidoOff.currentTime = 0;
}

function palancaOff() {
  sonidoOff.play();
  sonidoOn.currentTime = 0;
}

function apagadoTotal() {
  if(estado ==="encendido"){
    sonidoOff.play();
  }
  estado = "apagado";
  arrocera.classList.add("desconectado");
}
