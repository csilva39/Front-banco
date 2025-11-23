import React, { useState } from "react";
import axios from "axios";

const API = "https://back-banco.onrender.com/api/users";
// const API = "http://localhost:3000/api/users";

export default function UserForm() {
  const [userId, setUserId] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [names, setNames] = useState("");
  const [message, setMessage] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, { idNumber, names });
      setMessage("Usuario registrado correctamente");
    } catch (err) {
      setMessage(err.response?.data?.error || "Error al registrar");
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`${API}/${userId}`, { idNumber, names });
      setMessage("Usuario actualizado correctamente");
    } catch (err) {
      setMessage(err.response?.data?.error || "Error al actualizar");
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`${API}/${userId}`);
      setMessage("Usuario eliminado correctamente");
    } catch (err) {
      setMessage(
        err.response?.data?.error ||
          "Error al eliminar (¿Tiene saldo o no existe?)"
      );
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "auto", textAlign: "center" }}>
      <h3>Gestión de Usuarios</h3>

      <input
        placeholder="ID del usuario (para actualizar/eliminar)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <form onSubmit={register}>
        <input
          placeholder="Identificación"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <input
          placeholder="Nombres"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>

      <br />

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={updateUser}>Actualizar</button>
        <button onClick={deleteUser}>Eliminar</button>
      </div>

      <p>{message}</p>
    </div>
  );
}
