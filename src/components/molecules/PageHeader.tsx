import { Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../atoms";
import { SidebarDrawer } from "../organisms";
interface PageHeaderProps {

}

export const PageHeader: React.FC<PageHeaderProps> = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex width="100%" alignItems="center">
      {isNotSmallScreen ? <Heading size="md" fontWeight="semibold">Topzz Reddit</Heading> : <SidebarDrawer />}
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};