import React, { useState } from "react";
import { User } from "../../types/userTypes";
import "./UserTable.css";

interface UserTableProps {
  users: User[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [nameSearch, setNameSearch] = useState<string>("");
  const [emailSearch, setEmailSearch] = useState<string>("");
  const [citySearch, setCitySearch] = useState<string>("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
    user.email.toLowerCase().includes(emailSearch.toLowerCase()) &&
    user.address.city.toLowerCase().includes(citySearch.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="search-input"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Buscar por correo"
          className="search-input"
          value={emailSearch}
          onChange={(e) => setEmailSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Buscar por ciudad"
          className="search-input"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="empty-row">
                No se encontraron usuarios con los criterios de búsqueda.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

