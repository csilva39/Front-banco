import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/api/accounts";

export default function TransactionForm({ onUpdated }) {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("deposit");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/${accountId}/${action}`, {
        monto: parseFloat(amount),
      });

      setMessage(`${action === "deposit" ? "Consignación" : "Retiro"} exitosa`);
      setAmount("");
      setAccountId("");
      onUpdated && onUpdated();
    } catch (err) {
      setMessage(err.response?.data?.error || "Error en transacción");
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "auto", textAlign: "center" }}>
      <h3>Transacciones</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="ID de cuenta"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          required
        />
        <input
          placeholder="Monto"
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select
          value={action}
          onChange={(e) => setAction(e.target.value)}
          style={{ margin: "8px 0" }}
        >
          <option value="deposit">Consignar</option>
          <option value="withdraw">Retirar</option>
        </select>
        <button type="submit">Ejecutar</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
