import { VStack } from "@chakra-ui/react";
import React from "react";
import { PageHeader } from "../components/molecules";

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  return (
    <VStack p={5}>
      <PageHeader />
      {children}
    </VStack>
  );
};