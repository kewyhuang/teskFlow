export function Filtro({ filtro, onChange }) {
  const opcoes = [
    { valor: "todas", rotulo: "Todas" },
    { valor: "pendentes", rotulo: "Pendentes" },
    { valor: "concluidas", rotulo: "Concluídas" },
  ];

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      {opcoes.map((op) => (
        <button
          key={op.valor}
          type="button"
          onClick={() => onChange(op.valor)}
          style={{
            opacity: filtro === op.valor ? 1 : 0.6,
            border: filtro === op.valor ? "2px solid var(--texto)" : "none",
          }}
        >
          {op.rotulo}
        </button>
      ))}
    </div>
  );
}