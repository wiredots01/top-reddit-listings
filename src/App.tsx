import { ChakraProvider, theme } from "@chakra-ui/react";
import React from 'react';
import { MainLayout } from "./layouts";
import { HomePage } from "./pages";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
