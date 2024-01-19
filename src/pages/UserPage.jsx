import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import UserList from "../components/UserList";

const UserPage = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <Box p="4">
      <Heading as="h2" mb="4">
        Liste des Utilisateurs:
      </Heading>
      <UserList users={users} />
    </Box>
  );
};

export default UserPage;
