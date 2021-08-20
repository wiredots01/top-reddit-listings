import { ChakraProvider, DeepPartial, extendTheme, ThemeConfig } from "@chakra-ui/react";
import React from 'react';
import { MainLayout } from "./layouts";
import { HomePage } from "./pages";


function App() {
  const config: DeepPartial<ThemeConfig> = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config });
  
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
