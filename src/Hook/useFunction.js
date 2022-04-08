import { useReducerContext } from "Context";

export const useFunction = () => {
  const { searchTerm, videos } = useReducerContext();

  const searchFilter = () => {
    if (searchTerm === "") {
      return videos;
    } else {
      return videos.filter((v) =>
        v.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const searchFilteredVideos = searchFilter();

  return { searchFilteredVideos };
};
