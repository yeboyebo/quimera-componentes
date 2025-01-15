import "../index.css";

export enum EstadoTarea {
  Pendiente = "Tarea_Pendiente",
  Completada = "Tarea_Completada",
  Fijada = "Tarea_Fijada",
}

export type TareaT = {
  id: string;
  titulo: string;
  estado: EstadoTarea;
};

type TareaProps = {
  tarea: TareaT;
  onCompletar: (id: string) => void;
  onFijar: (id: string) => void;
};

export default function Tarea({
  tarea: { id, titulo, estado },
  onCompletar,
  onFijar,
}: TareaProps) {
  return (
    <div className={`elemento-lista ${estado}`}>
      <label
        htmlFor={`completarTarea-${id}`}
        aria-label={`completarTarea-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`completarTarea-${id}`}
          checked={estado === EstadoTarea.Completada}
        />
        <span className="checkbox-custom" onClick={() => onCompletar(id)} />
      </label>

      <label htmlFor={`titulo-${id}`} aria-label={titulo} className="titulo">
        <input
          type="text"
          value={titulo}
          readOnly={true}
          name="titulo"
          id={`titulo-${id}`}
          placeholder="Introduce el título de la tarea"
        />
      </label>

      {estado !== EstadoTarea.Completada && (
        <button
          className="boton-fijar"
          onClick={() => onFijar(id)}
          id={`fijarTarea-${id}`}
          aria-label={`fijarTarea-${id}`}
          key={`fijarTarea-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}
