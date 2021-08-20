import { DeleteIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { UserPost } from "../../redux/user-posts";
import { stringLimiter } from "../../utils/helper";
interface PostInfoBarProps {
  post: UserPost;
  onSelectPost: (post: UserPost) => void;
  onDeletePost: (id: UserPost["id"]) => void;
}

export const PostInfoBar: React.FC<PostInfoBarProps> = ({ post, onSelectPost, onDeletePost }) => {
  
  const onSelect = () => {
    onSelectPost(post);
  };

  const onDelete = () => {
    onDeletePost(post.id);
  }

  return (
    <Box padding={2} onClick={onSelect}>
      <Stack direction="row" alignItems="center">
        <Image
          boxSize="150px"
          alt="the image"
          src={post.thumbnail! || ""}
          fallbackSrc="https://via.placeholder.com/150"
          radius={5}
        />
        <Stack width="100%" padding="1.5" alignSelf="stretch">
          <Flex justifyContent="space-between">
            <Text>{post.author}</Text>
            <Text>{moment(post.createdAt).format("LL")}</Text>
          </Flex>
          <Flex flex={1}>
            <Text>{stringLimiter(post.title, 50)}</Text>
          </Flex>
          
          <Flex justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <Badge colorScheme="red">{post.totalComments}</Badge>
              <Text>comments</Text>
            </Stack>
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              marginLeft="2"
              onClick={onDelete}
              icon={<DeleteIcon />}
              aria-label="Dismiss Post"
            />
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};
