import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
function Navbar() {
  return (
    <Box as="nav" p="4" bg="white" color="black">
      <Flex justify="space-between">
        <Heading as="h1" fontSize="x1" mr="4">
          Confetti Cooking
        </Heading>
        <Flex align="center">
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link as={RouterLink} to="/courses">
            Cooking Courses
          </Link>
          <Link as={RouterLink} to="/users">
            Users
          </Link>
          <Link as={RouterLink} to="/subscribers">
            Subscribers
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
