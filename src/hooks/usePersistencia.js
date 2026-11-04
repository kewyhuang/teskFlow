import { useEffect } from "react";

export function usePersistencia(tarefas, dispatch) {
  // Efeito 1: roda UMA vez ao abrir a aplicação (array vazio proposital)
  useEffect(() => {
    if (tarefas.length > 0) return;

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((dados) => {
        const tarefasFormatadas = dados.map((item) => ({
          id: item.id,
          texto: item.title,
          concluida: item.completed,
        }));
        dispatch({ type: "SET", tarefas: tarefasFormatadas });
      })
      .catch((erro) => {
        console.error("Falha de rede ao procurar tarefas iniciais:", erro);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Efeito 2: roda sempre que a lista de tarefas mudar
  useEffect(() => {
    try {
      localStorage.setItem("taskflow-tarefas", JSON.stringify(tarefas));
    } catch (erro) {
      console.error("Erro ao guardar tarefas:", erro);
    }
  }, [tarefas]);
}