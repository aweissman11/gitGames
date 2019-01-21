import { fetchCall } from '../../utilities/fetchCall';

import { loadingWordCloud, hasErrored, setCloudData } from '../'

import { mockWordCloudData } from './__mocks__/mockWordCloudData';

export const getCloudData = (user) => {
  return async (dispatch) => {
    let wordCloudData;
    dispatch(loadingWordCloud('Getting Cloud Data', true))

    try {
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/commit_messages?username=${user.username}`
      wordCloudData = await fetchCall(cloudUrl)
    } catch(error) {
      dispatch(hasErrored('Cloud data fetch failed', true))
      return;
    }

    dispatch(setCloudData(wordCloudData))
    dispatch(loadingWordCloud('Cloud data retrieved', false))
  }
}


// import { fetchCall } from '../../utilities/fetchCall';

// import { loadingWordCloud, hasErrored, setCloudData } from '../'

// import { mockWordCloudData } from './__mocks__/mockWordCloudData';

// export const getCloudData = (user) => {
//   return async (dispatch) => {
//     let wordCloudData;
//     dispatch(loadingWordCloud('Getting Cloud Data', true))
//     dispatch(setCloudData(mockWordCloudData))
//     dispatch(loadingWordCloud('Cloud data retrieved', false))
//   }
// }