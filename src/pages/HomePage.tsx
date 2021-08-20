import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { PostDetails, PostList } from "../components/organisms";
import { RootState } from "../redux/store";
import { loadUserPosts, selectRedditTopPosts } from "../redux/user-posts";

const mapStateToProps = (state: RootState) => ({
  posts: selectRedditTopPosts(state),
});

const mapDispatchToProps = {
  loadUserPosts,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
interface HomePageProps extends ConnectedProps<typeof connector> {}



const HomePageComponent: React.FC<HomePageProps> = ({ loadUserPosts, posts }) => {
  useEffect(() => { 
    loadUserPosts(); 
  }, [loadUserPosts]);
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


export const HomePage = connector(HomePageComponent);

