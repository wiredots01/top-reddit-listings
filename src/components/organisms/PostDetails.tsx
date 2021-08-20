import { Badge, Box, Image } from "@chakra-ui/react";
import React from "react";

interface PostDetailsProps {

}

export const PostDetails: React.FC<PostDetailsProps> = () => {
  
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image fallbackSrc="https://via.placeholder.com/500" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            100
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
          Test Title
        </Box>

        <Box>
          Author Name
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            2 hours ago
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
