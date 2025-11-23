import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/api/accounts";

export default function AccountForm({ onCreated }) {
  const [idNumber, setIdNumber] = useState("");
  const [accountId, setAccountId] = useState("");
  const [type, setType] = useState("Ahorro");
  const [message, setMessage] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, { idNumber, accountId, type });
      setMessage("Cuenta creada con éxito");
      onCreated();
    } catch (err) {
      setMessage(err.response?.data?.error || "Error al crear cuenta");
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "auto", textAlign: "center" }}>
      <h3>Apertura de Cuenta</h3>
      <form onSubmit={createAccount}>
        <input
          placeholder="Identificación usuario"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <input
          placeholder="ID de cuenta"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Ahorro</option>
          <option>Corriente</option>
          <option>CDT</option>
        </select>
        <button type="submit">Crear</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
