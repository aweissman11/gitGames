import { fetchCall } from '../../utilities/fetchCall';

import { isLoading, hasErrored, setUserData } from '../'

export const getUserData = (user) => {
  return async (dispatch) => {
    let userData;
    dispatch(isLoading('Getting User Data', true))
    try {
      const url = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/users?username=${user.username}`
      userData = await fetchCall(url)
    } catch(error) {
      dispatch(hasErrored(error.message, true))
      return;
    }
    dispatch(setUserData(userData));
    dispatch(isLoading('User data retrieved', false))
  }
}