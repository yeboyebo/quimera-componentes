import estilos from "./input.module.css";

export interface InputProps {
  label: string;
  placeholder?: string;
  textoValidacion?: string;
  opcional?: boolean;
  erroneo?: boolean;
  advertido?: boolean;
  valido?: boolean;
  deshabilitado?: boolean;
  valor?: string;
}

export const Input = ({
  label,
  placeholder = "",
  textoValidacion = "",
  opcional = false,
  erroneo = false,
  advertido = false,
  valido = false,
  deshabilitado = false,
  valor,
}: InputProps) => {
  const clases = [
    estilos.input,
    opcional ? estilos.opcional : "",
    erroneo ? estilos.erroneo : "",
    advertido ? estilos.advertido : "",
    valido ? estilos.valido : "",
    deshabilitado ? estilos.deshabilitado : "",
  ].join(" ");

  return (
    <label className={clases}>
      <span className={estilos.etiqueta}>
        {label}
        <span className={estilos.etiqueta_opcional}>(opcional)</span>
      </span>
      <input type="text" placeholder={placeholder} defaultValue={valor} />
      <span className={estilos.texto_validacion}>{textoValidacion}</span>
    </label>
  );
};
