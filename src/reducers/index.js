import { combineReducers } from 'redux';

import { isLoading } from './isLoading';
import { userData } from './userData';
import { cloudData } from './cloudData';
import { languageData } from './languageData';
import { communityData } from './communityData';
import { commitsData } from './commitsData';
import { hasErrored } from './hasErrored';
import { loadingUser } from './loadingUser';
import { loadingLanguages } from './loadingLanguages';
import { loadingCommunity } from './loadingCommunity';
import { loadingCommits } from './loadingCommits';
import { loadingWordCloud } from './loadingWordCloud';


export const rootReducer = combineReducers({
  isLoading,
  userData,
  hasErrored,
  cloudData,
  commitsData,
  communityData,
  languageData,
  loadingWordCloud,
  loadingCommits,
  loadingCommunity,
  loadingLanguages,
  loadingUser,
})