export const setUserData = (userData) => {
  return {
    type: 'SET_USER_DATA',
    userData
  }
}

export const setCloudData = (cloudData) => {
  return {
    type: 'SET_WORD_DATA',
    cloudData
  }
}

export const setLanguageData = (languageData) => {
  return {
    type: 'SET_LANGUAGE_DATA',
    languageData
  }
}

export const setCommunityData = (communityData) => {
  return {
    type: 'SET_COMMUNITY_DATA',
    communityData
  }
}

export const setCommitsData = (commitsData) => {
  return {
    type: 'SET_COMMITS_DATA',
    commitsData
  }
}

export const isLoading = (message, isLoading) => {
  return {
    type: 'LOADING',
    message,
    isLoading
  }
}

export const loadingUser = (message, loadingUser) => {
  return {
    type: 'LOADING_USER',
    message,
    loadingUser
  }
}

export const loadingLanguages = (message, loadingLanguages) => {
  return {
    type: 'LOADING_LANGUAGES',
    message,
    loadingLanguages
  }
}

export const loadingCommits = (message, loadingCommits) => {
  return {
    type: 'LOADING_COMMITS',
    message,
    loadingCommits
  }
}

export const loadingCommunity = (message, loadingCommunity) => {
  return {
    type: 'LOADING_COMMUNITY_DATA',
    message,
    loadingCommunity
  }
}

export const loadingWordCloud = (message, loadingWordCloud) => {
  return {
    type: 'LOADING_WORD_CLOUD',
    message,
    loadingWordCloud
  }
}

export const hasErrored = (message, hasErrored) => {
  return {
    type: 'HAS_ERRORED',
    message,
    hasErrored
  }
}