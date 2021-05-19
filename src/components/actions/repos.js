import axios from "axios";
import {
  setFetchError,
  setIsFetching,
  setRepos
} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "", currentPage, perPage) => {
  return async dispatch => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setRepos(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 2000);
    }
  };
};
