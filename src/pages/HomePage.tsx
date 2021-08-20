import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PostDetails, PostList } from "../components/organisms";
interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
      <Box>
        <PostList />
      </Box>
      <Box>
        <PostDetails />
      </Box>
    </Flex>
  );
};
