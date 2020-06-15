/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  generalList: [],
  countriesList: [],
  currentPage : 1,
  totalPages : 0,
  page:1,
};

export const worldReducer = createReducer(initialState, {
  [types.WORLD_GENERAL_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.WORLD_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.WORLD_GENERAL_RESPONSE](state, action) {
    return {
      ...state,
      generalList: action.response,
    
    };
  },
  [types.WORLD_GENERAL_FAILED](state) {
    return {
      ...state,
    };
  },

  [types.COUNTRIES_REQUEST](state, action) {
    return {
      ...state,
      page: action.page,
    };
  },
  [types.COUNTRIES_RESPONSE](state, action) {
    console.log('action.response.data.rows::',action.response.data.rows);
    return {
      ...state,
      countriesList: action.response.data.rows,
      currentPage : action.response.data.paginationMeta.currentPage,
      totalPages : action.response.data.paginationMeta.totalPages,
    
    };
  },
  [types.COUNTRIES_FAILED](state) {
    return {
      ...state,
    };
  },
});
