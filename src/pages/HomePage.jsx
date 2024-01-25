import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto" mt={20}>
      <Heading mb={6}>Voyage Culinaire : Un Monde de Saveurs dans Chaque Plat</Heading>

      {/* Image 1 */}
      <Image src="https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cuisine 1" mb={4} />

      <VStack spacing={6}>
        {/* Chapitre 1 */}
        <Text fontSize="lg">
          <strong>Chapitre 1: L'Éveil des Papilles</strong>
        </Text>
        <Text>
          Dans une petite cuisine chaleureuse, le crépitement des poêles, le parfum envoûtant des épices, et le joyeux murmure des ingrédients qui se mêlent remplissent l'air. Bienvenue dans le monde magique des cours de cuisine. C'est bien plus qu'une simple leçon de cuisine - c'est une aventure culinaire où chaque plat est une porte ouverte vers un monde de saveurs exquises.
        </Text>

        {/* Image 2 */}
        <Image src="https://images.unsplash.com/photo-1430931071372-38127bd472b8?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cuisine 2" mb={4} />

        {/* Chapitre 2 */}
        <Text fontSize="lg">
          <strong>Chapitre 2: Les Secrets des Chefs Révélés</strong>
        </Text>
        <Text>
          Imaginez-vous aux côtés de chefs passionnés, des maîtres-cuisiniers dévoilant les mystères de leurs recettes secrètes. Apprenez les techniques qui transforment des ingrédients simples en œuvres d'art gastronomiques. Des mains expertes guident les vôtres, vous enseignant chaque coupe, chaque mélange, chaque astuce pour élever vos compétences culinaires.
        </Text>

        {/* Image 3 */}
        <Image src="https://images.unsplash.com/photo-1605433247501-698725862cea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cuisine 3" mb={4} />

        {/* Chapitre 3 */}
        <Text fontSize="lg">
          <strong>Chapitre 3: La Découverte de Nouvelles Cultures</strong>
        </Text>
        <Text>
          Les cours de cuisine ne se limitent pas à la préparation des plats. C'est une exploration des cultures du monde à travers la nourriture. Voyagez en Italie avec des pâtes fraîches, plongez dans les saveurs épicées de l'Asie, ou laissez-vous séduire par la délicatesse des pâtisseries françaises. Chaque leçon vous transporte vers un nouveau pays, une nouvelle histoire.
        </Text>

        {/* Image 4 */}
        <Image src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cuisine 4" mb={4} />
      </VStack>
    </Box>
  );
};

export default HomePage;
