const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  console.log(action);
  const url = "https://backend4ds.herokuapp.com";

  switch (action.type) {
    case "CREATE_POST": {
      fetch(`${url}/posts/${action.post.username}/newPost`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.post),
      });
      return {};
    }

    case "UPDATE_POST": {
      console.log(JSON.stringify(action.post));

      fetch(`${url}/posts/${action.post.id}/update`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.post),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      return {};
    }

    case "DELETE_POST": {
      console.log(action);
      fetch(`${url}/posts/${action.postID}/delete`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseID: action.postID,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      return {};
    }

    default:
      return { state };
  }
};

export default postReducer;
