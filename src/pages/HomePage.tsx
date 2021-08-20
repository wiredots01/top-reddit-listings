import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PostList } from "../components/organisms";
interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Flex background="green" width="100%" alignItems="center" justifyContent="center">
      <Box>
        <PostList />
      </Box>
      <Box>
        this is the post details
      </Box>
    </Flex>
  );
};
