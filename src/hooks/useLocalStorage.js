import { useState, useEffect, useDebugValue } from "react";

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const itemSalvo = localStorage.getItem(chave);
      return itemSalvo ? JSON.parse(itemSalvo) : valorInicial;
    } catch (erro) {
      console.error("Erro ao ler o localStorage:", erro);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      console.error("Erro ao guardar no localStorage:", erro);
    }
  }, [chave, valor]);

  useDebugValue(valor);

  return [valor, setValor];
}