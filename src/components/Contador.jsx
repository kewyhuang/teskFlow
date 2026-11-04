export function Contador({ pendentes, total }) {
  return (
    <p style={{ marginBottom: "12px", fontWeight: "bold" }}>
      Tarefas pendentes: {pendentes} de {total}
    </p>
  );
}