import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import React, { useCallback, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteAllUserPosts, deleteUserPost, loadUserPosts, selectRedditLoadingPost, selectRedditTopPosts, selectSelectedPost, selectUserPost, UserPost } from "../../redux/user-posts";
import { PostList } from "../organisms";


const mapStateToProps = (state: RootState) => ({
  posts: selectRedditTopPosts(state),
  loading: selectRedditLoadingPost(state),
  selectedPost: selectSelectedPost(state)
});

const mapDispatchToProps = {
  loadUserPosts,
  deleteUserPost,
  deleteAllUserPosts,
  selectUserPost
}

const connector = connect(mapStateToProps, mapDispatchToProps);
interface SidebarDrawerProps extends ConnectedProps<typeof connector> {}


export const SidebarDrawerComponent: React.FC<SidebarDrawerProps> = ({ selectedPost, selectUserPost, loading, loadUserPosts, deleteUserPost, deleteAllUserPosts, posts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);


  const onSelectPost = (post: UserPost) => {
    selectUserPost(post);
  }

  const onDeletePost = (id: UserPost["id"]) => {
    deleteUserPost(id);
  }

  const onDeleteAll = () => {
    deleteAllUserPosts();
  };

  const fetchUserPost = useCallback(() => { 
    loadUserPosts();
  }, [loadUserPosts]);

  const hasPosts = posts.length !== 0;
  
  return (
    <>
      <Button size="sm" ref={btnRef} onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Top Reddit</DrawerHeader>

          <DrawerBody
            sx={{ 
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {loading ?
            <Flex width="100%" justifyContent="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Flex>
               :
              <PostList
                posts={posts}
                onSelectPost={onSelectPost}
                onDeletePost={onDeletePost}
              />
            }
            
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Button colorScheme="blue" size="sm" mt={5} onClick={hasPosts ? onDeleteAll : fetchUserPost}>
            {hasPosts ? "Dismiss All" : "Reload Data"}
          </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const SidebarDrawer = connector(SidebarDrawerComponent);