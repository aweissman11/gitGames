import { combineReducers } from 'redux';

import { isLoading } from './isLoading';
import { userData } from './userData';
import { hasErrored } from './hasErrored';


export const rootReducer = combineReducers({
  isLoading,
  userData,
  hasErrored
})