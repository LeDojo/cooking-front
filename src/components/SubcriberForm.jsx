import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

const SubscriberForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box maxW="400px" m="auto" mt="4">
      <Heading as="h2" mb="4" textAlign="center">
        Create a new subscriber
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel htmlFor="inputName">Name</FormLabel>
          <Input
            type="text"
            name="name"
            id="inputName"
            placeholder="Name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel htmlFor="inputEmail">Email address</FormLabel>
          <Input
            type="email"
            name="email"
            id="inputEmail"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel htmlFor="inputZipCode">Zip Code</FormLabel>
          <Input
            type="text"
            name="zipCode"
            id="inputZipCode"
            pattern="[0-9]{5}"
            placeholder="Zip Code"
            required
            value={formData.zipCode}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Create
        </Button>
      </form>
    </Box>
  );
};

export default SubscriberForm;