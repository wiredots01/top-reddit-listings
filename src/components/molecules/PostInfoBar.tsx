import { DeleteIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface PostInfoBarProps {

}

export const PostInfoBar: React.FC<PostInfoBarProps> = () => {
  
  return (
    <Box padding={2} onClick={() => {}}>
      <Stack direction="row" alignItems="center">
        <Image
          boxSize="150px"
          alt="the image"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Stack>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cupiditate consequuntur aliquid harum laboriosam atque exercitationem sit qui totam, fuga natus! Vitae illum minima facilis quae rem adipisci enim rerum?</Text>
          <Flex justifyContent="space-between">
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={() => {}}
            icon={<DeleteIcon />}
            aria-label="Dismiss Post"
          />
          <Stack direction="row" alignItems="center">
            <Badge colorScheme="red">2000</Badge>
            <Text>comments</Text>
          </Stack>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};
