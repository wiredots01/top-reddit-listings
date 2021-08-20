import { Badge, Box, Image } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { UserPost } from "../../redux/user-posts";
interface PostDetailsProps {
  post: UserPost;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg">
      <Image src={post.thumbnail} width="100%" fallbackSrc="https://via.placeholder.com/500" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {post.totalComments}
          </Badge>
          <Box
            fontWeight="hairline"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            comments
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {post.title}
        </Box>

        <Box>
          {post.author}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {moment(post.createdAt).format("LL")}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
