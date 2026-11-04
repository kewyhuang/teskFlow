import { useTasks } from "../hooks/useTasks";

export function TaskItem({ tarefa }) {
  const { alternar, remover } = useTasks();

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid var(--destaque)",
      }}
    >
      <span
        onClick={() => alternar(tarefa.id)}
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
        }}
      >
        {tarefa.texto}
      </span>
      <button onClick={() => remover(tarefa.id)} type="button">
        Remover
      </button>
    </li>
  );
}