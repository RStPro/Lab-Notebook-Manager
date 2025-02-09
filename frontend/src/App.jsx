import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={5} bg="gray.100">
        <Text fontSize="2xl" color="blue.600">Chakra UI v2 is working now!</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
