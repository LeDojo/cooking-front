import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: { first: "", last: "" },
    email: "",
    zipcode: "",
    password: "",
  });
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4567/users/");
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.log("Erreur lors de la recupération des utilisateurs");
    }
  };

  const createUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4567/users/register`,
        newUser
      );
      setUsers([...users, response.data]);
      setNewUser({
        name: { first: "", last: "" },
        email: "",
        zipcode: "",
        password: "",
      });
    } catch (error) {
      console.error("Erreur");
    }
  };

  return (
    <>
      <div>
      <h2>Liste des Utilisateurs: </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Code Postal</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <h2>Créer un nouvel utilisateur </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser();
          }}
        >
          <label>
            Prenom:
            <input
              type="text"
              value={newUser.name.first}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  name: { ...newUser.name, first: e.target.value },
                })
              }
            />
          </label>
          <br />
          <label>
            Nom:
            <input
              type="text"
              value={newUser.name.last}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  name: { ...newUser.name, last: e.target.value },
                })
              }
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Code Postal:
            <input
              type="number"
              value={newUser.zipcode}
              onChange={(e) =>
                setNewUser({ ...newUser, zipcode: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Mot de passe:
            <input
              type="text"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </label>
          <br />
          <button type="submit">Créer</button>
        </form>
      </div>
    </>
  );
}

export default App;
