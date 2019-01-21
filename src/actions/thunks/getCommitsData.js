import { fetchCall } from '../../utilities/fetchCall';

import { loadingCommits, hasErrored, setCommitsData } from '../'

import { mockCommitsData } from './__mocks__/mockCommitsData';

export const getCommitsData = (user) => {
  return async (dispatch) => {
    let commitsData;
    dispatch(loadingCommits('Getting Commits Data', true))

    try {
      const cloudUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/commit_timelines?username=${user.username}`
      commitsData = await fetchCall(cloudUrl)
    } catch(error) {
      dispatch(hasErrored('Commits data fetch failed', true))
      return;
    }

    dispatch(setCommitsData(commitsData))
    dispatch(loadingCommits('Commits data retrieved', false))
  }
}


// import { fetchCall } from '../../utilities/fetchCall';

// import { loadingCommits, hasErrored, setCommitsData } from '../'

// import { mockCommitsData } from './__mocks__/mockCommitsData';

// export const getCommitsData = (user) => {
//   return async (dispatch) => {
//     let commitsData;
//     dispatch(loadingCommits('Getting Commits Data', true))
//     dispatch(setCommitsData(mockCommitsData))
//     dispatch(loadingCommits('Commits data retrieved', false))
//   }
// }