import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";

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
      console.log(response.data);
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
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Code Postal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user._id}>
                <Td>{user.fullname}</Td>
                <Td>{user.email}</Td>
                <Td>{user.zipcode}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box p={4} maxW="md" borderWidth="1px" borderRadius="lg">
          <h2>Créer un nouvel utilisateur </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createUser();
            }}
          >
            <FormControl mb={4} isRequired>
              <FormLabel>Prenom:</FormLabel>
              <Input
                type="text"
                value={newUser.name.first}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    name: { ...newUser.name, first: e.target.value },
                  })
                }
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Nom:</FormLabel>
              <Input
                type="text"
                value={newUser.name.last}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    name: { ...newUser.name, last: e.target.value },
                  })
                }
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Email:</FormLabel>

              <Input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>Code Postal:</FormLabel>
              <Input
                type="number"
                value={newUser.zipcode}
                onChange={(e) =>
                  setNewUser({ ...newUser, zipcode: e.target.value })
                }
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>Mot de passe:</FormLabel>
              <Input
                type="text"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </FormControl>

            <Button type="submit" colorScheme="teal">
              Créer
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
}

export default App;
