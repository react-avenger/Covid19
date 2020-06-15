/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isWorldLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.WORLD_ENABLE_LOADER](state) {
    return { ...state, isWorldLoading: true };
  },
  [types.WORLD_DISABLE_LOADER](state) {
    return { ...state, isWorldLoading: false };
  },
});
