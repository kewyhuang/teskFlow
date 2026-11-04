import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { tema, alternarTema } = useTheme();

  return (
    <button onClick={alternarTema} type="button">
      Tema: {tema === "claro" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}