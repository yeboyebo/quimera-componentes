import { PropsWithChildren } from "react";
import estilos from "./boton.module.css";

export interface BotonProps {
  tamaño?: "pequeño" | "mediano" | "grande";
  variante?: "texto" | "solido" | "borde";
  destructivo?: boolean;
  deshabilitado?: boolean;
  onClick?: () => void;
}

export const Boton = ({
  tamaño = "mediano",
  variante = "solido",
  destructivo = false,
  deshabilitado = false,
  onClick = () => {},
  children,
}: PropsWithChildren<BotonProps>) => {
  const clases = [
    estilos.boton,
    estilos[tamaño],
    estilos[variante],
    destructivo ? estilos.destructivo : "",
    deshabilitado ? estilos.deshabilitado : "",
  ].join(" ");

  return (
    <button
      type="button"
      className={clases}
      onClick={!deshabilitado ? onClick : undefined}
    >
      {children}
    </button>
  );
};
