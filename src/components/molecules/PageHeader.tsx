import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../atoms";

interface PageHeaderProps {

}

export const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <Flex width="100%" alignItems="center">
      <Heading size="md" fontWeight="semibold">Top Reddit</Heading>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};