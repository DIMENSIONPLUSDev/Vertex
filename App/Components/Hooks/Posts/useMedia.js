import { useQuery } from "react-query";
import axios from "axios";

const getMedia = async (media_id) => {
  const { data } = await axios.get(
    `https://dimensionplus.in/wp-json/wp/v2/media/${media_id}`
  );
  return data;
};

export default function useMedia(media_id) {
  return useQuery(media_id && ["media", media_id], getMedia,
  {
    enabled:!!media_id
  });
}
