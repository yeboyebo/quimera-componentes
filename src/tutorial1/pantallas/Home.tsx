import { useEffect, useState } from "react";
import "../index.css";
import ListaTareas from "../ListaTareas/ListaTareas.tsx";
import { EstadoTarea, TareaT } from "../Tarea/Tarea.tsx";

type HomeProps = {
  error: boolean;
  initialData: TareaT[];
};

const actualizarEstado = (
  tareas: TareaT[],
  id: string,
  estado: EstadoTarea
): TareaT[] => {
  return tareas.map((tarea) => {
    if (tarea.id === id) {
      return { ...tarea, estado };
    }
    return tarea;
  });
};

export default function Home({ error, initialData }: HomeProps) {
  const [data, setData] = useState(initialData);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 500);
  }, []);

  if (error) {
    return (
      <div className="pagina listas">
        <div className="contenedor-mensaje">
          <span className="icon-face-sad" />
          <p className="titulo-mensaje">Oh no!</p>
          <p className="subtitulo-mensaje">Algo fue mal</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina listas">
      <nav>
        <h1 className="titulo-pagina">Tareas</h1>
      </nav>
      <ListaTareas
        tareas={data}
        cargando={cargando}
        onFijar={(id) =>
          setData(actualizarEstado(data, id, EstadoTarea.Fijada))
        }
        onCompletar={(id) =>
          setData(actualizarEstado(data, id, EstadoTarea.Completada))
        }
      />
    </div>
  );
}
