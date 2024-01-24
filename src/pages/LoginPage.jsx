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
import {  useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const toast = useToast();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/courses");
    } catch (error) {
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
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              placeholder="entrez votre mot de passe"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Connexion
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default LoginPage;
