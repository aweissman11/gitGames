export const cloudData = (state = {}, action) => {
  switch(action.type) {
    case 'SET_WORD_DATA' :
      return action.cloudData;
    default:
      return state;
  }
}

export default cloudData;