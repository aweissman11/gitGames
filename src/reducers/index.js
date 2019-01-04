import { combineReducers } from 'redux';

import { isLoading } from './isLoading';
import { userData } from './userData';
import { cloudData } from './cloudData';
import { languageData } from './languageData';
import { commitsData } from './commitsData';
import { hasErrored } from './hasErrored';
import { loadingUser } from './loadingUser';
import { loadingLanguages } from './loadingLanguages';
import { loadingCommits } from './loadingCommits';
import { loadingWordCloud } from './loadingWordCloud';


export const rootReducer = combineReducers({
  isLoading,
  userData,
  hasErrored,
  cloudData,
  commitsData,
  languageData,
  loadingWordCloud,
  loadingCommits,
  loadingLanguages,
  loadingUser,
})