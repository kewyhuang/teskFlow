import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export function useTasks() {
  const contexto = useContext(TasksContext);
  if (!contexto) {
    throw new Error("useTasks deve ser usado dentro de TasksProvider");
  }
  return contexto;
}