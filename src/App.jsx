import { useState, useMemo, useCallback } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Filtro } from "./components/Filtro";
import { Contador } from "./components/Contador";
import { ThemeToggle } from "./components/ThemeToggle";
import { Toast } from "./components/Toast";

export default function App() {
  const { tarefas } = useTasks();
  const [filtro, setFiltro] = useState("todas");
  const [mensagem, setMensagem] = useState("");

  const tarefasFiltradas = useMemo(() => {
    if (filtro === "pendentes") {
      return tarefas.filter((t) => !t.concluida);
    }
    if (filtro === "concluidas") {
      return tarefas.filter((t) => t.concluida);
    }
    return tarefas;
  }, [tarefas, filtro]);

  const pendentes = useMemo(() => {
    return tarefas.filter((t) => !t.concluida).length;
  }, [tarefas]);

  const fecharMensagem = useCallback(() => {
    setMensagem("");
  }, []);

  const aoAdicionar = useCallback(() => {
    setMensagem("Tarefa adicionada!");
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1>TaskFlow</h1>
        <ThemeToggle />
      </header>

      <TaskForm onAdicionada={aoAdicionar} />
      <Contador pendentes={pendentes} total={tarefas.length} />
      <Filtro filtro={filtro} onChange={setFiltro} />
      <TaskList tarefas={tarefasFiltradas} />
      <Toast mensagem={mensagem} onFechar={fecharMensagem} />
    </div>
  );
}