import { Box, Flex, Heading, Text, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ0ODg3MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" mb={4} />
        <VStack spacing={2} align="center">
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg">Software Developer</Text>
          <Text fontSize="md" color="gray.500">
            Specializing in Web Technologies
          </Text>
        </VStack>
        <Flex mt={5} justify="center" gap={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
          <Link href="mailto:johndoe@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
