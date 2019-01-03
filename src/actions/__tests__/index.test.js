import * as Actions from '../index';

describe('actions', () => {
  it('should have a type of SET_USER_DATA', () => {
    const userData = {name: 'aaron'};
    const expected = {
      type: 'SET_USER_DATA',
      userData
    }
    const result = Actions.setUserData(userData);
    expect(result).toEqual(expected)
  })
  
  it('should have a type of SET_WORD_DATA', () => {
    const cloudData = {name: 12};
    const expected = {
      type: 'SET_WORD_DATA',
      cloudData
    }
    const result = Actions.setCloudData(cloudData);
    expect(result).toEqual(expected)
  })
  
  it('should have a type of SET_LANGUAGE_DATA', () => {
    const languageData = {name: 12};
    const expected = {
      type: 'SET_LANGUAGE_DATA',
      languageData
    }
    const result = Actions.setLanguageData(languageData);
    expect(result).toEqual(expected)
  })
  
  it('should have a type of LOADING', () => {
    const message = 'app is loading';
    const isLoading = true;
    const expected = {
      type: 'LOADING',
      message,
      isLoading
    }
    const result = Actions.isLoading(message, isLoading);
    expect(result).toEqual(expected)
  })
  
  it('should have a type of HAS_ERRORED', () => {
    const message = 'app has errored';
    const hasErrored = true;
    const expected = {
      type: 'HAS_ERRORED',
      message,
      hasErrored
    }
    const result = Actions.hasErrored(message, hasErrored);
    expect(result).toEqual(expected)
  })
    
  it('should have a type of LOADING_USER', () => {
    const message = 'app is loading';
    const loadingUser = true;
    const expected = {
      type: 'LOADING_USER',
      message,
      loadingUser
    }
    const result = Actions.loadingUser(message, loadingUser);
    expect(result).toEqual(expected)
  })
  
  it('should have a type of LOADING_LANGUAGES', () => {
    const message = 'app is loading';
    const loadingLanguages = true;
    const expected = {
      type: 'LOADING_LANGUAGES',
      message,
      loadingLanguages
    }
    const result = Actions.loadingLanguages(message, loadingLanguages);
    expect(result).toEqual(expected)
  })

  it('should have a type of LOADING_WORD_CLOUD', () => {
    const message = 'app is loading';
    const loadingWordCloud = true;
    const expected = {
      type: 'LOADING_WORD_CLOUD',
      message,
      loadingWordCloud
    }
    const result = Actions.loadingWordCloud(message, loadingWordCloud);
    expect(result).toEqual(expected)
  })
})