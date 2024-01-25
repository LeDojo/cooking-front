import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"))
  const handleLogout = async () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Box as="nav" p="4" bg="gray" color="black">
      <Flex justify="space-between">
        <Heading as="h1" fontSize="x1" mr="4">
          Confetti Cooking
        </Heading>
        <Flex align="center">
          <Link as={RouterLink} to="/" p="4">
            Home
          </Link>
          <Link as={RouterLink} to="/courses" p="4">
            Cooking Courses
          </Link>
          <Link as={RouterLink} to="/users" p="4">
            Users
          </Link>
          <Link as={RouterLink} to="/subscribers" p="4">
            Subscribers
          </Link>
          {userData ? (
            <>
              <Text mr={4}>{userData.email}</Text>
              <Button onClick={handleLogout} size="xs">
                Deconnexion
              </Button>
            </>
          ) : (
            <Button as={RouterLink} to="/login" size="xs">
              Connexion
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
