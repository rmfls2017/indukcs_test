import { combineReducers } from 'redux';
import user from './user_reducer';
import pill from './pill_reducer'

const rootReducer = combineReducers({
    user,
    pill,
});

export default rootReducer;