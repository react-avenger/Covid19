/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as worldReducer from './worldReducer';
export default Object.assign(worldReducer, loadingReducer);
