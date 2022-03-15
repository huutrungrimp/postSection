import { useState, useEffect } from "react";
import axios from "axios";


export const GetPosts = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get(`http://backend4ds.herokuapp.com/posts/`).then((res) => {
      const item = res.data;
      console.log(item)
      setPosts(item);
    });
  }, []);
  console.log(posts);

  return posts;
};


