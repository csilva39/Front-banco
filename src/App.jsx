import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/Registro";
import AccountForm from "./components/AbrirCuenta";
import TransactionForm from "./components/Movimientos";
import AccountList from "./components/ListaCuentas";

const API = "http://localhost:3000/api";

export default function App() {
  const [accounts, setAccounts] = useState([]);

  const loadAccounts = async () => {
    const res = await axios.get(`${API}/accounts`);
    setAccounts(res.data);
  };

  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <div
      style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}
    >
      <h1>MiniBanco - Areandina</h1>
      <UserForm />
      <hr />
      <AccountForm onCreated={loadAccounts} />
      <hr />
      <TransactionForm onUpdated={loadAccounts} />
      <hr />
      <AccountList accounts={accounts} />
    </div>
  );
}
