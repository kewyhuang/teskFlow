import { useEffect } from "react";

export function Toast({ mensagem, onFechar }) {
  useEffect(() => {
    if (!mensagem) return;

    const timer = setTimeout(() => {
      onFechar();
    }, 3000);

    return () => clearTimeout(timer);
  }, [mensagem, onFechar]);

  if (!mensagem) return null;

  return <div className="toast">{mensagem}</div>;
}