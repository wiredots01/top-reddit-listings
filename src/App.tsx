import { ChakraProvider, theme } from "@chakra-ui/react";
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      Top 50 Reddit's
    </ChakraProvider>
  );
}

export default App;
