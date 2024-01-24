import { Button, useToast, Heading } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import React, { useState } from "react";

function UserForm() {
  const toast = useToast();
  const [newUser, setNewUser] = useState({
    name: { first: "", last: "" },
    email: "",
    zipcode: "",
    password: "",
  });
  const createUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4567/users/register`,
        newUser
      );
      toast({
        title: "nouvel Utilisateur 🏖",
        description: "Un Utilisateur à bien été ajouté avec succès",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
    <Box maxW="400px" m="auto" mt="4">
      <Heading as="h2" mb="4" textAlign="center">
        Ajouter un nouvel utilisateur
      </Heading>
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
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
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
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </FormControl>
        <Button type="submit" colorScheme="yellow">
          Crée utilisateur
        </Button>
      </form>
    </Box>
  );
}

export default UserForm;
