import { Flex } from "@chakra-ui/react";
import React from "react";
import { UserPost } from "../../redux/user-posts";
import { PostInfoBar } from "../molecules";

interface PostListProps {
  posts: UserPost[];
  onSelectPost: (post: UserPost) => void;
  onDeletePost: (id: UserPost["id"]) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onSelectPost, onDeletePost }) => {
  return (
    <Flex direction="column">
      {(posts || []).map(post => <PostInfoBar post={post} key={post.id} onSelectPost={onSelectPost} onDeletePost={onDeletePost} />)}
    </Flex>
  );
};
