import { Flex } from "@chakra-ui/react";
import React from "react";
import { PostInfoBar } from "../molecules";
 

interface PostListProps {

}

export const PostList: React.FC<PostListProps> = () => {
  return (
    <Flex direction="column">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <PostInfoBar key={i} />
        ))}
    </Flex>
  );
};
