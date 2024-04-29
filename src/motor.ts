import {
  obtenerNumeroAleatorio,
  generarNumeroCarta,
  obtenerPuntosCarta,
  obtenerUrlCarta,
  obtenerMensajePuntuacion,
} from "./model";
import {
  mostrarCartaEnHTML,
  deshabilitarBotones,
  mostrarNuevaPartida,
  divPuntuacion,
  btnVerResultado,
  verResultado,
  finalizarJuego,
  mostrarPuntuacion,
} from "./ui";

export let puntuacion: number = 0;

export const dameCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const cartaGenerada = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(cartaGenerada);
  mostrarCartaEnHTML(urlCarta);
  actualizarPuntuacion(cartaGenerada);
  comprobarPuntuacion();
};

export const plantarse = (): void => {
  deshabilitarBotones();
  const mensaje = obtenerMensajePuntuacion(puntuacion);
  if (divPuntuacion !== null && divPuntuacion !== undefined && divPuntuacion instanceof HTMLDivElement) {
    divPuntuacion.innerHTML = `Tu puntuación fue ${puntuacion}. ${mensaje}`;
  }
  comprobarPuntuacion();
  mostrarNuevaPartida();
  if (btnVerResultado !== null && btnVerResultado !== undefined && btnVerResultado instanceof HTMLButtonElement) {
    btnVerResultado.hidden = false;
    btnVerResultado.addEventListener("click", verResultado);
  }
};

const comprobarPuntuacion = (): void => {
  if (puntuacion > 7.5) {
    finalizarJuego();
  }
};

const actualizarPuntuacion = (carta: number): void => {
  puntuacion += obtenerPuntosCarta(carta);
  mostrarPuntuacion();
};

export const resetearPuntuacion = (): void => {
  puntuacion = 0;
};
