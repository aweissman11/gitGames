export const languageData = (state = {}, action) => {
  switch(action.type) {
    case 'SET_LANGUAGE_DATA' :
      return action.languageData;
    default:
      return state;
  }
}

export default languageData;