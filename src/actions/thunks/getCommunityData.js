import { fetchCall } from '../../utilities/fetchCall';

import { loadingCommunity, hasErrored, setCommunityData } from '../'

// import { mockCommunityData } from './__mocks__/mockCommunityData';

export const getCommunityData = (user) => {
  return async (dispatch) => {
    let communityData;
    dispatch(loadingCommunity('Pulling info on git community involvment', true))

    try {
      const communityUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/community?username=${user.username}`
      communityData = await fetchCall(communityUrl)
    } catch(error) {
      dispatch(hasErrored('Community data fetch failed', true))
      return;
    }

    dispatch(setCommunityData(communityData))
    dispatch(loadingCommunity('Community data retrieved', false))
  }
}


// import { fetchCall } from '../../utilities/fetchCall';

// import { loadingCommunity, hasErrored, setCommunityData } from '../'

// import { mockCommunityData } from './__mocks__/mockCommunityData';

// export const getCommunityData = (user) => {
//   return async (dispatch) => {
//     let communityData;
//     dispatch(loadingCommunity('Getting Community Data', true))
//     dispatch(setCommunityData(mockCommunityData))
//     dispatch(loadingCommunity('Community data retrieved', false))
//   }
// }