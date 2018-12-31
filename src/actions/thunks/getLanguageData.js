import { fetchCall } from '../../utilities/fetchCall';

import { isLoading, hasErrored, setLanguageData } from '../'

export const getLanguageData = (user) => {
  return async (dispatch) => {
    let languagesData;
    dispatch(isLoading('Getting Languages Data', true))

    try {
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/languages?username=${user.username}`
      languagesData = await fetchCall(cloudUrl)
    } catch(error) {
      dispatch(hasErrored('Languages data fetch failed', true))
      return;
    }
    dispatch(setLanguageData(languagesData))
    dispatch(isLoading('Languages data retrieved', false))
  }
}