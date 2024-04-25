import { btnDameCarta, muestraPuntuacion, dameCarta, btnPlantarse, plantarse } from "./ui";

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", dameCarta);
}
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
  btnPlantarse.addEventListener("click", plantarse);
}
