import { btnDameCarta, dameCarta, btnPlantarse, plantarse, partida } from "./ui";

document.addEventListener("DOMContentLoaded", partida.iniciar);
if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
  btnDameCarta.addEventListener("click", dameCarta);
}
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
  btnPlantarse.addEventListener("click", plantarse);
}
