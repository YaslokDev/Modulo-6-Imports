import { puntuacion, sumarPuntuacion, resetearPuntuacion } from "./motor";
import { generarNumeroCarta, obtenerNumeroAleatorio, obtenerUrlCarta } from "./model";

const imagenCarta = document.getElementById("imagenCarta");
export const btnDameCarta = document.getElementById("dameCarta");
export const btnPlantarse = document.getElementById("plantarse");
const btnNuevaPartida = document.getElementById("restart");
const btnVerResultado = document.getElementById("verResultado");
export const divPuntuacion = document.getElementById("puntuacion");
const divNuevaPartida = document.getElementById("nuevaPartida");

export const mostrarCartaEnHTML = (url: string): void => {
  if (imagenCarta && imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = url;
    imagenCarta.classList.add("card-animation");
    imagenCarta.addEventListener(
      "animationend",
      () => {
        imagenCarta.classList.remove("card-animation");
      },
      { once: true }
    );
  }
};

export const obtenerMensajePuntuacion = (puntuacion: number): string => {
  if (puntuacion <= 4 || puntuacion < 5) {
    return "Has sido muy conservador";
  } else if (puntuacion === 5 || puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion === 6 || puntuacion <= 7) {
    return "Casi casi...";
  } else if (puntuacion === 7.5) {
    return "<strong>¡Lo has clavado! ¡Enhorabuena! 🎉🎉</strong>";
  }
  return "";
};

export const muestraPuntuacion = (): void => {
  if (divPuntuacion !== null) {
    divPuntuacion.innerHTML = `Tu puntuación actual es : ${puntuacion.toString()}`;
  }
};

export const deshabilitarBotones = (): void => {
  if (
    btnDameCarta !== null &&
    btnDameCarta !== undefined &&
    btnDameCarta instanceof HTMLButtonElement &&
    btnPlantarse !== null &&
    btnPlantarse !== undefined &&
    btnPlantarse instanceof HTMLButtonElement
  ) {
    btnDameCarta.disabled = true;
    btnPlantarse.disabled = true;
  }
};

export const dameCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const cartaGenerada = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(cartaGenerada);
  mostrarCartaEnHTML(urlCarta);
  sumarPuntuacion(cartaGenerada);
};

export const plantarse = (): void => {
  deshabilitarBotones();
  const mensaje = obtenerMensajePuntuacion(puntuacion);
  if (divPuntuacion !== null) {
    divPuntuacion.innerHTML = `Tu puntuación fue ${puntuacion}. ${mensaje}`;
  }
  nuevaPartida();
  if (btnVerResultado !== null && btnVerResultado !== undefined && btnVerResultado instanceof HTMLButtonElement) {
    btnVerResultado.hidden = false;
    btnVerResultado.addEventListener("click", verResultado);
  }
};

export const verResultado = (): void => {
  dameCarta();
  if (puntuacion > 7.5 && divPuntuacion !== null) {
    divPuntuacion.innerHTML = `Tu puntuación es ${puntuacion.toString()}, <strong>GAME OVER</strong>`;
  }
  if (btnVerResultado !== null && btnVerResultado !== undefined && btnVerResultado instanceof HTMLButtonElement) {
    btnVerResultado.hidden = true;
  }
};

export const nuevaPartida = (): void => {
  if (
    divNuevaPartida !== null &&
    btnNuevaPartida !== null &&
    btnNuevaPartida !== undefined &&
    btnNuevaPartida instanceof HTMLButtonElement
  ) {
    btnNuevaPartida.hidden = false;
    btnNuevaPartida.addEventListener("click", reiniciar);
  }
};

export const reiniciar = (): void => {
  resetearPuntuacion();
  if (imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = false;
  }
  if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.disabled = false;
  }
  if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.hidden = true;
  }
  if (btnVerResultado !== null && btnVerResultado !== undefined && btnVerResultado instanceof HTMLButtonElement) {
    btnVerResultado.hidden = true;
  }
  muestraPuntuacion();
};

export const finalizarJuego = (): void => {
  if (divPuntuacion !== null) {
    divPuntuacion.innerHTML = `Tu puntuación es ${puntuacion.toString()}, <strong>GAME OVER</strong>`;
  }
  deshabilitarBotones();
  nuevaPartida();
};

export const partida = {
  iniciar: (): void => {
    resetearPuntuacion();
    muestraPuntuacion();
    if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
      btnDameCarta.disabled = false;
    }
    if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
      btnPlantarse.disabled = false;
    }
    if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
      btnNuevaPartida.hidden = true;
    }
    if (btnVerResultado !== null && btnVerResultado !== undefined && btnVerResultado instanceof HTMLButtonElement) {
      btnVerResultado.hidden = true;
    }
    if (imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
  },
};
