export const obtenerNumeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

export const generarNumeroCarta = (numeroAleatorio: number): number =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const obtenerUrlCarta = (carta: number): string => {
  const baseCartaUrl = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";

  switch (carta) {
    case 1:
      return baseCartaUrl + "1_as-copas.jpg";
    case 2:
      return baseCartaUrl + "2_dos-copas.jpg";
    case 3:
      return baseCartaUrl + "3_tres-copas.jpg";
    case 4:
      return baseCartaUrl + "4_cuatro-copas.jpg";
    case 5:
      return baseCartaUrl + "5_cinco-copas.jpg";
    case 6:
      return baseCartaUrl + "6_seis-copas.jpg";
    case 7:
      return baseCartaUrl + "7_siete-copas.jpg";
    case 10:
      return baseCartaUrl + "10_sota-copas.jpg";
    case 11:
      return baseCartaUrl + "11_caballo-copas.jpg";
    case 12:
      return baseCartaUrl + "12_rey-copas.jpg";
    default:
      return "";
  }
};

export const obtenerPuntosCarta = (carta: number): number => (carta >= 10 ? 0.5 : carta);