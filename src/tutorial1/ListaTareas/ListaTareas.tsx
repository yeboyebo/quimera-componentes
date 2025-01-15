import "../index.css";
import Tarea, { EstadoTarea, type TareaT } from "../Tarea/Tarea.tsx";

type ListaTareasProps = {
  cargando?: boolean;
  tareas: TareaT[];
  onFijar: (id: string) => void;
  onCompletar: (id: string) => void;
};

export default function ListaTareas({
  cargando = false,
  tareas,
  onFijar,
  onCompletar,
}: ListaTareasProps) {
  const eventos = {
    onFijar,
    onCompletar,
  };

  const FilaCarga = (
    <div className="elemento-carga">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Cargando...</span> <span>estado</span> <span>to guapo</span>
      </span>
    </div>
  );

  if (cargando) {
    return (
      <div className="elementos-lista" data-testid="cargando" key={"cargando"}>
        {FilaCarga}
        {FilaCarga}
        {FilaCarga}
        {FilaCarga}
        {FilaCarga}
        {FilaCarga}
      </div>
    );
  }

  if (tareas.length === 0) {
    return (
      <div className="elementos-lista" data-testid="vacio" key={"vacio"}>
        <div className="contenedor-mensaje">
          <span className="icon-check" />
          <p className="titulo-mensaje">No tienes tareas</p>
          <p className="subtitulo-mensaje">Siéntate y relájate</p>
        </div>
      </div>
    );
  }

  const tareasEnOrden = [
    ...tareas.filter((t) => t.estado === EstadoTarea.Fijada),
    ...tareas.filter((t) => t.estado !== EstadoTarea.Fijada),
  ];

  return (
    <div className="elementos-lista" data-testid="tareas" key={"tareas"}>
      {tareasEnOrden.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} {...eventos} />
      ))}
    </div>
  );
}
