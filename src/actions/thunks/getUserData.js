import { fetchCall } from '../../utilities/fetchCall';

import { isLoading, hasErrored, setUserData } from '../'
import { getCloudData } from './getCloudData';
import { getLanguageData } from './getLanguageData';

export const getUserData = (user) => {
  return async (dispatch) => {
    let userData;
    let wordCloudData;
    dispatch(isLoading('Getting User Data', true))
    try {
      const userUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/users?username=${user.username}`
      userData = await fetchCall(userUrl)
    } catch(error) {
      dispatch(hasErrored('User data fetch failed', true))
      return;
    }

    dispatch(getCloudData(user))
    dispatch(getLanguageData(user))
    dispatch(setUserData(userData));
    dispatch(isLoading('User data retrieved', false))
  }
}