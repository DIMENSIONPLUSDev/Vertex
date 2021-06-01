import { useQuery } from "react-query";
import axios from "axios";

const getPosts = async (endpoint) => {
  const { data } = await axios.get(
    endpoint
  );
  return data;
};

export default function usePosts(endpoint) {
  return useQuery("posts", getPosts(endpoint));
}
