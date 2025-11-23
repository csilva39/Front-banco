export default function AccountList({ accounts }) {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        marginTop: "20px",
      }}
    >
      <h3
        style={{
          marginBottom: "16px",
          borderBottom: "2px solid #e5e7eb",
          paddingBottom: "8px",
          color: "#111827",
          fontSize: "1.25rem",
        }}
      >
        Listado de Cuentas
      </h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead style={{ backgroundColor: "#f3f4f6" }}>
          <tr>
            <th style={thStyle}>ID de Cuenta</th>
            <th style={thStyle}>Tipo</th>
            <th style={thStyle}>Saldo</th>
            <th style={thStyle}>Titular</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((a) => (
            <tr key={a.accountId} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td style={tdStyle}>{a.accountId}</td>
              <td style={tdStyle}>{a.type}</td>
              <td style={{ ...tdStyle, color: "#16a34a", fontWeight: "500" }}>
                ${a.balance.toLocaleString("es-CO")}
              </td>
              <td style={tdStyle}>{a.names}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "12px 16px",
  fontWeight: "600",
  color: "#374151",
  fontSize: "0.95rem",
  borderBottom: "2px solid #e5e7eb",
};

const tdStyle = {
  padding: "12px 16px",
  fontSize: "0.9rem",
  color: "#1f2937",
};
