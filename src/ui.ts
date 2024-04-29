import { dameCarta, resetearPuntuacion, puntuacion } from "./motor";

const imagenCarta = document.getElementById("imagenCarta");
export const btnDameCarta = document.getElementById("dameCarta");
export const btnPlantarse = document.getElementById("plantarse");
const btnNuevaPartida = document.getElementById("restart");
export const btnVerResultado = document.getElementById("verResultado");
export const divPuntuacion = document.getElementById("puntuacion");
const divNuevaPartida = document.getElementById("nuevaPartida");

export const mostrarCartaEnHTML = (url: string): void => {
  if (imagenCarta != null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {
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

export const mostrarPuntuacion = (): void => {
  if (divPuntuacion !== null && divPuntuacion !== undefined && divPuntuacion instanceof HTMLDivElement) {
    divPuntuacion.innerHTML = `Tu puntuación actual es: ${puntuacion.toString()}`;
  }
};

export const finalizarJuego = (): void => {
  if (divPuntuacion !== null && divPuntuacion !== undefined && divPuntuacion instanceof HTMLDivElement) {
    divPuntuacion.innerHTML = `Tu puntuación es ${puntuacion.toString()}, <strong>GAME OVER</strong>`;
  }
  deshabilitarBotones();
  mostrarNuevaPartida();
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

export const verResultado = (): void => {
  dameCarta();
  if (puntuacion > 7.5 && divPuntuacion !== null) {
    divPuntuacion.innerHTML = `Tu puntuación es ${puntuacion.toString()}, <strong>GAME OVER</strong>`;
  }
  if (btnVerResultado !== null && btnVerResultado !== undefined && btnVerResultado instanceof HTMLButtonElement) {
    btnVerResultado.hidden = true;
  }
};

export const mostrarNuevaPartida = (): void => {
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

const reiniciar = (): void => {
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
  mostrarPuntuacion();
};
