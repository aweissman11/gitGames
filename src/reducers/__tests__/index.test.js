import { userData } from '../userData';
import { loadingWordCloud } from '../loadingWordCloud';
import { loadingUser } from '../loadingUser';
import { loadingCommits } from '../loadingCommits';
import { loadingLanguages } from '../loadingLanguages';
import { languageData } from '../languageData';
import { isLoading } from '../isLoading';
import { hasErrored } from '../hasErrored';
import { commitsData } from '../commitsData';
import { cloudData } from '../cloudData';
import { rootReducer } from '../index';

describe('cloudData', () => {
  it('should set cloudData', () => {
    const mockAction = {
      type: 'SET_WORD_DATA',
      cloudData: { hi: 3, hello: 5, bob: 20}
    }
    const expected = mockAction.cloudData;
    const result = cloudData(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {}
    const result = cloudData(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('commitsData', () => {
  it('should set commitsData', () => {
    const mockAction = {
      type: 'SET_COMMITS_DATA',
      commitsData: { hi: 3, hello: 5, bob: 20}
    }
    const expected = mockAction.commitsData;
    const result = commitsData(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {}
    const result = commitsData(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('hasErrored', () => {
  it('should set hasErrored', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'errors gallore',
      hasErrored: true
    }

    const expected = {
      message: 'errors gallore',
      hasErrored: true
    }
    
    const result = hasErrored(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {"hasErrored": false, "message": "nope"}
    const result = hasErrored(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('isLoading', () => {
  it('should set isLoading', () => {
    const mockAction = {
      type: 'LOADING',
      message: 'loading now',
      isLoading: true
    }

    const expected = {
      message: 'loading now',
      isLoading: true
    }

    const result = isLoading(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {"isLoading": true, "message": "booting up..."}
    const result = isLoading(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('languageData', () => {
  it('should set languageData', () => {
    const mockAction = {
      type: 'SET_LANGUAGE_DATA',
      languageData: { js: 0.898, ruby: 0.045 }
    }

    const expected = { js: 0.898, ruby: 0.045 }

    const result = languageData(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {}
    const result = languageData(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('loadingLanguages', () => {
  it('should set loadingLanguages', () => {
    const mockAction = {
      type: 'LOADING_LANGUAGES',
      message: 'loading languages now',
      loadingLanguages: true
    }

    const expected = {
      message: 'loading languages now',
      loadingLanguages: true
    }

    const result = loadingLanguages(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {"loadingLanguages": true, "message": "booting up..."}
    const result = loadingLanguages(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('loadingCommits', () => {
  it('should set loadingCommits', () => {
    const mockAction = {
      type: 'LOADING_COMMITS',
      message: 'loading commits now',
      loadingCommits: true
    }

    const expected = {
      message: 'loading commits now',
      loadingCommits: true
    }

    const result = loadingCommits(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {"loadingCommits": true, "message": "booting up..."}
    const result = loadingCommits(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('loadingUser', () => {
  it('should set loadingUser', () => {
    const mockAction = {
      type: 'LOADING_USER',
      message: 'booting up...',
      loadingUser: true
    }

    const expected = {
      message: 'search for something',
      loadingUser: false
    }

    const result = loadingUser(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {"loadingUser": true, "message": "booting up..."}
    const result = loadingUser(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('loadingWordCloud', () => {
  it('should set loadingWordCloud', () => {
    const mockAction = {
      type: 'LOADING_WORD_CLOUD',
      message: 'booting up...',
      loadingWordCloud: true
    }

    const expected = {
      message: 'booting up...',
      loadingWordCloud: true
    }

    const result = loadingWordCloud(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {"loadingWordCloud": true, "message": "booting up..."}
    const result = loadingWordCloud(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('userData', () => {
  it('should set userData', () => {
    const mockAction = {
      type: 'SET_USER_DATA',
      userData: { login: 'aweissman', name: 'aaron' }
    }

    const expected = { login: 'aweissman', name: 'aaron' }

    const result = userData(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = {}
    const result = userData(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('rootReducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  })
  
})