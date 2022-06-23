import { combineReducers } from 'redux';
import user from './user_reducer';
import pill from './pill_reducer'
import searchHistory from './search_history_reducer';

const rootReducer = combineReducers({
    user,
    pill,
    searchHistory,
});

export default rootReducer;