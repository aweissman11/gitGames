export const commitsData = (state = {}, action) => {
  switch(action.type) {
    case 'SET_COMMITS_DATA' :
      return action.commitsData;
    default:
      return state;
  }
}

export default commitsData;