import { useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";

export function TesteReducer() {
  const [tarefas, dispatch] = useReducer(tasksReducer, []);

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", margin: "16px 0" }}>
      <h3>Teste do Reducer (Papel 2)</h3>
      <button onClick={() => dispatch({ type: "ADD", texto: "Estudar hooks" })}>
        Adicionar Tarefa
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "SET",
            tarefas: [{ id: 1, texto: "Tarefa da API", concluida: false }],
          })
        }
      >
        Testar SET
      </button>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.concluida ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "8px",
              }}
              onClick={() => dispatch({ type: "TOGGLE", id: t.id })}
            >
              {t.texto}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE", id: t.id })}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}