export const communityData = (state = {}, action) => {
  switch(action.type) {
    case 'SET_COMMUNITY_DATA' :
      return action.communityData;
    default:
      return state;
  }
}

export default communityData;