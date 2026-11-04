import { useState, useRef, useEffect } from "react";
import { useTasks } from "../hooks/useTasks";

export function TaskForm({ onAdicionada }) {
  const [texto, setTexto] = useState("");
  const inputRef = useRef(null);
  const { adicionar } = useTasks();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function enviar(e) {
    e.preventDefault();
    const textoLimpo = texto.trim();
    if (!textoLimpo) return;

    adicionar(textoLimpo);
    setTexto("");
    inputRef.current?.focus();
    if (onAdicionada) onAdicionada();
  }

  return (
    <form onSubmit={enviar} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma nova tarefa..."
        style={{ flex: 1 }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}