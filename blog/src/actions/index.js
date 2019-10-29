import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // all Posts
  // console.log(getState());
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log(userIds);
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // instead above with chain function
  // functions will be execute one after the other
  // parameters get past to the downside function
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts2 = () => {
  return async function(dispatch, getState){
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data})
  };
};

// equivalent to fetchPosts2 above with es16 refactoring
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// // use _memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
