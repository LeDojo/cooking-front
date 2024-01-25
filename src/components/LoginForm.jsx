import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:4567/users/login", {
        email,
        password,
      });
      console.log(response.data)
      const { token } = response.data;
      const decodedUser = jwtDecode(token);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      console.log("User connecté : ", decodedUser);
      toast({
        title: "Connexion reussi! 👍",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate('/')
    } catch (error) {
      console.error("Erreur lors du login: ", error.message);
      toast({
        title: "Erreur de connexion 💥",
        description: "email ou mot de passe invalides",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8} maxWidth="400px" mx="auto" mt={20}>
      <Heading mb={6}>Connexion</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="entrer votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              placeholder="entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Connexion
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginForm;
