const defaultState = {
  loadingWordCloud: true,
  message: 'booting up...'
}

export const loadingWordCloud = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_WORD_CLOUD' :
      const { message, loadingWordCloud } = action
      return { message, loadingWordCloud };
    default:
      return state;
  }
}

export default loadingWordCloud;