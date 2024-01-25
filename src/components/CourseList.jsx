import { Box, Button, Heading, List, ListItem, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:4567/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Erreur du fetch des cours: ", error.message);
      }
    };
    fetchCourses();
  }, []);

  const joinCourse = async (courseId) => {
    try {
      const response = await axios.post(
        `http://localhost:4567/courses/${courseId}/join`
      );
      setCourses((previousCourses) =>
        previousCourses.map((course) =>
          course._id === courseId ? { ...course, joined: true } : course
        )
      );
    } catch (error) {
      console.error("Erreur de joignage", error.message)
    }
  };
  return (
    <Box p={8} maxW={800} mx="auto" mt={10}>
      <Heading mb={6}>Les Cours disponibles</Heading>
      <List spacing={3}>
        {courses.map((course) => (
          <ListItem key={course._id} borderWidth={1} p={4} borderRadius="md">
            <Heading fontSize="lg">{course.title}</Heading>
            <Text>{course.description}</Text>
            <Text> Nombre d'etudiants: {course.maxStudents}</Text>
            <Text> Coût: {course.cost}</Text>
            {course.joined ? (
              <Text color="green.500">Vous avez rejoint ce cours</Text>
            ) : (
              <Box display="flex" justifyContent="flex-end">
                <Button colorScheme="teal"  onClick={() => joinCourse(course._id)}>
                Rejoindre le cours
              </Button>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CourseList;
