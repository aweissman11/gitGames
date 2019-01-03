import { getLanguageData } from '../getLanguageData';

import { loadingLanguages, hasErrored, setLanguageData, setUserD, loadingLanguagesa, loadingLanguagesta } from '../../index';

describe('getLanguageData', () => {
  const mockDispatch = jest.fn();
  let user;
  
  beforeEach(() => {
    user = 'aweissman11'
  })

  it('calls loadingLanguages to kick things off', () => {
    const thunk = getLanguageData(user);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(loadingLanguages('Getting Languages Data', true))
  })

  it('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, response: { statusText: 'Error has occured' }
    }))

    const thunk = getLanguageData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Languages data fetch failed', true))
  })


  it('should dispatch setLanguageData if the response is ok', async () => {
    const LanguagesData = { name: 4, url: 9, merge: 20 }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(LanguagesData)
    }))
    const thunk = getLanguageData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setLanguageData(LanguagesData))
  })

  it('should dispatch loadingLanguages(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
        movies: []
      })
    }))

    const thunk = getLanguageData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loadingLanguages('Languages data retrieved', false))
  })


})