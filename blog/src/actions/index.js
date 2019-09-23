import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*  
    export const fetchPosts = () => {
    return function(dispatch, getStaet) {
        const promise = jsonPlaceholder.get("/posts");
        dispatch({ tpye: "FETCH_POSTS", payload: promise });
    };

    };
*/
