import { Box, Button, Flex, Spinner, useMediaQuery } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { PostDetails, PostList } from "../components/organisms";
import { RootState } from "../redux/store";
import { deleteAllUserPosts, deleteUserPost, loadUserPosts, selectRedditLoadingPost, selectRedditTopPosts, selectSelectedPost, selectUserPost, UserPost } from "../redux/user-posts";



const mapStateToProps = (state: RootState) => ({
  posts: selectRedditTopPosts(state),
  loading: selectRedditLoadingPost(state),
  selectedPost: selectSelectedPost(state),
});

const mapDispatchToProps = {
  loadUserPosts,
  deleteUserPost,
  deleteAllUserPosts,
  selectUserPost
}

const connector = connect(mapStateToProps, mapDispatchToProps);
interface HomePageProps extends ConnectedProps<typeof connector> {}



const HomePageComponent: React.FC<HomePageProps> = ({ selectedPost, loading, selectUserPost, loadUserPosts, deleteUserPost, deleteAllUserPosts, posts }) => {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
  
  useEffect(() => { 
    loadUserPosts();
  }, [loadUserPosts]);

  const onSelectPost = (post: UserPost) => {
    selectUserPost(post);
  }

  const onDeletePost = (id: UserPost["id"]) => {
    deleteUserPost(id);
  }

  const fetchUserPost = useCallback(() => { 
    loadUserPosts();
  }, [loadUserPosts]);

  const onDeleteAll = () => {
    deleteAllUserPosts();
  };

  const hasPosts = posts.length !== 0;
  if (loading) return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
  
  return (
    <Flex width="100%" alignItems="flex-start" alignSelf="stretch" justifyContent="center">
      
      {isNotSmallScreen && (
        <Flex direction="column">
          {hasPosts && (
            <Box
              height="85vh"
              overflowY="scroll"
              sx={{ 
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <PostList posts={posts} onSelectPost={onSelectPost} onDeletePost={onDeletePost} />
            </Box>
          )}
          <Button size="sm" mt={5} onClick={hasPosts ? onDeleteAll : fetchUserPost}>
            {hasPosts ? "Dismiss All" : "Reload Data"}
          </Button>
        </Flex>
      )}
      
      
      <Box minWidth={isNotSmallScreen ? "500px": undefined } padding="10px">
        {selectedPost && <PostDetails post={selectedPost} />}
      </Box>
    </Flex>
  );
};


export const HomePage = connector(HomePageComponent);
