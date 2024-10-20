import { combineReducers } from "redux";

import todos from './todoReducer.js';
import visibilityFilter from './visibilityFilter.js';

/**
 * Here we are using something called CombineReducers from redux. 
 * This helps is keep the logical (todos AND
    visibilityFilter,) part separate but use
 *  it such in a way that we have only one reducer. */

export default combineReducers({
    todos,
    visibilityFilter,
})
