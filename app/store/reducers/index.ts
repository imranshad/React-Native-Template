/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as imageReducer from './imageReducer'
export default Object.assign(imageReducer, loadingReducer);
