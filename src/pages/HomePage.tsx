import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { PostDetails, PostList } from "../components/organisms";
import { RootState } from "../redux/store";
import { deleteUserPost, loadUserPosts, selectRedditTopPosts, UserPost } from "../redux/user-posts";

const mapStateToProps = (state: RootState) => ({
  posts: selectRedditTopPosts(state),
});

const mapDispatchToProps = {
  loadUserPosts,
  deleteUserPost
}

const connector = connect(mapStateToProps, mapDispatchToProps);
interface HomePageProps extends ConnectedProps<typeof connector> {}



const HomePageComponent: React.FC<HomePageProps> = ({ loadUserPosts, deleteUserPost, posts }) => {
  const [selectedPost, setSelectedPost] = useState<UserPost | null>(null);

  useEffect(() => { 
    loadUserPosts(); 
  }, [loadUserPosts]);

  const onSelectPost = (post: UserPost) => {
    setSelectedPost(post);
  }

  const onDeletePost = (id: UserPost["id"]) => {
    deleteUserPost(id);
  }

  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
      <Box>
        <PostList posts={posts} onSelectPost={onSelectPost} onDeletePost={onDeletePost} />
      </Box>
      <Box>
        {posts.length !== 0 && <PostDetails post={selectedPost ? selectedPost : posts[0] } />}
      </Box>
    </Flex>
  );
};


export const HomePage = connector(HomePageComponent);
