import { mostrarPuntuacion, btnDameCarta, btnPlantarse } from "./ui";
import { dameCarta, plantarse } from "./motor";

document.addEventListener("DOMContentLoaded", mostrarPuntuacion);
if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", dameCarta);
}
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
  btnPlantarse.addEventListener("click", plantarse);
}
