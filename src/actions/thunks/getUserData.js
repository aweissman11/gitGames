import { fetchCall } from '../../utilities/fetchCall';

import { isLoading, hasErrored, setUserData, setCloudData } from '../'

export const getUserData = (user) => {
  return async (dispatch) => {
    let userData;
    let wordCloudData;
    dispatch(isLoading('Getting User Data', true))
    try {
      const userUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/users?username=${user.username}`
      userData = await fetchCall(userUrl)
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/commit_messages?username=${user.username}`
      wordCloudData = await fetchCall(cloudUrl)
    } catch(error) {
      dispatch(hasErrored(error.message, true))
      return;
    }
    dispatch(setCloudData(wordCloudData))
    dispatch(setUserData(userData));
    dispatch(isLoading('User data retrieved', false))
  }
}