import { fetchCall } from '../../utilities/fetchCall';

import { loadingLanguages, hasErrored, setLanguageData } from '../'

export const getLanguageData = (user) => {
  return async (dispatch) => {
    let languagesData;
    dispatch(loadingLanguages('Getting Languages Data', true))

    try {
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/languages?username=${user.username}`
      languagesData = await fetchCall(cloudUrl)
      if (languagesData.error) {
        dispatch(hasErrored(languagesData.error, true))
        dispatch(loadingLanguages('Languages data has errored', false))
        return;
      }
    } catch(error) {
      dispatch(hasErrored('Languages data fetch failed', true))
      return;
    }
    dispatch(setLanguageData(languagesData))
    dispatch(loadingLanguages('Languages data retrieved', false))
  }
}