const defaultState = {
  loadingCommunity: true,
  message: 'booting up...'
}

export const loadingCommunity = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_COMMUNITY_DATA' :
      const { message, loadingCommunity } = action
      return { message, loadingCommunity: loadingCommunity };
    default:
      return state;
  }
}

export default loadingCommunity;