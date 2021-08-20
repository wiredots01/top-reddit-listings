import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";

export interface UserPost {
  id: string;
  title: string;
  author: string;
  description: string;
  totalComments: number;
  thumbnail: string;
  createdAt: number;
}

interface UserPostsState {
  topPosts: UserPost[];
  loading: boolean;
}

interface PostResponseData {
  id: string;
  title: string;
  author: string;
  selftext: string;
  num_comments: number;
  thumbnail: string;
  created: number;
}
interface LoadUserPostResponse {
  data: PostResponseData
}

const LOAD_REQUEST = 'userPosts/load_request';
interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {}

const LOAD_SUCCESS = 'userPosts/load_success';
interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
  payload: {
    posts: UserPost[];
  }
}

const LOAD_FAILED = 'userPosts/load_failed';
interface LoadFailureAction extends Action<typeof LOAD_FAILED> {
  error: string;
}

export const loadUserPosts = (): ThunkAction<void, RootState, undefined, LoadRequestAction | LoadSuccessAction | LoadFailureAction
> => async(dispatch) => {
  dispatch({ type: LOAD_REQUEST });

  try {
    const response = await fetch('https://www.reddit.com/r/all/top.json');
    const responseData = await response.json();

    const topUserPosts: UserPost[] = responseData.data.children.map((post: LoadUserPostResponse) => {
      return {
        id: post.data.id,
        title: post.data.title,
        author: post.data.author,
        description: post.data.selftext || "",
        totalComments: post.data.num_comments,
        thumbnail: post.data.thumbnail || "",
        createdAt: post.data.created
      }
    });
    
    dispatch({ type: LOAD_SUCCESS, payload: { posts: [...topUserPosts] } });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOAD_FAILED, error: "Failed to load posts." });
  }
};

const DELETE_REQUEST = 'userPosts/delete_request';
interface DeleteRequestAction extends Action<typeof DELETE_REQUEST> {
  payload: { id: string }
}

export const deleteUserPost = (id: UserPost["id"]): ThunkAction<void, RootState, undefined, DeleteRequestAction
> => async(dispatch) => {
  dispatch({ type: DELETE_REQUEST, payload: { id } });
};

const DELETE_ALL_REQUEST = 'userPosts/delete_all_request';
interface DeleteAllRequestAction extends Action<typeof DELETE_ALL_REQUEST> {}

export const deleteAllUserPosts = (): ThunkAction<void, RootState, undefined, DeleteAllRequestAction
> => async(dispatch) => {
  dispatch({ type: DELETE_ALL_REQUEST });
};

const selectUserRedditPostState = (rootState: RootState) => rootState.redditPosts;

export const selectRedditTopPosts = (rootState: RootState) => { 
  const state = selectUserRedditPostState(rootState);
  return [...state.topPosts];
}

export const selectRedditLoadingPost = (rootState: RootState) => { 
  const state = selectUserRedditPostState(rootState);
  return state.loading;
}

const initialState: UserPostsState = {
  topPosts: [],
  loading: false
}

const userPostReducer = (state: UserPostsState = initialState, action: LoadSuccessAction | DeleteRequestAction | DeleteAllRequestAction | LoadRequestAction ) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      const { posts } = action.payload;
      return {
        ...state,
        topPosts: [...posts],
        loading: false
      };
    case DELETE_REQUEST:
      const { id } = action.payload;
      return { ...state, topPosts: state.topPosts.filter(post => post.id !== id) };
    case DELETE_ALL_REQUEST:
      return { ...state, topPosts: [] };
    case LOAD_REQUEST:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default userPostReducer;