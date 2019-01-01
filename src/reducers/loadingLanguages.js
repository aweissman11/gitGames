const defaultState = {
  loadingLanguages: true,
  message: 'booting up...'
}

export const loadingLanguages = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_LANGUAGES' :
      const { message, loadingLanguages } = action
      return { message, loadingLanguages: loadingLanguages };
    default:
      return state;
  }
}

export default loadingLanguages;