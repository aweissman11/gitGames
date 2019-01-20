// import { fetchCall } from '../../utilities/fetchCall';

// import { loadingUser, hasErrored, setUserData } from '../'
// import { getCloudData } from './getCloudData';
// import { getLanguageData } from './getLanguagesData';
// import { getCommunityData } from './getCommunityData';
// import { getCommitsData } from './getCommitsData';

// import { mockUserData } from './__mocks__/mockUserData';

// export const getUserData = (user) => {
//   return async (dispatch) => {
//     let userData;
//     dispatch(loadingUser('Getting User Data', true))
    
//     try {
//       const userUrl = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/users?username=${user.username}`
//       userData = await fetchCall(userUrl)
//       if (userData.error) {
//         dispatch(hasErrored(userData.error, true))
//         dispatch(loadingUser('User data has errored', false))
//         return;
//       }
//     } catch(error) {
//       dispatch(hasErrored('User data fetch failed', true))
//       return;
//     }
    
//     dispatch(getCloudData(user))
//     dispatch(getLanguageData(user))
//     dispatch(getCommitsData(user))
//     dispatch(getCommunityData(user))

//     dispatch(setUserData(userData));
//     dispatch(loadingUser('User data retrieved', false))
//   }
// }


import { fetchCall } from '../../utilities/fetchCall';

import { loadingUser, hasErrored, setUserData } from '../'
import { getCloudData } from './getCloudData';
import { getLanguageData } from './getLanguagesData';
import { getCommunityData } from './getCommunityData';
import { getCommitsData } from './getCommitsData';

import { mockUserData } from './__mocks__/mockUserData';

export const getUserData = (user) => {
  return async (dispatch) => {
    let userData;
    dispatch(loadingUser('Getting User Data', true))
    
    dispatch(getCloudData(user))
    dispatch(getLanguageData(user))
    dispatch(getCommitsData(user))
    dispatch(getCommunityData(user))

    dispatch(setUserData(mockUserData));
    dispatch(loadingUser('User data retrieved', false))
  }
}