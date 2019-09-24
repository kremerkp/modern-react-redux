import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
  // test commit
};

/*
    export const fetchPosts = () => {
    return function(dispatch, getStaet) {
        const promise = jsonPlaceholder.get("/posts");
        dispatch({ tpye: "FETCH_POSTS", payload: promise });
    };

    };
*/
