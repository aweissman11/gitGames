import { fetchCall } from '../../utilities/fetchCall';

import { isLoading, hasErrored, setCloudData } from '../'

export const getCloudData = (user) => {
  return async (dispatch) => {
    let wordCloudData;
    dispatch(isLoading('Getting Cloud Data', true))

    try {
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/commit_messages?username=${user.username}`
      wordCloudData = await fetchCall(cloudUrl)
    } catch(error) {
      dispatch(hasErrored('Cloud data fetch failed', true))
      return;
    }
    dispatch(setCloudData(wordCloudData))
    dispatch(isLoading('Cloud data retrieved', false))
  }
}