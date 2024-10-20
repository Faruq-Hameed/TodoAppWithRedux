// If you want to use createStore without this visual deprecation warning, 
// use the legacy_createStore import instead of import {createStore} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import rootReducer from '../reducers'

/**we are combining all our reducers with rootReducer and exporting the same */
export default store = createStore(rootReducer)