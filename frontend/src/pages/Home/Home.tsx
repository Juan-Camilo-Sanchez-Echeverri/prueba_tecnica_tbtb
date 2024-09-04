import React from "react";

import { useFetchUsers } from "../../hooks/useFetchUsers";
import { UserTable } from "../../components/UserTable/UserTable";

import "./Home.css";

export const Home: React.FC = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Lista de Usuarios</h1>
      <UserTable users={users} />
    </div>
  );
};

