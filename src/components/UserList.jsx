import { Button } from "@chakra-ui/button"
import { Box, List, ListItem } from "@chakra-ui/layout"
import { Link as RouterLink } from "react-router-dom";

function UserList({users}) {
  return (
    <Box>
    <List>
      {users.map((user)=>(
        <ListItem key={user._id}borderBottom="1px" borderColor="gray.200" py="2">
          <Box>{user.fullname}</Box>
          </ListItem>
      ))}
    </List>
    <Button as={RouterLink} to="/users/create" variant='ghost' colorScheme="orange">
    Créer un utilisateur
  </Button>
  </Box>
  )
  
}

// <Table variant="striped" colorScheme="teal">
{/* <Thead>
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
</Table> */}
export default UserList