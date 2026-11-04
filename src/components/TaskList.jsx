import { TaskItem } from "./TaskItem";

export function TaskList({ tarefas }) {
  if (tarefas.length === 0) {
    return <p style={{ margin: "16px 0" }}>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul style={{ listStyle: "none", margin: "16px 0" }}>
      {tarefas.map((tarefa) => (
        <TaskItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}