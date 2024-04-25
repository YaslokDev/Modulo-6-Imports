import { obtenerPuntosCarta } from "./model";
import { muestraPuntuacion, finalizarJuego, divPuntuacion } from "./ui";

export let puntuacion: number = 0;

export const sumarPuntuacion = (carta: number): void => {
  puntuacion += obtenerPuntosCarta(carta);
  muestraPuntuacion();
  if (puntuacion > 7.5 && divPuntuacion !== null) {
    finalizarJuego();
  }
};

export const resetearPuntuacion = (): void => {
  puntuacion = 0;
};
