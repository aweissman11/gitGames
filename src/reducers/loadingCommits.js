const defaultState = {
  loadingCommits: true,
  message: 'booting up...'
}

export const loadingCommits = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_COMMITS' :
      const { message, loadingCommits } = action
      return { message, loadingCommits: loadingCommits };
    default:
      return state;
  }
}

export default loadingCommits;