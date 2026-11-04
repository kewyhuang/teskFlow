export function lerTarefasSalvas() {
  try {
    const salvas = localStorage.getItem("taskflow-tarefas");
    return salvas ? JSON.parse(salvas) : [];
  } catch (erro) {
    console.error("Erro ao ler tarefas do localStorage:", erro);
    return [];
  }
}