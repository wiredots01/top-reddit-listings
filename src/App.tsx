import { ChakraProvider, theme } from "@chakra-ui/react";
import React from 'react';
import { MainLayout } from "./layouts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>

      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
