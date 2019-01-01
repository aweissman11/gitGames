import { fetchCall } from '../../utilities/fetchCall';

import { loadingWordCloud, hasErrored, setCloudData } from '../'

export const getCloudData = (user) => {
  return async (dispatch) => {
    let wordCloudData;
    dispatch(loadingWordCloud('Getting Cloud Data', true))

    try {
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/commit_messages?username=${user.username}`
      wordCloudData = await fetchCall(cloudUrl)
      if (wordCloudData.error) {
        dispatch(hasErrored(wordCloudData.error, true))
        dispatch(loadingWordCloud('Word cloud data has errored', false))
        return;
      }
    } catch(error) {
      dispatch(hasErrored('Cloud data fetch failed', true))
      return;
    }
    dispatch(setCloudData(wordCloudData))
    dispatch(loadingWordCloud('Cloud data retrieved', false))
  }
}