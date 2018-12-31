import { combineReducers } from 'redux';

import { isLoading } from './isLoading';
import { userData } from './userData';
import { cloudData } from './cloudData';
import { languageData } from './languageData';
import { hasErrored } from './hasErrored';


export const rootReducer = combineReducers({
  isLoading,
  userData,
  hasErrored,
  cloudData,
  languageData
})